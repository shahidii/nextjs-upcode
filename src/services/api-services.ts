
import FakeStoreAPiGet from "./productsFetch-services";

export default class ApiService {
     static async fakestoreapi(route: string) {
        const products = await FakeStoreAPiGet(route);
        return products;
    }
}