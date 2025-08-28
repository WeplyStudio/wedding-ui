import { z } from 'zod';

export const guestbookMessageSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  message: z.string().min(3, { message: "Message must be at least 3 characters." }).max(500),
  createdAt: z.date(),
});

export type GuestbookMessage = z.infer<typeof guestbookMessageSchema>;

export type GuestbookMessageWithId = GuestbookMessage & {
    _id: string;
}
