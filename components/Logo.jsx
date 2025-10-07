import Image from 'next/image';
export default function Logo({variant='light', className=''}){
  const src = variant === 'dark' ? '/logo-dark.png' : '/logo-light.png';
  return <Image src={src} alt="Resilient Commercial Solutions" width={140} height={36} className={className} />;
}
