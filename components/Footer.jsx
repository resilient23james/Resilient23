import Logo from '@/components/Logo';
export default function Footer(){
  return (
    <footer className="container section border-t border-gray/40">
      <div className="flex items-center justify-between">
        <Logo />
        <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Resilient Commercial Solutions</p>
      </div>
    </footer>
  );
}
