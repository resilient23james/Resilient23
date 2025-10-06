import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ light=false }) {
  const src = light ? '/logo-light.png' : '/logo-dark.png';
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <Image src={src} width={180} height={36} alt="Resilient Commercial Solutions" priority />
      <span className="sr-only">Resilient Commercial Solutions</span>
    </Link>
  );
}
