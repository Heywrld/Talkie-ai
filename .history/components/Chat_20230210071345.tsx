"use client"

import { useState } from "react";

type Props = {
    chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useState();

  return (
    <div className=" flex-1">
     chat 
    </div>
  )
}

export default Chat
