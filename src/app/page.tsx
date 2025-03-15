import {db} from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-2xl font-bold">Snippets</h1>
          <Link href="/snippet/new" className="text-blue-700 hover:underline">
            Create New Snippet
          </Link>
        </div>
        {snippets.map((snippet) => (
          <div key={snippet.id} className="flex justify-between items-center border-2 border-gray-200 p-2 rounded-lg mb-2">
            <h2 className="text-lg">{snippet.title}</h2>
            <Link href={`/snippet/${snippet.id}`} className="font-bold text-blue-700 hover:underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
