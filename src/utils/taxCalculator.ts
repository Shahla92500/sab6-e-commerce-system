import  {Product} from "../models/Product";

// import {id, title, price, category, discountPercetage } from "../models/Product";
const defautTax : number = 4.75;
export function calculateTax(product: Product): number {
    const groceriesTax : number = 3;

    if (product.category === "groceries") {
      return product.getPriceWithTax(groceriesTax); 
    } else {
      return product.getPriceWithTax(defautTax);
}
}
  // default for generic Product

