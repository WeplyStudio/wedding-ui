"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { handleGuestbookMessage } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending} size="lg">
      {pending ? "Posting..." : "Post Message"}
    </Button>
  );
}

export default function GuestbookForm() {
  const [state, formAction] = useFormState(handleGuestbookMessage, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
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
        <Label htmlFor="guest-name">Your Name</Label>
        <Input id="guest-name" name="name" placeholder="e.g., Alex Johnson" required />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="guest-message">Your Message</Label>
        <Textarea id="guest-message" name="message" placeholder="Share your well wishes..." rows={4} required />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
      </div>

      <SubmitButton />
    </form>
  );
}
