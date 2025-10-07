import Link from 'next/link';
import Logo from '@/components/Logo';
export default function Header(){
  return (
    <header className="container flex items-center justify-between py-4">
      <Logo />
      <nav className="flex gap-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
      </nav>
    </header>
  );
}
