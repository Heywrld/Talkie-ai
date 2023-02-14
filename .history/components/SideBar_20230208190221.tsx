'use client'

import { useSession } from "next-auth/react";
import NewChat from "./NewChat"

function SideBar() {
    const { data: session } = useSession();

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

    </div>

   </div>

   {session && (
    <img src={session.user?.image!} alt="Profile pic"
     className=" h-12 w-12 rounded-full cursor-pointer mx"
    />
   )}
  </div>
  );
}

export default SideBar
