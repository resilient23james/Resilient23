'use client';
import Link from 'next/link';

export default function Header(){
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <div className="font-extrabold text-2xl leading-7 max-w-[12ch]">
        Resilient<br/>Commercial<br/>Solutions
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/careers" className="hover:underline">Careers</Link>
        <Link href="/es" className="hover:underline">ES</Link>
      </nav>
    </header>
  );
}
