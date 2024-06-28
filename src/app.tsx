import { Button } from "@canva/app-ui-kit";
import { addPage } from "@canva/design";
import React from "react";

export function App() {
  async function handleClick() {
    await addPage({
      elements: [
        {
          type: "TEXT",
          children: ["Hello world!"],
          width: 100,
          height: 10,
          top: 0,
          left: 0,
        },
      ],
    });
  }

  return <Button onClick={handleClick} variant={"primary"}>Add page</Button>;
}