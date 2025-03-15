import {db} from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditProps {
    params: {
        snippetId: string;
    };
}

export default async function SnippetEdit( props : SnippetEditProps) {
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.snippetId) },
    });

    if (!snippet) {
        return <div>Snippet not found</div>;
    }

    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}