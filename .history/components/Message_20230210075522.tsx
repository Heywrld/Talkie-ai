import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
};

function Message({ message }: Props) {
    return (
        <div className=" flex">
            <img src={message.user.avatar} alt="" className=" h-8 w-8" />
            <p className=" pt-1 text-sm">
                {message.text}
            </p>
        </div>
    )
}

export default Message;