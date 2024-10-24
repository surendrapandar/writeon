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
}: {
  message: any;
  setMessage: any;
  setOutput: any;
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <div>
      <Card className="flex-1 flex flex-col">
        <InputHeading />
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <CardContent className="flex-grow">
            <Textarea
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-full min-h-[200px] resize-none"
            />
            <ToneSelector />
          </CardContent>
          <CardFooter>
            <GeneratePostButton />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default GeneratePostInput;
