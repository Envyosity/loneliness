import BackgroundOST from '@/components/BackgroundOST/BackgroundOST';
import './globals.css';
import BottomBonfire from '@/components/BottomBonfire/BottomBonfire';
import CrtOverlay from '@/components/CrtOverlay/CrtOverlay';

export const metadata = {
  title: '𝓓𝓻𝓮𝓭𝓰𝓮𝓷',
  description: 'Life is precisely the finite',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BackgroundOST />
        <CrtOverlay />
        {children}
        <BottomBonfire />
      </body>
    </html>
  );
}
