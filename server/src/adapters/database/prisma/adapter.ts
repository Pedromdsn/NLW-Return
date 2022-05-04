import { prisma } from "../../../lib/prisma"
import { FeedbackCreateData, FeedbackRepository } from "../feedbacks"

export class PrismaFeedbackRepository implements FeedbackRepository {
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
