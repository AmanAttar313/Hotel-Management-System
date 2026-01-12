import User from "./models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {

    // Create a Svix instance with clerk webhook secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

    // Getting Headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-timestamp": req.headers["svix-timestamp"],
    }

  } catch (error) {

  }
}
