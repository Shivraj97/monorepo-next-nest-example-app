import { Product } from "@repo/types";

export default async function Products() {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ["products"] },
  });
//   console.log("response", response.json());
  const products: Product[] = await response.json();
  console.log("products", products);
  console.log("process.env.API_URL", process.env.API_URL);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
