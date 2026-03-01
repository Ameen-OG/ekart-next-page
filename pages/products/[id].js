import { getProduct } from "../../lib/api";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function ProductDetail({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  // Show loading state while page is being generated
  if (router.isFallback) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  // Add error state if product is missing
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center">
        <h1 className="text-2xl">Product not found</h1>
        <button 
          onClick={() => router.push('/products')}
          className="mt-4 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
        >
          Back to Products
        </button>
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
            className="w-full max-w-md mx-auto object-contain"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          {product.price && (
            <p className="text-xl text-blue-600 my-4">${product.price}</p>
          )}
          <p className="text-gray-700 mb-6">{product.description}</p>
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
    console.log(`Fetching product ${params.id}...`);
    const product = await getProduct(params.id);
    
    // If product is null or undefined, return notFound
    if (!product) {
      console.log(`Product ${params.id} not found`);
      return {
        notFound: true,
      };
    }
    
    console.log(`Product ${params.id} fetched successfully`);
    return { 
      props: { 
        product: JSON.parse(JSON.stringify(product))
      } 
    };
  } catch (error) {
    console.error(`Error fetching product ${params.id}:`, error);
    return {
      notFound: true,
    };
  }
}