import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({

        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0,
        top_p: ,
        max_tokens: 3000,
        frequency_penalty: 0.05,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text).catch((err) =>
        `Talkie was unable to find an answer for that! (Error: ${err.message})`
    );

    return res;
};

export default query;