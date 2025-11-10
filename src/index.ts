import  {Product} from "./models/Product";
import * as apiService from "./services/apiServices";
import { handleAPIError, type APIError } from "./utils/errorHandler";

async function main(){
  try{
    const apiProducts = await apiService.getProducts(30);
    if (!apiProducts) return;
    const products : Product[] = apiProducts.map(
        (p:any) => new Product(p.id, p.title, p.price, p.category , p.discountPercentage)
    )
    console.log("Products instances: ",products)  
  }catch(error: APIError | any) {
    handleAPIError(error)
    }
}

main().catch(console.error)
// export default main()

