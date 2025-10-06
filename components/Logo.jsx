import Image from 'next/image';
export default function Logo({ variant='light', className='' }){
  const src = variant === 'light' ? '/logo-light.png' : '/logo-dark.png';
  return <Image src={src} alt="Resilient logo" width={140} height={40} className={className} />;
}
