import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

function NewChat() {
    const router = useRouter();
    const { data: session } = useSession();

    const createNewChat = async() => {
        const doc = await addDoc(
            collection(db, "users", session?.user?.email!, "chats"), {
             userId: session?.user?.email!,
             createdAt: serverTimestamp(),
        }
        );

        router.push('/chat/${<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          
        </body>
        </html>.id}')
    };
  return (
   <div onClick={createNewChat} className=" border-purple-400 border chatRow">
    <PlusIcon className="h-4 w-4" />
    <p>New Chat</p>
   </div>
  )
}

export default NewChat
