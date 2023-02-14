type Props = {
    chatId: string;
};

function ChatInput({ chatId }: Props) {
  return (
    <div>
      <form>
        <input type="text" 
        placeholder="Type your message"
        />
      </form>
    </div>
  )
}

export default ChatInput
