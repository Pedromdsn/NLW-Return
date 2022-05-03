import Steps from "./Steps"

const WidgetFrom = () => {
  return (
    <div className="relative mb-4 flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-zinc-900 p-4 shadow-lg md:w-auto">
      <Steps />

      <footer className="text-xs text-neutral-400">
        Feito com ❤️ por <a href="https://pedromdsn.com" className="underline underline-offset-2">Pedromdsn</a>
      </footer>
    </div>
  )
}

export default WidgetFrom
