import { FeedbackAdapter } from "../adapters/database/feedbacks"
import { MailAdapter } from "../adapters/mail/mail"

interface SubmitFeedbackRequest {
  type: string
  message: string
  screenshot: string
}

export class SubmitFeedback {
  constructor(private feedback: FeedbackAdapter, private mail: MailAdapter) {}

  async execute({ type, message, screenshot }: SubmitFeedbackRequest) {
    if (!type) throw new Error("Feedback type is required")
    if (!message) throw new Error("Feedback message is required")
    if (screenshot && !screenshot.startsWith("data:image/png;base64")) throw new Error("Invalid screenshot format")

    await this.feedback.create({ type, screenshot, message })

    await this.mail.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Novo Feedback</p>`,
        `<p>Tipo: ${type}</p>`,
        `<p>Mensagem: ${message}</p>`,
        `</div>`,
      ].join("\n"),
    })
  }
}
