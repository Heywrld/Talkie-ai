'use client'

import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat"

function SideBar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && query(
          collection(db, 'users', session.user?.email!, 
          'chats'),
          orderBy("createdAt", "asc")
        )
    );

  return (
  <div className=" p-2 flex flex-col h-screen"> 
   <div className=" flex-1">
    <div>

       {/* NewChat */ }
        <NewChat />
        
       <div>
        {/* ModelSelections */ }
       </div>

       {/* Map through the chatRows */ }
       {chats?.docs.map(chat => (
        <ChatRow key={chat.id} id={chat.id} />
        
       ))}

    </div>

   </div>

   {session && (
    <Image
    width={300}
    height={300}
    onClick={() => signOut()}
    src={session.user?.image!} alt="Profile pic"
     className=" h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
    />
   )}
  </div>
  );
}

export default SideBar
