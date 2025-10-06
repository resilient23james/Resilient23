import TopBar from '@/components/TopBar'; import Header from '@/components/Header';
import Hero from '@/components/Hero'; import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Industries from '@/components/Industries'; import Footer from '@/components/Footer';
import ShayAssistant from '@/components/ShayAssistant'; import ModalBridge from '@/components/ModalBridge';

export default function Page(){ return (<>
  <TopBar /><Header /><Hero locale="en" /><TestimonialsCarousel locale="en" /><Industries locale="en" /><Footer locale="en" />
  <ShayAssistant /><ModalBridge locale="en" />
</>);}
