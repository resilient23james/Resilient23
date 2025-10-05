'use client';

import React from 'react';

type Props = {
  title: string;
  blurb: string;
};

export default function ServiceCard({ title, blurb }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200/70 bg-white shadow-sm p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{title}</h3>
      <p className="text-zinc-600 text-lg leading-relaxed">{blurb}</p>
    </div>
  );
}
