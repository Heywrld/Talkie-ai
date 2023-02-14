type Props = {
    chatId: string;
};

function ChatInput({ chatId }: Props) {
  return (
    <div>
      <form>
        <input type="text" 
        placeholder="Ty"
        />
      </form>
    </div>
  )
}

export default ChatInput
