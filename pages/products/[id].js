import { getProduct } from "../../lib/api";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import Head from 'next/head'

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
      <div className="grid md:grid-cols-2 gap-10">
        <Head>
        <title>{product.title} - Shop Now</title>
        <meta name="description" content={product.summary} />
        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content={product.name} />
        <meta property="og:image" content={product.imageUrl} />
      </Head>

<img src={product.image} className="ml-30 w-75 h-75 object-contain"/>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-blue-600 my-4">${product.price}</p>
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-6 py-2 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export async function getServerSideProps({ params }) {
  const product = await getProduct(params.id);
  return { props: { product } };
}