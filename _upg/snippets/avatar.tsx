import Image from "next/image";

export function ShayBubbleAvatar() {
  return (
    <div className="shay-bubble">
      <div className="avatar">
        <Image src="/shay.jpg" alt="Shay" width={40} height={40} priority />
      </div>
    </div>
  );
}
