export interface MailData {
  subject: string
  body: string
}

export interface MailAdapter {
  sendMail(data: MailData): Promise<void>
}
