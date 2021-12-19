import Head from 'next/head';
import Footer from './footer';

export default function Layout({children}) {
  return (
    <main className="bg-gray-50">
      <Head>
        <title>OpenPortfolio</title>
        <meta name="robots" content="follow, index" />
        <meta content="description" />
      </Head>
      <section id="skip" className="flex flex-col justify-center bg-gray-50">
        {children}
        <Footer />
      </section>
    </main>
  );
}