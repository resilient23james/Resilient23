'use client';
import React from 'react';

type Props = {
  title: string;
  desc?: string;
  description?: string;
};

export default function ServiceCard({ title, desc, description }: Props) {
  const body = description ?? desc ?? '';
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-semibold">{title}</h3>
      {body && <p className="mt-2 text-gray-600">{body}</p>}
    </div>
  );
}
