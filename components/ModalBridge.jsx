'use client';
import { useEffect, useState } from 'react';
import ContactModal from '@/components/ContactModal';
export default function ModalBridge(){
  const [opened, setOpened] = useState(false);
  useEffect(()=>{
    const on = ()=> setOpened(true);
    window.addEventListener('shay:open', on);
    return ()=> window.removeEventListener('shay:open', on);
  },[]);
  return <>{opened && <ContactModal/>}</>;
}
