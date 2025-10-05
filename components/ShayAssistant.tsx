'use client';

import { useEffect } from 'react';

export default function ShayAssistant() {
  // Preload the avatar to avoid the blank/red flash
  useEffect(() => {
    const img = new window.Image();
    img.src = '/shay-avatar.jpg';
  }, []);
  return null;
}
