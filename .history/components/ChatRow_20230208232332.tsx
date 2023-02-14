import Link from "next/link";

type Props = {
    id: string;
}


function ChatRow({id}: Props) {
  return (
   <Link href={`/chat/${id}`}>
    <ChatBubblel
   </Link>
  )
}

export default ChatRow
