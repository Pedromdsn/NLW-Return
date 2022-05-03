import { CircleNotch } from "phosphor-react"

const Loading = () => {
  return (
    <div className="flex h-6 w-6 items-center justify-center overflow-hidden ">
      <CircleNotch weight="bold" className="h-6 w-6 animate-spin" />
    </div>
  )
}

export default Loading
