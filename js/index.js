import { CardComponent } from "../components/CardComponent.js";
import { UsersComponent } from "../components/UsersComponent.js";
import { ProductComponet } from "../components/ProductComponet.js";
import { getData } from "../store/fetchApi.js";

let renderArea = document.querySelector("#renderArea");
let renderUsers = document.querySelector("#renderUsers");
let renderProducts = document.querySelector("#renderProducts");

let users = await getData("users");
let productalls = await getData("products");

const base_url = "http://127.0.0.1:5500/data/products.json";

fetch(base_url)
  .then((res) => res.json())
  .then((data) => {
    let products = data.products;
    products.map((product) => (renderArea.innerHTML += CardComponent(product)));
  });

users.map((user) => (renderUsers.innerHTML += UsersComponent(user)));
productalls.map((productall) => (renderProducts.innerHTML += ProductComponet(productall)));
