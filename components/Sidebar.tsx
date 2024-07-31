import { BotIcon, DollarSignIcon, FilePenIcon, LayoutDashboard, LogOut, MessageCircleIcon, PlusIcon } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="flex h-full w-80 flex-col bg-background border-r border-muted border-r-gray-300">
      <div className="flex items-center gap-2 px-6 py-4 border-b text-green-700">
        <BotIcon className="w-10 h-10 " />
        <h3 className="text-2xl font-semibold mt-1">Chatbot AI</h3>
      </div>
      <nav className="flex flex-col gap-2 px-4 py-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/create-chatbot"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <PlusIcon className="w-5 h-5" />
          <span>Create Chatbot</span>
        </Link>
        <Link
          href="/dashboard/edit-chatbot"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <FilePenIcon className="w-5 h-5" />
          <span>Edit Chatbot</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <DollarSignIcon className="w-5 h-5" />
          <span>Plans</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <MessageCircleIcon className="w-5 h-5" />
          <span>Chat History</span>
        </Link>
        <hr />
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </Link>
      </nav>
    </div>
  )
}