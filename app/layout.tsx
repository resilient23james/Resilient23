export const metadata = {
  title: 'Resilient Commercial Solutions',
  description: 'Facility services that show up — every time.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', background:'#0f1115', color:'#e8e8ea', margin:0}}>
        <div style={{maxWidth:960, margin:'0 auto', padding:'32px'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
