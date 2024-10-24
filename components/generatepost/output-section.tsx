import React from "react";
import { Card, CardContent } from "../ui/card";
import { OutputHeading } from "./Heading";

export const GeneratePostOutput = ({ output }: { output: any }) => {
  return (
    <div>
      <Card className="flex-1 flex flex-col">
        <OutputHeading />
        <CardContent className="flex-grow">
          <div className="w-full h-full min-h-[200px] p-4 bg-muted rounded-md overflow-auto">
            {output || "Your generated post will appear here."}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
