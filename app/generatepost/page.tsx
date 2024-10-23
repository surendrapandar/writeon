
"use client"

import { useState } from "react"

import { Button } from "../components/generatepost/Button";
import { Textarea } from "../components/generatepost/Textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/generatepost/Card";
export default function PostGenerator() {
  const [message, setMessage] = useState("")
  const [output, setOutput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOutput(message);
    setMessage("") 
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen p-4 gap-4">
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>LinkedIn Post Generator</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <CardContent className="flex-grow">
            <Textarea
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-full min-h-[200px] resize-none"
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Generate Post</Button>
          </CardFooter>
        </form>
      </Card>

      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>Generated Post</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="w-full h-full min-h-[200px] p-4 bg-muted rounded-md overflow-auto">
          {output || "Your generated post will appear here."}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
