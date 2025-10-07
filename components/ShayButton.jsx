'use client';
export default function ShayButton(){
  return (
    <button
      onClick={()=>window.dispatchEvent(new CustomEvent('shay,{detail))}
      className="fixed bottom-6 right-6 btn btn-primary shadow-lg"
    >
      Shay
    </button>
  );
}
