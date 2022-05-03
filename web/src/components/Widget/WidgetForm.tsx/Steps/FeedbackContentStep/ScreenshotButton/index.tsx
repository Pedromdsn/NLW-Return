import html2canvas from "html2canvas"

import { Camera, Trash } from "phosphor-react"
import { useState } from "react"
import Loading from "./Loading"

interface Props {
  screenshot: string | null
  onScreenshot: (screenshot: string | null) => void
}

const ScreenShotButton = ({ screenshot, onScreenshot }: Props) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenShot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector("html")!)
    const dataURL = canvas.toDataURL("image/png")

    onScreenshot(dataURL)

    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="flex h-10 w-10 items-end justify-end rounded-md border-transparent p-1 text-zinc-400 transition-colors hover:text-zinc-100"
        style={{ backgroundImage: `url(${screenshot})` }}
        onClick={() => onScreenshot(null)}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="rounded-md border-transparent bg-zinc-800 p-2 transition-colors hover:bg-zinc-700
			focus:outline-none  focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
      onClick={handleTakeScreenShot}
    >
      {!isTakingScreenshot ? <Camera className="h-6 w-6 text-zinc-100" /> : <Loading />}
    </button>
  )
}

export default ScreenShotButton
