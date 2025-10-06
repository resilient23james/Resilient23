import Logo from './Logo';

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/industries" className="hover:text-white">Industries</a>
          <a href="/testimonials" className="hover:text-white">Testimonials</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
