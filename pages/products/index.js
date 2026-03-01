import { getProducts } from "../../lib/api";
import ProductCard from "../../components/ProductCard";
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Products({ allProducts }) {
  const router = useRouter();
  const { search = "", sort = "default" } = router.query;

  // Show message if no products
  if (!allProducts || allProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center">
        <h1 className="text-2xl">No products available</h1>
        <p className="text-gray-500 mt-2">Please check back later</p>
      </div>
    );
  }

  // 1. FILTER & SORT logic (Client-side for speed)
  const filteredProducts = allProducts
    .filter((product) => {
      const name = product?.name || product?.title || "";
      return name.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0; // default (featured)
    });

  const handleSortChange = (e) => {
    router.push({
      pathname: '/products',
      query: { ...router.query, sort: e.target.value },
    }, undefined, { shallow: true });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Head>
        <title>Products | Ekart</title>
      </Head>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <select 
          onChange={handleSortChange}
          value={sort}
          className="border border-gray-300 p-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Sort By: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No products found matching "{search}"</p>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    console.log("Fetching products...");
    const data = await getProducts();
    console.log("Products fetched successfully:", data?.length || 0, "items");
    
    return { 
      props: { 
        allProducts: data || [] 
      } 
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return { 
      props: { 
        allProducts: [] 
      } 
    };
  }
}