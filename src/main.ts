

import * as api from "./services/apiServices";
import { Product } from "./models/Product";
import { calculateDiscount } from "./utils/discountCalculator";
import './style.css';

const els = {
  form: document.getElementById("controls") as HTMLFormElement,
  limit: document.getElementById("limitInput") as HTMLInputElement,
  status: document.getElementById("status") as HTMLDivElement,
  list: document.getElementById("productList") as HTMLUListElement,
};

// change the status
function setStatus(msg: string) {
//   console.log("in setStatus:", msg);
  els.status.textContent = msg;
}

//displaying loaded products
function renderProducts(products: Product[], limit: number) {
  const grid = document.getElementById("product-grid")!;
  grid.innerHTML = ""; // clear

  // show up to `limit` items arranged in 4 columns by CSS grid
  products.slice(0, limit).forEach((p) => {
    const cell = document.createElement("div");
    cell.className = "product-cell";

    // elements
    const title = document.createElement("span");
    title.className = "product-title";
    title.textContent = p.title;

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = `— $${p.price.toFixed(2)}`;

    const input = document.createElement("input");
    input.className = "product-input";
    input.placeholder = "discounted $";

    const btn = document.createElement("button");
    btn.className = "product-btn";
    btn.textContent = "Discount";
    btn.addEventListener("click", () => {
      const discounted = calculateDiscount(p);        // discount function
      input.value = discounted.toFixed(2);
    });

    // assemble
    cell.appendChild(title);
    cell.appendChild(price);
    cell.appendChild(input);
    cell.appendChild(btn);
    grid.appendChild(cell);
  });
}
let skip = 0;  //initialize skip for pagination  

//load the product by calling getProducts, 
async function loadProducts(limit: number) {
  try {
    setStatus("Loading...");
    const products = await api.getProducts(limit,skip); 
    skip +=limit;
    console.log("Products :", products);
    renderProducts(products, limit);
    setStatus(`Loaded ${products.length} product(s).`);
  } catch (e) {
    console.error(e);
    setStatus("Failed to load products.");
  }
}

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const limit = Number(els.limit.value) || 10;
  loadProducts(limit);
});

document.addEventListener('DOMContentLoaded', () => {
loadProducts(Number(els.limit.value) || 10);
});
