import { PlusIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react"

function NewChat() {
    const router = useRouter()
    const { data: session } = useSession();

    const createNewChat = async() => {}
  return (
   <div className=" border-purple-400 border chatRow">
    <PlusIcon className="h-4 w-4" />
    <p>New Chat</p>
   </div>
  )
}

export default NewChat
