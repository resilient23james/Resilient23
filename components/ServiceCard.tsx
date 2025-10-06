import Link from 'next/link';
export default function ServiceCard({title, description, href}:{title:string, description:string, href:string}){
  return (
    <div className="card p-6 border border-white/10 rounded-lg bg-[#1f1f22]">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="opacity-80 mb-4">{description}</p>
      <Link href={href} className="btn btn-outline">Learn more</Link>
    </div>
  );
}
