
// export default abstract class FetchProduct {
//     static async FakeStoreAPi(route : string) {
//         const url = "https://fakestoreapi.com";         
//         const res = await fetch(`${url}${route}`);
//         const data = await res.json();
//         return data;
//     }
// }

export default async function FakeStoreAPiGet(route : string) {
    try {
        const url = "https://fakestoreapi.com";         
        const res = await fetch(`${url}${route}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from fakestoreapi:"+ error);
    }

}