import { prisma } from "../../../lib/prisma"
import { FeedbackCreateData, FeedbackAdapter } from "../feedbacks"

export class PrismaFeedbackAdapter implements FeedbackAdapter {
  async create({ type, message, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        screenshot,
        message,
      },
    })
  }
}
