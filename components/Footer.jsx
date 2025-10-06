import Logo from '@/components/Logo';
export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-300">
      <Logo variant="light" className="mx-auto mb-4"/>
      <p>© {new Date().getFullYear()} Resilient Commercial Solutions. All rights reserved.</p>
    </footer>
  );
}
