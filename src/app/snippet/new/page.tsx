import {db} from "@/db"
import {redirect} from "next/navigation";

export default function CreateSnippet(){
    async function createSnippet(formData: FormData){
        "use server";

        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        if(!title || !code){
            return console.error("Please fill in all fields");
        }

        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        }); 
        
        console.log(snippet);
        redirect('/');
    }

    return (
        <form action={createSnippet}>
            <nav className="container flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-slate-800 p-4">Create Snippet</h1>
                <div className="flex gap-4 text-xl font-semibold">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        id="title"
                        className="border rounded-lg w-full p-2 bg-slate-100"
                    />
                </div>
                <div className="flex gap-4 text-xl font-semibold">
                    <label htmlFor="code">Code</label>
                    <textarea 
                        name="code"
                        id="code"
                        className="border rounded-lg w-full p-2 bg-slate-100"
                    />
                </div>
                <button 
                    type="submit"
                    className="bg-blue-700 text-white text-xl rounded-lg p-2 cursor-pointer"
                >
                    Create
                </button>
            </nav>
        </form>
    );
}