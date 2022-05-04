import nodemailer from "nodemailer"

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "654323354dde05",
    pass: "a49a599b99d30a",
  },
})