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
    <Button
      type="submit"
      disabled={pending}
      className="
        w-full font-semibold tracking-wide text-base
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-0.5 active:translate-y-0
        disabled:opacity-70 disabled:cursor-not-allowed
        focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none
      "
    >
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
      toast({ title: "Success!", description: state.message });
      formRef.current?.reset();
      onMessageAdded();
    } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
      toast({ variant: "destructive", title: "Oops! Something went wrong.", description: state.message });
    }
  }, [state, toast, onMessageAdded]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 font-sans">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-medium text-sm sm:text-base tracking-wide text-foreground">
          Your Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="e.g., John Doe"
          required
          className="
            rounded-xl px-4 py-2 text-sm
            border border-primary/25 hover:border-primary/40
            transition-all duration-300
            placeholder:text-muted-foreground/70
            focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary
            focus-visible:outline-none
          "
        />
        {state.errors?.name && (
          <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-medium text-sm sm:text-base tracking-wide text-foreground">
          Your Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share your well wishes..."
          required
          className="
            rounded-xl px-4 py-3 text-sm
            border border-primary/25 hover:border-primary/40
            transition-all duration-300
            placeholder:text-muted-foreground/70
            focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary
            focus-visible:outline-none
            min-h-[110px]
          "
        />
        {state.errors?.message && (
          <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
};

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
    <Card
      className="
        bg-background border border-primary/20 shadow-2xl rounded-3xl h-full
        transition-all duration-500
        hover:shadow-primary/25 hover:-translate-y-1
        ring-1 ring-primary/5
      "
    >
      <CardHeader className="pb-4">
        <CardTitle
          className="
            font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-primary
            leading-none
          "
        >
          Guestbook
        </CardTitle>
        <div className="mt-2 h-1 w-20 rounded-full bg-primary/20" aria-hidden />
        <CardDescription className="mt-3 font-sans text-[15px] sm:text-base text-muted-foreground leading-relaxed">
          See what our friends and family have to say, and leave your own message!
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <ScrollArea
          className="
            h-[420px] pr-3 sm:pr-4
            scroll-smooth
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
          "
        >
          <div className="space-y-4 sm:space-y-5">
            {isPending && messages.length === 0 ? (
              <p className="text-muted-foreground text-center py-10 italic text-lg animate-pulse">
                Loading messages...
              </p>
            ) : messages.length > 0 ? (
              messages.map((msg, index) => (
                <AnimateOnScroll
                  key={msg._id}
                  delay={index * 0.08}
                  className="
                    group flex items-start gap-4 p-4 sm:p-5
                    rounded-2xl border border-primary/10
                    transition-all duration-300
                    hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg
                    bg-background
                  "
                >
                  <Avatar className="h-12 w-12 sm:h-14 sm:w-14 ring-2 ring-primary/25 shadow-md">
                    <AvatarFallback className="font-bold text-lg text-primary">
                      {msg.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-[15px] sm:text-lg text-foreground tracking-wide">
                        {msg.name}
                      </p>
                      <span className="hidden sm:inline text-[11px] px-2 py-0.5 rounded-full border border-primary/20 text-muted-foreground/80">
                        Guest
                      </span>
                    </div>

                    <p className="mt-1 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
                      {msg.message}
                    </p>

                    <p className="text-[11px] sm:text-xs text-muted-foreground/70 mt-2 italic">
                      {new Date(msg.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-10 italic text-lg">
                Be the first to leave a message!
              </p>
            )}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="flex-col items-start gap-4 pt-6">
        <Separator className="opacity-60" />
        <div className="w-full">
          <p className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-3 tracking-tight">
            Leave a Message
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Share your thoughts—be kind and respectful.
          </p>
          <GuestbookForm onMessageAdded={fetchMessages} />
        </div>
      </CardFooter>
    </Card>
  );
}