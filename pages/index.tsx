import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from 'next/head';

function Home() {
  return (
    <div className="space-y-20">
     <Head>
        <title>Home Page of Ekart Site</title>
        <meta name="description" content="Learn more about our team and mission." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100 rounded-xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Welcome to Ekart
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white-100 text-lg mb-8"
        >
          Discover the best products at unbeatable prices.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/products"
            className="font-semibold bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-400 transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your orders delivered quickly and safely.
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">
            100% secure payment methods for safe transactions.
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">
            Carefully selected high-quality products.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;