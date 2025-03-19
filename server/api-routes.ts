import { Router } from "express";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const router = Router();

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

// Contact form endpoint
router.post("/contact", async (req, res) => {
  try {
    // Validate request body
    const data = contactFormSchema.parse(req.body);
    
    // Log the contact form submission (in a real app, you might save to DB or send email)
    console.log("Contact form submission:", data);
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send notification email
    // 3. Configure anti-spam protection
    
    // Return success
    return res.status(200).json({ 
      message: "Message received! Thank you for contacting us."
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: fromZodError(error).message });
      }
      return res.status(500).json({ message: error.message || "Internal server error" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
