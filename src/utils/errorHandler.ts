

// 1. Implement a custom error class
export class APIError extends Error {
    statusCode : number ;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
    //    console.log(`statusCode:  ${statusCode}`); 
}
// 2. functions to handle different types of errors gracefully
export function handleAPIError(e: APIError){
    if (e instanceof APIError) {
        console.error('API Error:', e.message, 'Status Code:', e.statusCode);
        if (e.statusCode>199 && e.statusCode<300) {
            e.message = "OK: The request was successful";
        } else {
            switch (e.statusCode) {
            case 100:
                e.message = "continue";
                break;
            case 400:
                e.message = "Bad Request";
                break;
            case 401:
                e.message = "Unauthorized";
                break;
            case 403:
                e.message = "Forbidden";
                break;
            case 404:
                e.message = "Not Found:";
                break;
            case 429:
                e.message = "Too Many Requests";
                break;
            case 403:
                e.message = "Forbidden";
                break;   
            case 500:
                e.message = "Server Error";
                break;  
            case 503:
                e.message = "Service Unavailable"     
                break;
            default:
                e.message = "undefined error"
                break;
            }
        }
    } else {
        console.error('An unexpected error occurred:', e);
    }
}




// interface Product {
//     name: string;
//     price: number;
// }
// const relatedProducts: Product[] = [
//     {name: 'mouse', price:20},
//     {name: 'charger', price:65}
// ]
// function getProductDetails(){
//     return new Promise<Product>((resolve,_reject)=>{
//         const product: Product = {name: "keyboard", price:50};
//         setTimeout(() =>resolve(product), 1000)
//     })
// }

// function getProductReviews() {
//     return new Promise<string[]>((resolve, _reject) => {
//         const reviews: string[] = ['good product', 'excellent product'];
//         setTimeout (() => resolve(reviews), 1000)
//     })
// }

// function getRelatedProducts() {
//     return new Promise((resolve, _reject) => {
//         setTimeout (() => resolve(relatedProducts), 100)
//     })
// }
// getProductDetails()
//     .then(product => {
//         console.log(product)
//         return getProductReviews();
//     })
//     .then(reviews => {
//         console.log(reviews);
//         return getRelatedProducts();
//     })
//     .then(relatedProducts => console.log(relatedProducts));


// Promise.race([getProductDetails(), getProductReviews(), getRelatedProducts()])
// .then(data => console.log(data))
// .catch(e => console.error(e))