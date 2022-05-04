import express from "express"

import { PrismaFeedbackAdapter } from "./adapters/database/prisma"
import { SubmitFeedback } from "./use-cases/submit-feedback"
import { NodemailerMailAdapter } from "./adapters/mail/nodemailer"

export const router = express.Router()

router.post("/feedbacks", async (req, res) => {
  const { type, screenshot, message } = req.body

  const prismaFeedback = new PrismaFeedbackAdapter()
  const nodemailer = new NodemailerMailAdapter()
  const submitFeedback = new SubmitFeedback(prismaFeedback, nodemailer)

  await submitFeedback
    .execute({ type, screenshot, message })
    .catch(({ message }) => res.status(500).json({ error: message }))

  return res.status(201).send()
})
