'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";


export async function updateSnippet(id: number, data: any) {
    const { title, code } = data;
    console.log(id);

    await db.snippet.update({
        where: {id},
        data: {
            title: data.title,
            code: data.code
        }
    })
    redirect(`/snippet/${id}`)
}