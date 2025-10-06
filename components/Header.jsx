import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Header(){
  return (
    <header className="w-full border-b border-white/10 bg-[#0e0e10]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" aria-label="Home"><Logo variant="light" /></Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
