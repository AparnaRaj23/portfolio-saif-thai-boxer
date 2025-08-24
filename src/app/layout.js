import './globals.css';

export const metadata = {
  title: 'Portfolio: Saif Thai Boxer',
  description: 'Official portfolio website for a Muay Thai Trainer',
};

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}