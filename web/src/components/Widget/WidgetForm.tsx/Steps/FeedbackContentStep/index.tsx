import CloseButton from "../../../CloseButton"
import ScreenShotButton from "./ScreenshotButton"

import { FeedbackType, feedbackTypes } from ".."
import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react"

interface Props {
  feedbackType: FeedbackType
  onFeedbackRestart: () => void
  onFeedbackSend: () => void
}

const FeedbackContentStep = ({ feedbackType, onFeedbackRestart, onFeedbackSend }: Props) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState("")

  const handleScreenshotTook = (screenshot: string | null) => {
    setScreenshot(screenshot)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(`Feedback type: ${feedbackType}`)
    console.log(`Screenshot: ${screenshot}`)
    console.log(`Comment: ${comment}`)

    onFeedbackSend()
  }

  return (
    <>
      <header>
        <button className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestart}>
          <ArrowLeft weight="bold" className="h-4 w-4" />
        </button>
        <span className="flex items-center gap-2 text-xl leading-6">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="h-6 w-6" />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmit} className="my-4 w-full">
        <textarea
          className="min-h-[112px] w-full min-w-[304px] resize-none
					rounded-md border-zinc-600 bg-transparent text-zinc-100
					placeholder-zinc-400 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700
					focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>

        <footer className="mt-2 flex gap-2">
          <ScreenShotButton screenshot={screenshot} onScreenshot={handleScreenshotTook} />
          <button
            disabled={!comment}
            className="flex flex-1 items-center justify-center rounded-md border-transparent 
						bg-brand-500 p-2 text-sm transition-colors hover:bg-brand-300 focus:outline-none 
						focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900
						disabled:opacity-50 disabled:hover:bg-brand-500"
            type="submit"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  )
}

export default FeedbackContentStep
