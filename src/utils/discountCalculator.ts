import  {Product} from "../models/Product";

export function calculateDiscount(product: Product): number {
    let discountPercentage = product.discountPercentage; // 10%
    let discountDollar= product.getDiscount(discountPercentage);
    let discountedPrice = product.getPriceWithDiscount(discountPercentage);
    console.log(`discounted price : ${discountedPrice}`)
    console.log(`discount price : ${discountDollar}`)
    return discountedPrice;        //

}

