"use server"

import { Resend } from "resend";
import { validateString } from "./utils";

const resend = new Resend(process.env.RESENT_API_KEY);

export const sendEmailServerAction = async (FormData: FormData) => {
    const senderName = FormData.get("user name");
    const senderEmail = FormData.get("email");
    const message = FormData.get("message");

    if (!validateString(senderName)) {
        return {
            error: "Invalid sender name"
        };
    }

    if (!validateString(senderEmail)) {
        return {
            error: "Invalid sender name"
        };
    }

    if (!validateString(message)) {
        return {
            error: "Invalid sender name"
        };
    }

    await resend.emails.send({
        from: 'Personal Website <onboarding@resend.dev>',
        to: '04felix.li@gmail.com',
        subject: senderName as string,
        reply_to: senderEmail as string,
        text: message as string
    });

    FormData.delete
}