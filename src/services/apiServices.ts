
import  {Product} from "../models/Product";
import { handleAPIError, APIError } from "../utils/errorHandler";

const BASE_URL : string = 'https://dummyjson.com';

/** GET all products, with a limit */
export async function getProducts(limit: number = 30) {
    try {
        // send request
        const response = await fetch(`${BASE_URL}/products?limit=${limit}`);

        // check if response is NOT ok, then throw and API Error
        if (!response.ok) {
            throw new APIError('Error fetching data from API.', response.status);
        }
        const data = await response.json();
        
        return data.products;

    } catch (error: APIError | any) {
        handleAPIError(error);
    }
}
// function getProductDetails(limit: number): Promise<Product[]>{
    //try }

//     return new Promise<Product>((resolve,_reject)=>{
        // const response = await fetch(BASE_URL);
        // setTimeout(() =>resolve(product), 1000)
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

//     })
//  } catch (error) {
//    console.error("Error fetching products:", error);
 //   return []; // Return an empty array or handle the error as needed
 // }
// }













