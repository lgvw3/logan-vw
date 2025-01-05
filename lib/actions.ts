'use server'
import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import { z } from 'zod';

const zMessage = z.object({
    name: z.string({invalid_type_error: 'Please share your name'}).min(1,  { message: "A name is required" }).trim(),
    email: z.string().email(),
    message: z.string()
})

type MessageState = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string | null;
};

export default async function sendMessage(prevState: MessageState, formData: FormData) {
    const validatedFields = zMessage.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    })

    if (validatedFields.error) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Improper inputs. Please correct.'
        };
    }

    const {name, email, message} = validatedFields.data

    try {
        const transporter = nodemailer.createTransport({
            //service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.APP_PASS,
            },
        });

        const mailOptions: MailOptions = {
            from: process.env.EMAIL_USER,
            to: "logangvw3@gmail.com",
            subject: `Message from portfolio site user, ${name}`,
            text: `You received a new message:
            
            From: ${email}
            Message: ${message}`,
            replyTo: email
        };

        const results = await transporter.sendMail(mailOptions);
        
        if (results.accepted) {
            return {
                message: 'Success',
            }
        }
        else {
            return {
                message: 'Failed to send'
            }
        }


    } catch (error) {
      
        console.error('Error sending email:', error);
        return {
            message: "Failed to send" 
        }

    }
}
