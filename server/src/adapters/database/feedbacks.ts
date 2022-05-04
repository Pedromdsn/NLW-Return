export interface FeedbackCreateData {
  type: string
  screenshot: string
  message: string
}

export interface FeedbackRepository {
  create(data: FeedbackCreateData): Promise<void>
}
