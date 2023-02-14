import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
};

function Message({ message }: Props) {
    return (
        <div>
            <img src={message.user.avatar} alt="" className=" h-8 w-8" />
            <p className=" ">
                {message.text}
            </p>
        </div>
    )
}

export default Message;