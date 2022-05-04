import { SubmitFeedback } from "./submit-feedback"

const createFeedback = jest.fn()
const createNodemailer = jest.fn()

const submitFeedback = new SubmitFeedback({ create: createFeedback }, { sendMail: createNodemailer })

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        message: "example comment",
        screenshot: "data:image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).resolves.not.toThrow()
  })

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        message: "example comment",
        screenshot: "data:image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).rejects.toThrow()
  })

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        message: "",
        screenshot: "data:image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).rejects.toThrow()
  })

  it("should not be able to submit feedback without an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        message: "example comment",
        screenshot: "image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).rejects.toThrow()
  })
})
