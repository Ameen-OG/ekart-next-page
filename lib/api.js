// lib/api.js
const API_URL = "https://fakestoreapi.com";

async function fetchWithHeaders(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://fakestoreapi.com/',
      'Origin': 'https://fakestoreapi.com'
    },
    // Add cache: 'no-cache' to prevent caching issues
    cache: 'no-cache'
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  
  return res.json();
}

export async function getProducts() {
  try {
    console.log("Fetching products from fakestoreapi...");
    const data = await fetchWithHeaders(`${API_URL}/products`);
    console.log("Products fetched successfully:", data?.length);
    return data;
  } catch (error) {
    console.error("Error in getProducts:", error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    console.log(`Fetching product ${id} from fakestoreapi...`);
    const data = await fetchWithHeaders(`${API_URL}/products/${id}`);
    console.log("Product fetched successfully:", data?.title);
    return data;
  } catch (error) {
    console.error(`Error in getProduct for id ${id}:`, error);
    return null;
  }
}