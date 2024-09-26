import Head from 'next/head';
import "./globals.css";



export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Brayhan.Niebla</title>
        <meta name="description" content="This my personal portfolio" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
      >
        {children}
      </body>
    </html>
  );
}

