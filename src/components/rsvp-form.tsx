"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { handleRsvp } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending} size="lg">
      {pending ? "Submitting..." : "Submit RSVP"}
    </Button>
  );
}

export default function RsvpForm() {
  const [state, formAction] = useFormState(handleRsvp, initialState);
  const { toast } = useToast();
  const [attending, setAttending] = useState<string | undefined>(undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
      setAttending(undefined);
    } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" name="name" placeholder="e.g., Jane Doe" required />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>

      <div className="space-y-3">
        <Label>Will you be attending?</Label>
        <RadioGroup name="attending" onValueChange={setAttending} className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Joyfully Attending</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">Regretfully Decline</Label>
          </div>
        </RadioGroup>
        {state.errors?.attending && <p className="text-sm text-destructive mt-1">{state.errors.attending[0]}</p>}
      </div>

      {attending === "yes" && (
        <div className="space-y-2 animate-in fade-in duration-500">
          <Label htmlFor="guests">Number of Guests (including yourself)</Label>
          <Select name="guests" defaultValue="1">
            <SelectTrigger>
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map(num => (
                <SelectItem key={num} value={String(num)}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {state.errors?.guests && <p className="text-sm text-destructive mt-1">{state.errors.guests[0]}</p>}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea id="message" name="message" placeholder="Leave a message for the couple..." />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
