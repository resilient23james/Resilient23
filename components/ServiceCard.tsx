import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ title, description, href }: Props) {
  return (
    <div className="bg-[#1f1f22] border border-white/10 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <Link href={href} className="inline-flex px-4 py-2 rounded-md font-semibold border border-[#c1121f] hover:bg-[#c1121f]/10">
        Learn more
      </Link>
    </div>
  );
}
