import { config } from "dotenv"
config()
import { OpenAI } from 'openai'
import readline from "readline"

const client  = new OpenAI({
  apiKey: process.env.API_KEY,
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.output,
})

userInterface.prompt()
userInterface.on("line", async input => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    })
    console.log(completion.choices[0].message)
    userInterface.prompt()  
  } catch (error) {
    console.error
  }  
})



