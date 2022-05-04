import { FeedbackRepository } from "../adapters/database/feedbacks"
import { MailAdapter } from "../adapters/mail/mail"

interface SubmitFeedbackUseCaseRequest {
  type: string
  screenshot: string
  message: string
}

export class SubmitFeedbackUSeCase {
  constructor(private feedbackRepository: FeedbackRepository, private mailAdapter: MailAdapter) {}

  async execute(req: SubmitFeedbackUseCaseRequest) {
    const { type, screenshot, message } = req

    await this.feedbackRepository.create({
      type,
      screenshot,
      message,
    })

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
