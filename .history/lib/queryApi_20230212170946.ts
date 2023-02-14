import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({

        model,
        prompt,
        temperature: 0.75,
        top_p: 0.3,
        max_tokens: 100,
        frequency_penalty: ,
        presence_penalty: 2,
    }).then(res => res.data.choices[0].text).catch((err) =>
        `Talkie was unable to find an answer for that! (Error: ${err.message})`
    );

    return res;
};

export default query;