import './globals.css';
import AshParticles from '@/components/AshParticles/AshParticles';
import BottomBonfire from '@/components/BottomBonfire/BottomBonfire';
import CrtOverlay from '@/components/CrtOverlay/CrtOverlay';

export const metadata = {
  title: '𝓔𝓷𝓿𝔂',
  description: 'Life is precisely the finite',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CrtOverlay />
        {children}
        <AshParticles />
        <BottomBonfire />
      </body>
    </html>
  );
}
