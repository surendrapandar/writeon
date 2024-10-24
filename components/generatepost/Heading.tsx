import React from "react";
import { CardHeader, CardTitle } from "../ui/card";

export const InputHeading = () => {
  return (
    <div>
      <CardHeader>
        <CardTitle>LinkedIn Post Generator</CardTitle>
      </CardHeader>
    </div>
  );
};
export const OutputHeading = () => {
  return (
    <div>
      <CardHeader>
        <CardTitle>Generated Post</CardTitle>
      </CardHeader>
    </div>
  );
};
