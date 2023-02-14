import Link from "next/link";

type Props = {
    id: string;
}


function ChatRow({id}: Props) {
  return (
   <Link href={`/chat/${id}`}>
    <ChatBubb
   </Link>
  )
}

export default ChatRow
