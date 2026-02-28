import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Ensure path is correct

export default function Navbar() {
  const router = useRouter();
  const { cart = [] } = useCart(); // Default to empty array to prevent .length error
  const [search, setSearch] = useState(router.query.search || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search.trim()) {
        router.push({
          pathname: "/products",
          query: { ...router.query, search: search.trim() },
        }, undefined, { shallow: true });
      } else if (search === "" && router.query.search) {
        const { search, ...rest } = router.query;
        router.push({ pathname: "/products", query: rest }, undefined, { shallow: true });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <nav className="border-b border-gray-800 bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight">
          EKART
        </Link>

        {/* Center: Search Bar with Icon on the Right */}
       <div className="flex-1 max-w-md flex items-center border border-gray-600 rounded-md px-3 py-1 bg-white hover:border-gray-400 transition-colors">
  <input
    type="text"
    placeholder="Search products..."
    // Changed placeholder color to gray-400 so it's readable
    className="w-full bg-transparent text-sm outline-none text-black placeholder-gray-400"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  
  {/* Search Icon on the Right */}
  <button className="ml-2 text-gray-400 hover:text-white transition">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
      />
    </svg>
  </button>
</div>

        {/* Right: Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/products" className="hover:text-gray-400">Products</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
           <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          
          {/* Cart (No background color) */}
          <Link href="/cart" className="flex items-center gap-1 hover:text-gray-400">
            <span>Cart</span>
            <span className="font-bold">({cart.length})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}