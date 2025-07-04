"use client";

import React from "react";
import { Editor, EditorContent } from "@tiptap/react";

interface Props {
  editor: Editor | null;
}

const btnClass =
  "bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded font-medium text-gray-900";

const EditorWithToolbar = ({ editor }: Props) => {
  return (
    <div className="bg-white p-4 rounded-md border">
      <label className="block mb-2 font-semibold text-[#0f172a]">İçerik</label>

      <div className="flex flex-wrap gap-2 mb-3">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={btnClass}
          title="Kalın"
          aria-label="Kalın"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`${btnClass} italic`}
          title="İtalik"
          aria-label="İtalik"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().unsetAllMarks().run()}
          className={btnClass}
          title="Normal Stil"
          aria-label="Normal Stil"
        >
          Normal
        </button>
      </div>

      <label className="block mb-1 text-sm font-medium text-gray-600">
        Yazı Rengi
      </label>
      <div className="flex gap-2 mb-3">
        {["#000000", "#dc2626", "#16a34a", "#2563eb", "#eab308", "#6b21a8"].map(
          (color: string) => (
            <button
              key={color}
              type="button"
              onClick={() => editor?.chain().focus().setColor?.(color)?.run?.()}
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
              title={`Renk: ${color}`}
              aria-label={`Renk ${color}`}
            />
          )
        )}
      </div>

      <div
        className="border rounded bg-white text-[#0f172a] p-3 min-h-[200px] focus-within:ring-2 focus-within:ring-[#ffb900] cursor-text"
        onClick={() => editor?.chain().focus().run()}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default EditorWithToolbar;
