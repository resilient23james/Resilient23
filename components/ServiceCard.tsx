// components/ServiceCard.tsx
'use client';
import React from 'react';

type Props = {
  title: string;
  desc: string;
};

export default function ServiceCard({ title, desc }: Props) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-lg text-gray-600">{desc}</p>
    </article>
  );
}
