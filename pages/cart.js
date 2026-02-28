import { useCart } from "@/context/CartContext";
import Head from "next/head"

export default function Cart() {
  const { cart, increment, decrement } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
           <Head>
        <title>Cart Page of Ekart Site</title>
        <meta name="description" content="Review the items in your cart before checking out on Ekart." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600">
                  ${item.price}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => decrement(item.id)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                >
                  -
                </button>

                <span className="px-4">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increment(item.id)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <p className="font-semibold w-20 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Total: ${total.toFixed(2)}
        </h2>

        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}