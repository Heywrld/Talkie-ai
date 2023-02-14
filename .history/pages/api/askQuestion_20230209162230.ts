// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "firebase-admin";
import { adminDb } from '@/firebaseAdmin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please provide a prompt"});
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "Please provide a valid chat ID"});
        return;
    }

    // ChatGPT Query
       const response = await query(prompt, chatId, model)

       const message: Message = {
        text: response || "Talkie was unable to find an answer for that",
        createdAt: admin.firestore.Timestamp.now(), 
        user: {
            _id: "ChatGPT",
            name: "Chat",
            avatar: "https://o.remove.bg/downloads/63d1be7e-2e97-492b-9d02-14f34d109245/vector-funny-cartoon-purple-friendly-robot-character-isolated-on-white-background-kids-3d-robot-toy-image_csp54174978-removebg-preview.png"
        },

    };

    await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text })
}
