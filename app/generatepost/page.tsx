"use client";
import { useState } from "react";

import GeneratePostInput from "@/components/generatepost/Input-section";
import { GeneratePostOutput } from "@/components/generatepost/output-section";

export default function PostGenerator() {
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="flex flex-col sm:flex-row h-screen p-4 gap-4">
      {/* // input section */}
      <GeneratePostInput
        message={message}
        setMessage={setMessage}
        setOutput={setOutput}
      />

      {/* output section */}
      <GeneratePostOutput output={output} />
    </div>
  );
}
