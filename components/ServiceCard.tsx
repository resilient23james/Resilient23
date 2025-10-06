import React from 'react';

type Props = {
  title: string;
  desc: string;
};

export default function ServiceCard({ title, desc }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 shadow-sm bg-white px-6 py-6 md:px-8 md:py-8">
      <h3 className="text-2xl font-extrabold tracking-tight mb-2">{title}</h3>
      <p className="text-neutral-600 text-lg leading-relaxed">{desc}</p>
    </div>
  );
}
