type Props = { title: string; desc: string };

export default function ServiceCard({ title, desc }: Props) {
  return (
    <div className="rounded-2xl" style={{border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.06)', padding:'24px'}}>
      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h3>
      <p className="mt-3" style={{color:'#cbd5e1', fontSize:'1.05rem', lineHeight:1.6}}>{desc}</p>
    </div>
  );
}