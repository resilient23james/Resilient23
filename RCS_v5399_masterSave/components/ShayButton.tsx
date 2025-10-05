'use client';
import React from 'react';
export default function ShayButton({children, href, variant='primary'}:{children:React.ReactNode, href?:string, variant?:'primary'|'secondary'}){
  if(href){ return <a className={`button ${variant}`} href={href}>{children}</a>; }
  return <button className={`button ${variant}`}>{children}</button>;
}
