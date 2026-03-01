// lib/api.js
const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error in getProducts:", error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Error in getProduct for id ${id}:`, error);
    return null; // Return null instead of throwing
  }
}