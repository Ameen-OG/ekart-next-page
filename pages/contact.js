import Head from 'next/head'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <Head>
          <title>Contact Page</title>
          <meta name="description" content="Learn more about our team and mission." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg space-y-6">
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}