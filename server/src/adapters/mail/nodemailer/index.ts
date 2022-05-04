import { transport } from "../../../lib/nodemailer"
import { MailAdapter, MailData } from "../mail"

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: MailData) {
    await transport.sendMail({
      from: "FeedBack",
      to: "Pedro Nogueira <pedromdsn.2002@hotmail.com>",
      subject: subject,
      html: body,
    })
  }
}
