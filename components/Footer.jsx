import Image from 'next/image';
import Logo from './Logo';

export default function Footer({ locale='en' }) {
  const year = new Date().getFullYear();
  return (
    <footer className="section bg-rcsgray">
      <div className="container text-sm text-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo-light.png" width={160} height={32} alt="Resilient Logo" />
          <p>© {year} Resilient Commercial Solutions</p>
          <p>{locale==='es' ? 'Hecho con excelencia y cuidado.' : 'Built with excellence and care.'}</p>
        </div>
      </div>
    </footer>
  );
}
