import { PlusIcon } from "@heroicons/react/24/solid"

function NewChat() {
  return (
   <div className=" border-purple-400 border chatRow">
    <PlusIcon className="h-4 w-4" />
    <p>New </p>
   </div>
  )
}

export default NewChat
