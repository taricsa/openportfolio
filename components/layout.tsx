import Head from 'next/head';
import Footer from './footer';

export default function Layout({children}) {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>OpenPortfolio</title>
        <meta name="robots" content="follow, index" />
        <meta content="description" />
      </Head>
      <section id="skip" className="flex flex-col justify-center px-8 bg-gray-50">
        {children}
        <Footer />
      </section>
    </main>
  );
}