import  {Product} from "../models/Product";

// export function calculateDiscount(p: { price: number; discountPercentage: number }): number {
//   const discountDollar = (p.price * p.discountPercentage) / 100;
//   return p.price - discountDollar;
// }

export function calculateDiscount(product: Product): number {
  const discountDollar = product.getDiscount(product.discountPercentage); // % -> $
  return product.getPriceWithDiscount(discountDollar);                   // price - $
}

