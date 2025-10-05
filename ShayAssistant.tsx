"use client";
import Image from "next/image";

export default function ShayAssistant(){
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <div className="relative w-20 h-20 rounded-full shadow-lg shadow-red-500/70 bg-red-600/90">
        <Image
          src="/shay.webp"
          alt="Shay Assistant"
          fill
          style={{ objectFit: "contain" }}
          className="drop-shadow-lg"
        />
      </div>
    </div>
  );
}
