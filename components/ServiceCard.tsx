'use client';
import clsx from 'clsx';
type Props={title:string;desc:string};
export default function ServiceCard({title,desc}:Props){
  return(<div className={clsx(
    "rounded-2xl p-6 md:p-8 backdrop-blur-md",
    "bg-white/70 dark:bg-zinc-900/60 border border-white/40 dark:border-white/10",
    "shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
  )}>
    <h3 className="text-2xl font-extrabold tracking-tight mb-2">{title}</h3>
    <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">{desc}</p>
  </div>);
}