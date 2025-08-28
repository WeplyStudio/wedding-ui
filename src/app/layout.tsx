import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { Ovo, Cormorant_Upright } from 'next/font/google';

const cormorantUpright = Cormorant_Upright({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant-upright',
  weight: ['400', '700'],
});

const ovo = Ovo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ovo',
  weight: '400',
});


export const metadata: Metadata = {
  title: 'Evergreen Vows',
  description: 'Join us to celebrate our wedding!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantUpright.variable} ${ovo.variable}`}>
      <head>
      </head>
      <body className={cn("font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
