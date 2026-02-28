import "../styles/globals.css";
import Layout from "../components/Layout";
import { CartProvider } from "../context/CartContext";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ekart Next Page Router</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Add viewport for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  );
}