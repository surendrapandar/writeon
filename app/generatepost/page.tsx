
"use client"

import { useState } from "react"

import { Button } from "../components/generatepost/Button";
import { Textarea } from "../components/generatepost/Textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/generatepost/Card";
import axios from "axios";
export default function PostGenerator() {
  const [message, setMessage] = useState("")
  const [output, setOutput] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await axios.post("http://localhost:3000/api/generatepost", 
      {
        promot: message
      }
    )

    console.log()
    setOutput(response.data.message);
    setMessage("") 
  }
  const handleButtonClick = (tone: string) => {
    console.log(`Selected tone: ${tone}`)
    
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
            <h3 className="text-lg font-semibold mb-2">Select your tone of voice:</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="bg-gray-200   "onClick={() => handleButtonClick("Funny")}>Funny 😂</Button>
            
              <Button variant="outline" className="bg-gray-200"onClick={() => handleButtonClick("Funny")}>Funny 😂</Button>
              <Button variant="outline" className="bg-gray-200"onClick={() => handleButtonClick("Sad")}>Sad 😢</Button>
              <Button variant="outline" className="bg-gray-200"onClick={() => handleButtonClick("Creative")}>Creative 🎨</Button>
              <Button variant="outline" className="bg-gray-200"onClick={() => handleButtonClick("Serious")}>Serious 🧐</Button>
              <Button variant="outline" className="bg-gray-200"onClick={() => handleButtonClick("Inspirational")}>Inspirational 💪</Button>
              <Button variant="outline" className="bg-gray-200"onClick={() => handleButtonClick("Professional")}>Professional  👔</Button>
            </div>
          </CardContent>
          
          
          <CardFooter>
          <button 
              type="submit" 
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Generate Post
            </button>
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
