import { z } from "zod";

/** A user as the app stores it. */
export const User = z.object({ name: z.string().min(1), email: z.email() });

export const parseUser = (input) => User.parse(input);
