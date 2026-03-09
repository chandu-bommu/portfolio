import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chandrasekhar Bommu | Staff Frontend Engineer',
  description:
    'Portfolio of Chandrasekhar Bommu - Staff Frontend Engineer specializing in React, Next.js, Node.js BFF, Azure ML integration, and MAS-compliant platforms.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
