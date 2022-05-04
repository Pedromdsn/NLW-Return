import { FeedbackRepository } from "../adapters/database/feedbacks"
import { MailAdapter } from "../adapters/mail/mail"

interface SubmitFeedbackUseCaseRequest {
  type: string
  message: string
  screenshot: string
}

export class SubmitFeedbackUSeCase {
  constructor(private feedbackRepository: FeedbackRepository, private mailAdapter: MailAdapter) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, message, screenshot } = request

    if (!type) throw new Error("Feedback type is required")

    if (!message) throw new Error("Feedback message is required")

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) throw new Error("Invalid screenshot format")

    await this.feedbackRepository.create({ type, screenshot, message })

    await this.mailAdapter.sendMail({
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
