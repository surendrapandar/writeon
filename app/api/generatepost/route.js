import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const AIAPIKey = process.env.AIAPIKey;
const genAI = new GoogleGenerativeAI(AIAPIKey);

export async function POST(req, res) {
  const body = await req.json();
  console.log(body.promot);
  const promot = body.promot;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(promot);

  const message = await result.response.text();

  return NextResponse.json({ message: message });
}
