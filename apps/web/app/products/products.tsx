import { Product } from "@repo/types";
import { unstable_noStore } from "next/cache";

export default async function Products() {
  unstable_noStore();

  let products: Product[] = [];

  try {
    if (process.env.API_URL) {
      const response = await fetch(`${process.env.API_URL}/products`, {
        next: { tags: ["products"] },
      });
      if (response.ok) {
        products = await response.json();
      }
    }
  } catch {
    // Silently fail during build - will fetch at runtime
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
