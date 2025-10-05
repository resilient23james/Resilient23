'use client';
import Link from 'next/link';
export default function Header(){
  return (
    <header className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
        <div style={{width:36,height:36,background:'#0b1a2a',borderRadius:8}} />
        <strong>Resilient</strong>
      </div>
      <nav>
        <Link href="/">Home</Link>{' '}
        <Link href="/quote">Quote</Link>{' '}
        <Link href="/contact">Contact</Link>{' '}
        <Link href="/careers">Careers</Link>
      </nav>
    </header>
  );
}
