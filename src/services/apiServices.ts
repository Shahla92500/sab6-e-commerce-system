import { Product } from "../models/Product";

import { handleAPIError, APIError } from "../utils/errorHandler";

const BASE_URL : string = 'https://dummyjson.com';

/** GET all products, with a limit */
export async function getProducts(limit: number , skip:number): Promise<Product[]> {
    try {
        // send request
        const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);

        // check if response is NOT ok, then throw and API Error
        if (!response.ok) {
            throw new APIError('Error fetching data from API.', response.status);
        }
        //get the data (objects)
        const data = await response.json();
        const products: Product[] = data.products.map((p:any) =>
        new Product(p.id, p.title, p.price, p.category, p.discountPercentage)
        );
        return products;
        // return data.products;

    } catch (error: APIError | any) {
        handleAPIError(error);
        return[];
    }
}














