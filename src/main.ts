

import * as api from "./services/apiServices";
import { Product } from "./models/Product";

const els = {
  form: document.getElementById("controls") as HTMLFormElement,
  limit: document.getElementById("limitInput") as HTMLInputElement,
  status: document.getElementById("status") as HTMLDivElement,
  list: document.getElementById("productList") as HTMLUListElement,
};

function setStatus(msg: string) {
//   console.log("in setStatus:", msg);
  els.status.textContent = msg;
}

function renderProducts(products: Product[]) {
  els.list.innerHTML = "";
  for (const product of products) {
    const li = document.createElement("li");
    li.className = "card";
    const title = product.title ?? product.category ?? `Product #${product.id}`;
    li.innerHTML = `
      <h4>${title} - Price: $${product.price}</div></h4>
    `;
    els.list.appendChild(li);
  }
}
let skip = 0;  //initialize skip for pagination  

async function loadProducts(limit: number) {
  try {
    setStatus("Loading...");
    const products = await api.getProducts(limit,skip); 
    skip +=limit;
    console.log("Products :", products);
    renderProducts(products);
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


loadProducts(Number(els.limit.value) || 10);
