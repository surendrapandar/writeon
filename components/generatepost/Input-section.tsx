import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Textarea } from "../ui/textarea";
import ToneSelector from "./tone-selector";
import { InputHeading } from "./Heading";
import axios from "axios";
import { GeneratePostButton } from "./button";

const GeneratePostInput = ({
  message,
  setMessage,
  setOutput,
  setTone,
  tone,
}: {
  message: any;
  setMessage: any;
  setOutput: any;
  setTone: any;
  tone: any;
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(tone);
    const response = await axios.post(
      "http://localhost:3000/api/generatepost",
      {
        promot: message,
      }
    );
    setOutput(response.data.message);
    setMessage("");
  };
  return (
    <Card className="flex-1 flex flex-col ">
      <InputHeading />

      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <CardContent className="flex-grow space-y-4 p-6">
          <Textarea
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // className="w-full h-40 resize-none"
            className="w-full h-40 resize-none border-2 border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
          />
          <ToneSelector setTone={setTone} />
        </CardContent>
        <CardFooter>
          <GeneratePostButton />
        </CardFooter>
      </form>
    </Card>
  );
};

export default GeneratePostInput;
