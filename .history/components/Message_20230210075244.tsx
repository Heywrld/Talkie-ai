import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
};

function Message({ message }: Props) {
    return (
        <div>
            <img src={message.user.avata} al />
            <p>
                {message.text}
            </p>
        </div>
    )
}

export default Message;