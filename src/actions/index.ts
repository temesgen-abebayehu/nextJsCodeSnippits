'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createSnippet(fromState: { message: string }, formData: FormData) {

    try {
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== 'string' || title.length < 3) {
            return {
                message: 'Titile should be longer'
            }
        }

        if (typeof code !== 'string' || code.length < 5) {
            return {
                message: 'Code should be longer'
            }
        }

        await db.snippet.create({
            data: {
                title,
                code,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                message: error.message
            }
        }else{
            return {
                message: 'Something went wrong'
            }
        }

    }

    redirect('/');
}

export async function updateSnippet(id: number, data: any) {
    console.log(id);

    await db.snippet.update({
        where: { id },
        data: {
            title: data.title,
            code: data.code
        }
    })
    redirect(`/snippet/${id}`)
}

export async function deleteSnipprt(id: number) {
    await db.snippet.delete({
        where: { id }
    })
    redirect('/')
}