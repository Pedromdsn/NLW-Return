import FeedbackContentStep from "./FeedbackContentStep"
import FeedbackSuccessStep from "./FeedbackSuccessStep"
import FeedbackTypeStep from "./FeedbackTypeStep"

import bugImageUrl from "../../../../assets/bug.svg"
import ideaImageUrl from "../../../../assets/idea.svg"
import otherImageUrl from "../../../../assets/other.svg"

import { useState } from "react"

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes

const Steps = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleFeedbackRestart = () => {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  if (feedbackSent) return <FeedbackSuccessStep onFeedBackRestartRequested={handleFeedbackRestart} />

  if (feedbackType)
    return <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestart={handleFeedbackRestart} onFeedbackSend={() => setFeedbackSent(true)} />

  return <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
}

export default Steps
