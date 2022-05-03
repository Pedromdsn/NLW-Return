import { FeedbackType, feedbackTypes } from ".."
import CloseButton from "../../../CloseButton"

interface Props {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

const FeedbackTypeStep = ({ onFeedbackTypeChanged: setFeedbackType }: Props) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([type, { title, image }]) => {
          return (
            <button
              key={type}
              className="flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent 
							bg-zinc-800 py-5 hover:border-brand-500 focus:border-brand-500 focus:outline-0"
              onClick={() => setFeedbackType(type as FeedbackType)}
            >
              <img src={image.source} alt={image.alt} className="h-12 w-12 rounded-full" />
              <span className="text-center text-zinc-400">{title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

export default FeedbackTypeStep
