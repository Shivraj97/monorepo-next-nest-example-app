"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import createProduct from "./actions/create-product";

export default function CreateProduct() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(() => {
      createProduct(formData).then(() => {
        router.refresh();
      });
    });
  }

  return (
    <div>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
