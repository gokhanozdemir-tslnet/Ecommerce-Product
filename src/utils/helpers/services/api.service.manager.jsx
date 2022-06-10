import * as axios from "axios";
//

//categories: https://fakestoreapi.com/products/categories
//https://fakestoreapi.com/products?limit=5
//producthttps://fakestoreapi.com/products/1

/*fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))*/
//'https://fakestoreapi.com/products?sort=desc'

//get cateories product: https://fakestoreapi.com/products/category/jewelery

/*addd new product
fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
*/

//https://fakestoreapi.com/docs

export default class Api {
  constructor() {
    this.apiToken = null;
    this.client = null;
    this.apiUrl = "https://fakestoreapi.com/";
    //process.env.REACT_APP_API_ENDPOINT;
  }

  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");

    let headers = {
      Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.apiUrl,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getProductsAsync = async (urlparam, params) => {
    return await this.init().get("/products", { params: params });
  };
}
