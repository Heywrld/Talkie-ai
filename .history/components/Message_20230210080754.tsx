import { DocumentData } from "firebase/firestore";
import Image from "next/image";

type Props = {
    message: DocumentData
};

function Message({ message }: Props) {
 const isTalkie = message.user.name === "Talkie";

    return (
        <div className={`p`}>
        <div className=" flex space-x-5 px-10 max-w-2xl mx-auto">
            <Image 
            src={message.user.avatar} 
            alt=""
            width={300}
            height={300}
            className=" h-8 w-8"
            />
            <p className=" pt-1 text-sm">
                {message.text}
            </p>
        </div>
        </div>
    )
}

export default Message;