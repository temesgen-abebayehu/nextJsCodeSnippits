'use client';

import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [data, setData] = useState({ title: snippet.title, code: snippet.code });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({
            ...prev,
            title: e.target.value,
        }));
    };

    const handleCodeChange = (value: string | undefined) => {
        setData((prev) => ({
            ...prev,
            code: value || "",
        }));
    };

    const handleUpdateSnippet = actions.updateSnippet.bind(null, snippet.id, data);

    return (
        <div className="mt-4">
                <div className="flex gap-4 text-xl font-semibold">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        className="border rounded-lg w-full p-2 bg-slate-100"
                        value={data.title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mt-4 text-xl font-semibold">
                    <label className="block text-gray-700">Code</label>
                    <Editor
                        height="50vh"
                        defaultLanguage="javascript"
                        value={data.code}
                        theme="vs-dark"
                        onChange={handleCodeChange}
                        className="rounded-lg w-full p-2 bg-slate-100"
                        options={{ minimap: { enabled: false } }}
                    />
                </div>
                <form action={handleUpdateSnippet}>
                <button
                    type="submit"
                    className="bg-blue-700 text-white text-xl rounded-lg p-2 cursor-pointer mt-4"
                >
                    Update
                </button>
            </form>
        </div>
    );
}