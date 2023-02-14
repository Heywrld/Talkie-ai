import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
};

function Message({ message }: Pr) {
    return (
        <div>Message</div>
    )
}

export default Message;