'use client';

export default function ShayButton() {
  return (
    <button
      type="button"
      aria-label="Trigger Shay"
      onClick={() => window.dispatchEvent(new CustomEvent('shay'))}
      className="fixed bottom-6 right-6 btn btn-primary shadow-lg flex items-center gap-2"
    >
      <img
        src="/shay-avatar.jpg"
        alt="Shay Avatar"
        width="40"
        height="40"
        className="w-10 h-10 rounded-full inline-block"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/avatar-fallback.png';
          e.currentTarget.alt = 'Default Avatar';
        }}
      />
      Shay
    </button>
  );
}
