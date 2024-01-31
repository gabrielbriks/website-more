"use client";

import { type getDictionary } from "@/get-dictionary";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const [count, setCount] = useState(0);
  return (
    <div className="m-5">
      This component is rendered on client:
      <div className="flex gap-4 my-4">
        <Button variant="default" onClick={() => setCount((n) => n - 1)}>
          {dictionary.decrement}
        </Button>
        <span className="font-semibold text-2xl">{count}</span>
        <Button variant="default" onClick={() => setCount((n) => n + 1)}>
          {dictionary.increment}
        </Button>
      </div>
    </div>
  );
}
