import CreateProduct from "./create-product/create-product";
import Products from "./products/products";

export default function Home() {
  return (
    <div>
      <CreateProduct />
      <Products />
    </div>
  );
}
