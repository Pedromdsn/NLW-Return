import { transport } from "../../../lib/nodemailer";
import { MailAdapter, MailData } from "../mail";

export class NodemailerAdapter implements MailAdapter {
	async sendMail(data: MailData): Promise<void> {
		const { subject, body } = data;
		await transport.sendMail({  
			from: "FeedBack",
			to: "Pedro Nogueira <pedromdsn.2002@hotmail.com>",
			subject: subject,
			html: body,
		})
	}
}