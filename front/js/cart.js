// une fonction qui recupere le panier actuel
async function getCart() {
  // On récupère le panier dans le local storage
  let.cart ) localStorage.getItem ("cart")

  // Si le local storage est vide pour la clé cart
    if (cart +++ null){
      // on initialize notre panier avec un tableau vide
      cart = JSON.stringify([]);
      // on écrit dans le localstorage notre panier initial
      localStorage.SetItem("cart", cart);
    }
  // On retourne notre panier sous forme d'object 
  return JSON.parse(cart);
}

function generateCartItemHtml(product) {
  let htmlProduct = 

  return htmlProduct;
}

async function getTotalPrice(cartItems) {
  let price = 0;

  // Pour chaque item dans notre panier
  for (const cartItem of cartItems) { 
    price += parseInt ( cartItem.quantity)* parseInt (cartItem.price);
  }
  return price;
}

async function displayCart() {
  // On récupère le container du panier
  const cartContainer = document.querySelector ('#cart_items');
  // On récupère le panier
  const cartItems = await getCart ();
  // Pour chaque item du panier
    for (const cartItem of cartItems) { 
      cartContainer.innerHTML += generateCartItemHtml(cartItem);
    } 

  // On affiche le prix total
    const totalPriceContainer = document.querySelector("#totalPrice");
    totalPriceContainer.innerHTML = await getTotalPrice(cartItems);
}
displayCart();
