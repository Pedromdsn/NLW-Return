export interface FeedbackCreateData {
  type: string
  screenshot: string
  message: string
}

export interface FeedbackAdapter {
  create(data: FeedbackCreateData): Promise<void>
}
