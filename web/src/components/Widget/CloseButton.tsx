import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

const CloseButton = () => {
  return (
    <Popover.Button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100" title="Fechar formulário">
      <X className="h-4 w-4" weight="bold" />
    </Popover.Button>
  )
}

export default CloseButton
