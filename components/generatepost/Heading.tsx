import React from "react";
import { CardHeader, CardTitle } from "../ui/card";

export const InputHeading = () => {
  return (
    <div>
      <CardHeader className="bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white">
        <CardTitle className="text-3xl font-extrabold text-center capitalize font-georgia">
          LinkedIn Post Generator
        </CardTitle>
      </CardHeader>
    </div>
  );
};

export const OutputHeading = () => {
  return (
    <div>
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold text-center capitalize font-georgia">
          Generated Post
        </CardTitle>
      </CardHeader>
    </div>
  );
};
