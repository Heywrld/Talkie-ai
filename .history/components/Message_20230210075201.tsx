import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
};

function Message({ message }: Props) {
    return (
        <div>
            <p>
                {}
            </p>
        </div>
    )
}

export default Message;