'use client';

interface errorProps{
    error: Error,
    reset: () => void
}

export default function Error({error}: errorProps){
    return (
        <div>
            {error.message}
        </div>
    );
}