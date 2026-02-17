// POST localhost:3000/api/demo/blocking
import { generateText } from "ai"
import { google } from "@ai-sdk/google"

// if dont have a key fixed in .env process.env.GOOGLE_GENERATIVE_AI_API_KEY
// you can use dinamic api key
// const google = createGoogleGenerativeAI({
//   apiKey: "AIzaSyApE12PS6BgMsuMRQ09Uqd438KexKAPsrQ",

export async function POST() {
  const response = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: "Write a vegetarian lasagna recipe for 4 people",
  })

  return Response.json({ response })
}
