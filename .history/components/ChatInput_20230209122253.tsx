"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
    chatId: string;
};

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState("");
    const { data: session } = useSession();

  return (
    <div className=" bg-gray-700/50 text-yellow-400 rounded-lg text-sm">
      <form className=" p-5 space-x-5 flex-1">
        <input 
        className=" bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
        disabled={!session}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        type="text" 
        placeholder="Type your message here..."
        />

        <button 
        disabled={!prompt || !session}
        type="submit"
        className=" bg-[#A084DC] hover:opacity-50 text-white font-bold px-4 py-2 ro"
        >
            <PaperAirplaneIcon className=" h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>
        {/* ModelSelections */}
      </div>
    </div>
  )
}

export default ChatInput
