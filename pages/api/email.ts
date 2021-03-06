import { NextApiRequest, NextApiResponse } from 'next';
import MailService from '@sendgrid/mail';
import DOMPurify from 'isomorphic-dompurify';

import { ContactForm } from '../../src/types/ContactForm';

MailService.setApiKey(process.env.SENDGRID_API_KEY);

// Serverless function that handles sending emails.
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
): void {
    const { name, email, subject, message } = JSON.parse(
        req.body as string
    ) as ContactForm;

    // Sanitize form fields
    const sanitizedFields = {
        name: DOMPurify.sanitize(name),
        email: DOMPurify.sanitize(email),
        subject: DOMPurify.sanitize(subject),
        message: DOMPurify.sanitize(message),
    };

    // TODOS:
    // - Add in spam prevention

    const emailContent = `
		Name: ${sanitizedFields.name}\r\n\r\n
		email: ${sanitizedFields.email}\r\n\r\n
		subject: ${sanitizedFields.subject}\r\n\r\n
		message: ${sanitizedFields.message}
	`;

    const emailPayload = {
        to: process.env.RECEIVER_EMAIL,
        from: process.env.SENDER_EMAIL,
        subject,
        text: emailContent,
        html: emailContent.replace(/\r\n/g, '<br>'),
    };

    console.log(emailPayload);

    MailService.send(emailPayload);

    res.status(200).json({ status: 'Ok' });
}
