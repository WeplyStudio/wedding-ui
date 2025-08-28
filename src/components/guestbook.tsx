
"use client";

import React, { useActionState, useEffect, useRef, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { addGuestbookMessage, getGuestbookMessages } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import type { GuestbookMessageWithId } from "@/lib/models/guestbook";
import { AnimateOnScroll } from "./animate-on-scroll";
import { Separator } from "./ui/separator";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Send Message"}
    </Button>
  );
}

const GuestbookForm = ({ onMessageAdded }: { onMessageAdded: () => void }) => {
    const [state, formAction] = useActionState(addGuestbookMessage, initialState);
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
          toast({
            title: "Success!",
            description: state.message,
          });
          formRef.current?.reset();
          onMessageAdded(); // Callback to refresh messages
        } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
          toast({
            variant: "destructive",
            title: "Oops! Something went wrong.",
            description: state.message,
          });
        }
    }, [state, toast, onMessageAdded]);

    return (
        <form ref={formRef} action={formAction} className="space-y-4 font-sans">
            <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" placeholder="e.g., John Doe" required />
                 {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" name="message" placeholder="Share your well wishes..." required />
                 {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
        </form>
    )
}

export default function GuestBook() {
    const [messages, setMessages] = useState<GuestbookMessageWithId[]>([]);
    const [isPending, startTransition] = useTransition();

    const fetchMessages = () => {
        startTransition(async () => {
            const fetchedMessages = await getGuestbookMessages();
            setMessages(fetchedMessages);
        });
    };

    useEffect(() => {
        fetchMessages();
    }, []);
  
    return (
       <Card className="bg-background/80 backdrop-blur-sm border-primary/10 shadow-xl h-full">
          <CardHeader>
              <CardTitle className="font-serif text-3xl text-primary">Guestbook</CardTitle>
              <CardDescription className="font-sans">See what our friends and family have to say, and leave your own message!</CardDescription>
          </CardHeader>
          <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-6">
                      {isPending && messages.length === 0 ? (
                          <p className="text-muted-foreground text-center py-8 font-sans">Loading messages...</p>
                      ) : messages.length > 0 ? (
                          messages.map((msg, index) => (
                             <AnimateOnScroll key={msg._id} delay={index * 0.1} className="flex items-start gap-4">
                                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                                      <AvatarFallback>{msg.name.charAt(0).toUpperCase()}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                      <p className="font-semibold text-foreground font-sans">{msg.name}</p>
                                      <p className="text-sm text-muted-foreground font-sans">{msg.message}</p>
                                      <p className="text-xs text-muted-foreground/70 mt-1 font-sans">
                                          {new Date(msg.createdAt).toLocaleDateString("en-US", {
                                              year: 'numeric', month: 'long', day: 'numeric'
                                          })}
                                      </p>
                                  </div>
                              </AnimateOnScroll>
                          ))
                      ) : (
                          <p className="text-muted-foreground text-center py-8 font-sans">Be the first to leave a message!</p>
                      )}
                  </div>
              </ScrollArea>
          </CardContent>
          <CardFooter className="flex-col items-start gap-4 pt-6">
            <Separator />
            <div className="w-full">
                <p className="font-serif text-2xl text-primary mb-4">Leave a Message</p>
                <GuestbookForm onMessageAdded={fetchMessages} />
            </div>
          </CardFooter>
      </Card>
    );
  }
