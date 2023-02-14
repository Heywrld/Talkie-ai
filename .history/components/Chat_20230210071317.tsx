type Props = {
    chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = usestate

  return (
    <div className=" flex-1">
     chat 
    </div>
  )
}

export default Chat
