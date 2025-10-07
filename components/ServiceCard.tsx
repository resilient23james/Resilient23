import Link from 'next/link';
export default function ServiceCard({title, desc, href}:{title:string, desc:string, href:string}){
  return (
    <div className="card hover:scale-[1.01] transition">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-300 mb-3">{desc}</p>
      <Link href={href} className="btn btn-outline">Learn more</Link>
    </div>
  );
}
