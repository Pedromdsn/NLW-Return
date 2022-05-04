import express from "express"

import { PrismaFeedbackRepository } from "./adapters/database/prisma/adapter"
import { SubmitFeedbackUSeCase } from "./use-cases/submit-feedback"
import { NodemailerAdapter } from "./adapters/mail/nodemailer/adapter"

export const router = express.Router()

router.post("/feedbacks", async (req, res) => {
  const { type, screenshot, message } = req.body

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerAdapter = new NodemailerAdapter()
  const submitFeedbackCase = new SubmitFeedbackUSeCase(prismaFeedbackRepository, nodemailerAdapter)

  await submitFeedbackCase
    .execute({ type, screenshot, message })
    .catch(({ message }) => res.status(500).json({ error: message }))

  return res.status(201).send()
})
