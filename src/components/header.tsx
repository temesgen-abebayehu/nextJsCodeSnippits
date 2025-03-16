import Link from "next/link";

export default function Header() {
  return (
    <header className="text-2xl font-bold p-2 px-8 text-slate-700 shadow-lg">
      <Link href="/">Home</Link>
    </header>
  );
}
