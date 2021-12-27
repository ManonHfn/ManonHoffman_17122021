// une fonction qui recupere le panier actuel
async function getCart() {
  // On récupère le panier dans le local storage
  /* let cart = localStorage.<???>("..."); */

  // Si le local storage est vide pour la clé cart
  /* 
    if(...) {
      // on initialize notre panier avec un tableau vide
      cart = JSON.stringify(...);
      // on écrit dans le local storage notre panier initial
      localStorage.<???>("...", ...);
    }
  */

  // On retourne notre panier sous forme d'object 
  return JSON.parse(cart);
}

// TODO: à modifier
function generateCartItemHtml(cartItem) {
  /*
  let htmlProduct = ` 
    ...
    `;

  return htmlProduct;
  */
}

async function getTotalPrice(cartItems) {
  let price = 0;

  // Pour chaque item dans notre panier
  /*
  for (...) { 
    price += <nombre d'item en nombre entier> * <prix de l'item en nombre entier>;
  }
  */

  return price;
}

async function displayCart() {
  // On récupère le container du panier
  /* const cartContainer = document.querySelector("#..."); */

  // On récupère le panier
  /* const cartItems = ... */

  // Pour chaque item du panier
  /* 
    for (...) { 
      cartContainer.innerHTML += generateCartItemHtml(...); 
    } 
  */


  // On affiche le prix total
  /*
    const totalPriceContainer = document.querySelector("#...");
    totalPriceContainer.innerHTML = await getTotalPrice(cartItems);
  */
}

displayCart();
