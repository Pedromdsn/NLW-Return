import WidgetFrom from "./WidgetForm.tsx"

import { ChatTeardropDots } from "phosphor-react"
import { Popover } from "@headlessui/react"

const Widget = () => {
  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8">
      <Popover.Panel>
        <WidgetFrom />
      </Popover.Panel>
      <Popover.Button className="group flex h-12 items-center  rounded-full bg-brand-500 px-3 text-white transition-all">
        <ChatTeardropDots className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden duration-500 ease-linear group-hover:max-w-xs">
          <span className="pl-2">FeedBack</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}

export default Widget
