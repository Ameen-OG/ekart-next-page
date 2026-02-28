import Head from 'next/head'
export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Head>
              <title>About Page of Ekart Site</title>
              <meta name="description" content="Learn more about our team and mission." />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
           
      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          About Ekart
        </h1>
        <p className="text-gray-600 text-lg">
          Your trusted online shopping destination.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
        
        <div className="space-y-4 text-gray-700">
          <p>
          Ekart is a modern ecommerce platform built using Next.js Pages Router and Tailwind CSS. Our goal is to deliver high-quality products with a smooth and secure shopping experience.

We focus on performance, responsive design, and user-friendly interfaces to ensure customers enjoy seamless browsing and fast checkout. From intelligent search filters to real-time inventory updates, every feature is designed to save you time. Your security is our priority; we utilize the latest encryption standards to protect your data and payments.

Thank you for choosing Ekart. We’re excited to serve you and look forward to being your go-to destination for online shopping!
          </p>

          <p>
            We focus on performance, responsive design, and 
            user-friendly interfaces to ensure customers 
            enjoy seamless browsing and fast checkout.
          </p>

          <p>
            Thank you for choosing Ekart. We’re excited to 
            serve you!
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">
              🚀 Fast & Modern
            </h3>
            <p className="text-gray-600">
              Built with the latest web technologies for speed and performance.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">
              🔒 Secure Shopping
            </h3>
            <p className="text-gray-600">
              Secure transactions and reliable payment methods.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">
              ⭐ Quality Products
            </h3>
            <p className="text-gray-600">
              Carefully selected products to ensure customer satisfaction.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}