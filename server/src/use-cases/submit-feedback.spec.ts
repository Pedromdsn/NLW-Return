import { SubmitFeedbackUSeCase } from "./submit-feedback"

const createFeedbackRepository = jest.fn()
const createNodemailerAdapter = jest.fn()

const submitFeedbackCase = new SubmitFeedbackUSeCase(
  { create: createFeedbackRepository },
  { sendMail: createNodemailerAdapter }
)

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackCase.execute({
        type: "BUG",
        message: "example comment",
        screenshot: "data:image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).resolves.not.toThrow()
  })

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedbackCase.execute({
        type: "",
        message: "example comment",
        screenshot: "data:image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).rejects.toThrow()
  })

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedbackCase.execute({
        type: "BUG",
        message: "",
        screenshot: "data:image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).rejects.toThrow()
  })

  it("should not be able to submit feedback without an invalid screenshot", async () => {
    await expect(
      submitFeedbackCase.execute({
        type: "BUG",
        message: "example comment",
        screenshot: "image/png;base64:TesteTesteTesteTesteTeste",
      })
    ).rejects.toThrow()
  })
})
