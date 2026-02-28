import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Image */}
      <div className="h-56 flex items-center justify-center bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h2 className="font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
          {product.title}
        </h2>

        <p className="text-lg font-bold text-black mt-2">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="mt-auto pt-4 flex gap-2">
          <Link href={`/products/${product.id}`} className="w-1/2">
     <button className="w-full bg-blue-500 text-black py-2 rounded-lg border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition">
  Details
</button>
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="w-1/2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}