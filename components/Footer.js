import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
   
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Ekart Next</h2>
          <p className="text-sm leading-relaxed">
            Your premium destination for the latest trends and tech. 
            Quality products delivered right to your doorstep.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/cart" className="hover:text-white transition">Shopping Cart</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <p className="text-sm mb-2">Email: support@ekartnext.com</p>
          <p className="text-sm mb-2">Phone: +91 9731327026</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">

             <span className="cursor-pointer hover:text-white">FB</span>
             <span className="cursor-pointer hover:text-white">IG</span>
             <span className="cursor-pointer hover:text-white">TW</span>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Ekart Next. All rights reserved.</p>
      </div>
    </footer>
  );
}