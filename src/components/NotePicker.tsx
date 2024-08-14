"use client";

import { useState } from "react";
import Tiptap from "./Tiptap";

export default function NotePicker() {
  const [content, setContent] = useState("");

  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      id: crypto.randomUUID(),
      content: content,
    };

    const existingDataString = localStorage.getItem("myData");

    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];

    const updatedData = [...existingData, data];

    localStorage.setItem("myData", JSON.stringify(updatedData));

    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
    >
      <div className="text-3xl text-center text-sky-300 mb-10">
        Notes picker
      </div>

      <Tiptap
        onChange={(newContent: string) => handleContentChange(newContent)}
        content={content}
      />
    </form>
  );
}
