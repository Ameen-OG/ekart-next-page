import { getProduct } from "../../lib/api";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import Head from 'next/head'

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  // Add loading or error state if product is missing
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center">
        <h1 className="text-2xl">Product not found</h1>
      </div>
    );
  }

  return (
    <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className="max-w-7xl mx-auto p-6">
      <Head>
        <title>{product.title || "Product"} - Shop Now</title>
        <meta name="description" content={product.description || product.summary || ""} />
        <meta property="og:title" content={product.title || product.name || ""} />
        <meta property="og:image" content={product.image || product.imageUrl || ""} />
      </Head>

      <div className="grid md:grid-cols-2 gap-10">
        {product.image && (
          <img 
            src={product.image} 
            alt={product.title}
            className="ml-30 w-75 h-75 object-contain"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          {product.price && (
            <p className="text-xl text-blue-600 my-4">${product.price}</p>
          )}
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-6 py-2 mt-4 hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const product = await getProduct(params.id);
    
    // If product is null or undefined, return notFound
    if (!product) {
      return {
        notFound: true, // This will show 404 page
      };
    }
    
    return { 
      props: { 
        product: JSON.parse(JSON.stringify(product)) // Serialize for Next.js
      } 
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true, // Show 404 page on error
    };
  }
}