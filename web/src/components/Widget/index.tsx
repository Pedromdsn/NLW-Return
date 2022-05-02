import { ChatTeardropDots } from "phosphor-react"

import { Popover } from "@headlessui/react"

const Widget = () => {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>Hello World</Popover.Panel>
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
