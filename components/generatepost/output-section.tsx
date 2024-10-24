import React from "react";
import { Card, CardContent } from "../ui/card";
import { OutputHeading } from "./Heading";

export const GeneratePostOutput = ({ output }: { output: any }) => {
  return (
    <Card className="flex-1 flex flex-col h-full">
      {" "}
      <OutputHeading />
      <CardContent className="flex-grow">
        <div className="w-full h-full min-h-[200px] resize-none p-4 bg-muted rounded-md overflow-auto">
          {output ? (
            output
          ) : (
            <p
              style={{
                color: "#a0a0a0",
                fontStyle: "italic",
              }}
            >
              Your generated post will appear here....
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
