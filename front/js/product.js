/* Une fonction asynchrone qui permet de récupérer dans le HTML le titre, la description,
 l'image, et la couleur (propriétés) sous forme de string en utilisant template string */
async function displayProduct(product) {
/* On récupère chaque éléments (propriétés) un par un */
    const titleContainer = document.querySelector('#title')
    const priceContainer = document.querySelector('#price')
    const descriptionContainer = document.querySelector('#description')
    const imageContainer = document.querySelector('#image');
    const colorsContainer = document.querySelector('#colors');
/*C'est ce qui permet de concatener la liste pour la générer*/
    titleContainer.innerHTML = product.name;
    priceContainer.innerHTML = product.price;
    descriptionContainer.innerHTML = product.description;
    imageContainer.innerHTML = `<img src="${product.imageUrl}" alt="${product.description}">`
/*On créer une boucle sur les couleurs de la liste des propriétés*/
    for (let i = 0; i < product.colors.length; i++) {
/*Pour chaque couleur de notre liste*/
        const color = product.colors[i];
/*On vient concatener le HTML*/
        colorsContainer.innerHTML += `<option value="${color}">${color}</option>`
    }
    
}

/* Une fonction asynchrone pour récupérer la liste des produits (et utiliser await)*/
async function getProduct(productId) {
/*On effectue la requete http api qui nous redonne une réponse*/
    const response = await fetch ("http://localhost:3000/api/products/" + productId);
    console.log(response)
/*On transforme la reponse en javaScript*/
    const product = await response.json();
    
    console.log(product);
/*On affiche les produits qu'on a récupéré*/
    await displayProduct(product);
}
/*On récupère les informations pour travailler avec la chaîne de requête get*/
const urlSearchParams = new URLSearchParams(window.location.search);
/*Retourne un inerator permettant de parcourir 
toutes les paires/clefs de notre valeur*/
const params = Object.fromEntries(urlSearchParams.entries());
/* l'instruction if execute un condition.
Dans notre cas ! == veut dire "l'opérateur d'inégalité strict"*/
if(params.id !== undefined) {
    getProduct(params.id)
}