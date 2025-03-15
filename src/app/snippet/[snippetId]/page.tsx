import { db } from "@/db";
import Link from "next/link";
import * as actions from "@/actions";

interface SnippetProps {
    params: {
        snippetId: string;
    };
}

export default async function Snippet({ params }: SnippetProps) {
    const snippet = await db.snippet.findUnique({
        where: { id: parseInt(params.snippetId) },
    });

    if (!snippet) {
        return <div>Snippet not found</div>;
    }

    const handleDeleteAction = actions.deleteSnipprt.bind(null, snippet.id);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center my-4">
                <h1 className="text-2xl font-bold">{snippet.title}</h1>
                <div className="flex gap-4 items-center font-medium">
                    <Link 
                        href={`/snippet/${params.snippetId}/edit`}
                        className="text-blue-700 hover:underline"
                    >Edit</Link>
                    <form action={handleDeleteAction}>
                        <button className="text-red-800">delete</button>
                    </form>
                </div>
            </div>
            <h1 className="bg-slate-200 p-4 rounded-lg">{snippet.code}</h1>
        </div>
    );
}
