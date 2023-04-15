const { Configuration, OpenAIApi } = require("openai");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

//setup server
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const prompt = req;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 4000,
    top_p: 1,
  });
  //   res.status(200).send(response.data.choices[0]);
  res.status(200).send(prompt);
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
