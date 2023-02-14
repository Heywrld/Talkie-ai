import { DocumentData } from "firebase/firestore";
import Image from "next/image";

type Props = {
    message: DocumentData
};

function Message({ message }: Props) {
    return (
        <div className=" flex space-x-5 px-10 max-w-2xl mx-auto">
            <Image 
            src={message.user.avatar} 
            alt=""
            width={300}
            
            />
            <p className=" pt-1 text-sm">
                {message.text}
            </p>
        </div>
    )
}

export default Message;