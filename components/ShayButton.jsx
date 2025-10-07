'use client';
export default function ShayButton() {
  return (
    <button
      type="button"
      aria-label="Trigger Shay"
      onClick={() => window.dispatchEvent(new CustomEvent('shay'))}
      className="fixed bottom-6 right-6 btn btn-primary shadow-lg"
    >
      Shay
    </button>
  );
}\n