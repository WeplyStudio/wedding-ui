"use server";

import { z } from "zod";
import { revalidatePath } from 'next/cache';

const rsvpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  attending: z.enum(["yes", "no"], {required_error: "Please select an option."}),
  guests: z.coerce.number().int().min(1).max(5).optional(),
  message: z.string().max(500, "Message is too long.").optional(),
});

export async function handleRsvp(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    attending: formData.get("attending"),
    guests: formData.get("guests"),
    message: formData.get("message"),
  }

  // If not attending, guests are not required
  if (rawData.attending === 'no') {
    rawData.guests = undefined;
  }
  
  const validatedFields = rsvpSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }
  
  // Here you would typically save to a database (e.g., MongoDB)
  console.log("RSVP Submission:", validatedFields.data);

  return {
    message: "Thank you for your RSVP!",
    errors: {},
    success: true,
  };
}


const guestbookSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  message: z.string().min(5, "Message must be at least 5 characters.").max(500, "Message is too long."),
});


export async function handleGuestbookMessage(prevState: any, formData: FormData) {
    const validatedFields = guestbookSchema.safeParse({
        name: formData.get('name'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please correct the errors below.",
            success: false,
        };
    }

    // Here you would typically save to a database (e.g., MongoDB)
    console.log("Guestbook Submission:", validatedFields.data);
    
    // In a real app, you would revalidate the page path to show the new message
    // revalidatePath('/');

    return {
        message: "Thank you for your lovely message!",
        errors: {},
        success: true,
    };
}
