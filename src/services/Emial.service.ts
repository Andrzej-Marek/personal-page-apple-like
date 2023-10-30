import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

type EmailPayload = {
  name?: string;
  email: string;
  message: string;
};
export class EmailService {
  static async send(payload: EmailPayload): Promise<EmailJSResponseStatus> {
    console.log({ payload });
    return await emailjs.send(
      "service_a278u1r",
      "template_zjzy2sw",
      payload,
      "edm62sEKd6H4rgn9j"
    );
  }
}
