"use server";

import { z } from "zod";
import { revalidatePath } from 'next/cache';
import { MongoClient, ObjectId } from 'mongodb';
import { GuestbookMessage, GuestbookMessageWithId, guestbookMessageSchema } from "@/lib/models/guestbook";
import mongoClient from "@/lib/mongodb";

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


const guestbookFormSchema = guestbookMessageSchema.omit({ createdAt: true });

export async function addGuestbookMessage(prevState: any, formData: FormData): Promise<{
    message: string;
    errors?: {
        name?: string[] | undefined;
        message?: string[] | undefined;
    };
    success: boolean;
}> {
    const validatedFields = guestbookFormSchema.safeParse({
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
    
    try {
        const client = await mongoClient;
        const db = client.db();
        const collection = db.collection<GuestbookMessage>("guestbook");
        
        const newMessage: GuestbookMessage = {
            ...validatedFields.data,
            createdAt: new Date(),
        };
        
        await collection.insertOne(newMessage);
        
        revalidatePath('/');

        return {
            message: "Thank you for your lovely message!",
            success: true,
        };
    } catch (error) {
        console.error("Error adding guestbook message:", error);
        return {
            message: "An unexpected error occurred. Please try again.",
            success: false,
        }
    }
}

export async function getGuestbookMessages(): Promise<GuestbookMessageWithId[]> {
    try {
        const client = await mongoClient;
        const db = client.db();
        const collection = db.collection<GuestbookMessage>("guestbook");
        
        const messages = await collection.find({}).sort({ createdAt: -1 }).limit(50).toArray();

        return messages.map(doc => ({
            ...doc,
            _id: doc._id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching guestbook messages:", error);
        return [];
    }
}
