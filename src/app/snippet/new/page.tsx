'use client'

import { useFormState } from "react-dom";
import * as actions from '@/actions';


export default function CreateSnippet(){
    const [formState, action] = useFormState(actions.createSnippet,{
        message: '',
    })

    return (
        <form action={action}>
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
                {formState.message && <p className="text-red-500 text-xl border-red-400 p-2">{formState.message}</p>}
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