import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({

       
    }).then(res => res.data.choices[0].text).catch((err) =>
        `Talkie was unable to find an answer for that! (Error: ${err.message})`
    );

    return res;
};

export default query;