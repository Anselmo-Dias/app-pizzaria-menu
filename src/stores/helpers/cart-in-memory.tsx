import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart.store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const productExists = products.find(({ id }) => id === newProduct.id);

  if (productExists) {
    return products.map((item) =>
      productExists.id === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
}
