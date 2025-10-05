
import './globals.css';
import ShayBubble from '../components/ShayBubble';

export const metadata = {
  title: 'Resilient Commercial Solutions',
  description: 'Facility Services Nationwide',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{background:'#000', margin:0}}>
        {children}
        <ShayBubble />
      </body>
    </html>
  );
}
