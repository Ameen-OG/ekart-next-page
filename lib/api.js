// lib/api.js
const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  try {
    console.log("Fetching products from API...");
    const res = await fetch(`${API_URL}/products`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Next.js/14)',
        'Accept': 'application/json',
      },
      // Add cache: 'no-cache' for fresh data
      cache: 'no-cache'
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log("API response:", data?.length, "products");
    return data;
  } catch (error) {
    console.error("Error in getProducts:", error);
    // Return mock data as fallback
    return [
      {
        id: 1,
        title: "Sample Product 1",
        price: 29.99,
        description: "This is a sample product",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        category: "electronics"
      },
      {
        id: 2,
        title: "Sample Product 2",
        price: 49.99,
        description: "Another sample product",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        category: "clothing"
      }
    ];
  }
}

export async function getProduct(id) {
  try {
    console.log(`Fetching product ${id} from API...`);
    const res = await fetch(`${API_URL}/products/${id}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Next.js/14)',
        'Accept': 'application/json',
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log(`Product ${id} fetched:`, data?.title);
    return data;
  } catch (error) {
    console.error(`Error in getProduct for id ${id}:`, error);
    return null;
  }
}