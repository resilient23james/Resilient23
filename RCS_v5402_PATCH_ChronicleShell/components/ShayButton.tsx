'use client';
import Image from 'next/image';
import React from 'react';

type Props = {
  onClick?: () => void;
};

export default function ShayButton({ onClick }: Props) {
  return (
    <button
      aria-label="Open Shay Assistant"
      onClick={onClick}
      className="fixed bottom-6 right-4 md:right-6 size-20 rounded-full shadow-lg ring-1 ring-black/5 bg-white overflow-hidden hover:scale-[1.02] transition"
    >
      <Image
        src="/shay-avatar.jpg?v=2"
        alt="Shay"
        width={84}
        height={84}
        className="w-full h-full object-cover"
        priority
      />
    </button>
  );
}
