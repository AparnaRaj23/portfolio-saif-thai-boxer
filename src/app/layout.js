import './globals.css';

export const metadata = {
  title: 'Train with Coach Saif',
  description: 'Official website of Saif Thai Boxer, an internationally certified Muay Thai Coach.',
};

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
