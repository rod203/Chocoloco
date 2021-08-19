class CakesIngredients {
  constructor (name,code,category,description,price) {
    this.name = name,
    this.productCode = parseInt(code),
    this.category = parseInt(category),
    this.description = description,
    this.price = parseFloat(price)
  }
}

class CakesHouse {
  constructor (name,code,description,price,image1,image2) {
    this.name = name,
    this.code = parseInt(code),
    this.description = description,
    this.price = parseFloat(price),
    this.image1 = image1,
    this.image2 = image2
  }
}

class CategoryProductList {
  constructor (name,code,description) {
    this.name = name,
    this.code = parseInt(code),
    this.description = description;
  }
}

class SizeList {
  constructor (name,code,price) {
    this.name = name,
    this.code = parseInt(code),
    this.price = parseFloat(price);
  }
}

class CartProduct {
  constructor (name,code,price) {
    this.name = name,
    this.code = parseInt(code),
    this.price = parseFloat(price);
  }
}

class MyCakeIngredientInfo {
  constructor (name,code,price) {
    this.name = name,
    this.code = parseInt(code),
    this.price = parseFloat(price);
  }
}

const categoryProductList = [];
const cakeBaseList = [];
const cakeFillingList = [];
const cakeFrostingList = [];
const cakeDecorationList = [];
const cakeHouseList = [];
const cakeSizeList = [];
const cart = [];

// Definiendo productos completos

cakeHouseList.push( new CakesHouse ("BIRTHDAY CAKE",1,"Vanilla sponge cake with confetti sprinkles baked in. Filled with vanilla whipped cream and frosted with a funfetti buttercream (confetti sprinkles mixed with buttercream). Decorated naked with a few jimmies sprinkled on top.",250,"./assets/img/cakes/birtday/birthday-full.jpeg","./assets/img/cakes/birtday/birthday-slice.jpeg"));
cakeHouseList.push( new CakesHouse ("STRAWBERRY CAKE",2,"Our classic vanilla chiffon cake layered with fresh strawberry cream and then topped with strawberry buttercream, in our signature ombre design.",250,"./assets/img/cakes/strawberry/strawberry-full.jpg","./assets/img/cakes/strawberry/strawberry-slice.jpg"));
cakeHouseList.push( new CakesHouse ("THE BIRTHDAY CAKE",3,"Our sinfully delicious devil's food cake layered with whipped cream, topped with vanilla buttercream, and finished with colorful jimmies.",250,"./assets/img/cakes/devil party/devilparty-full.jpg","./assets/img/cakes/devil party/devilparty-slice.jpg"));
cakeHouseList.push( new CakesHouse ("SALTED CARAMEL CAKE",4,"Our sinfully delicious devil's food cake layered with burnt caramel Bavarian, and then topped with caramel buttercream. In a grand finale, we drizzle the top with ganache and Maldon salt.",250,"./assets/img/cakes/salted caramel/saltedcaramel-full.jpg","./assets/img/cakes/salted caramel/saltedcaramel-slice.jpg"));
cakeHouseList.push( new CakesHouse ("GOURMAND",5,"Our sinfully delicious devil's food cake layered and topped with decadent E Guittard 81% chocolate frosting.",250,"./assets/img/cakes/gourmand/gourmand-full.jpg","./assets/img/cakes/gourmand/gourmand-slice.jpg"));
cakeHouseList.push( new CakesHouse ("RED VELVET CAKE",6,"Our rich red velvet chocolate cake layered and topped with cream cheese icing.",250,"./assets/img/cakes/red velvet/redvelve-full.jpg","./assets/img/cakes/red velvet/redvelve-slice.jpg"));
cakeHouseList.push( new CakesHouse ("CARROT CAKE",7,"Carrot Cake studded with pineapple, raisins and walnuts — then layered and topped with cream cheese icing. (It counts as a serving of veggies!).",250,"./assets/img/cakes/carrot/carrot-full.jpeg","./assets/img/cakes/carrot/carrot-slice.jpeg"));
cakeHouseList.push( new CakesHouse ("LEMON PASSIONFRUIT CAKE",8,"Our classic vanilla chiffon cake layered with lemon whipped cream and then topped with passionfruit buttercream in our signature ombre design. Need to Build Your Own Cake?.",250,"./assets/img/cakes/lemon/lemon-full.jpg","./assets/img/cakes/lemon/lemon-slice.jpg"));
cakeHouseList.push( new CakesHouse ("NE -O COOKIE CAKE",9,"Our rich devil’s food cake layered with a filling that tastes just like your favorite childhood cookie and topped with whipped cream and mini oreos.",250,"./assets/img/cakes/ne-o cookie/neo-full.jpg","./assets/img/cakes/ne-o cookie/neo-slice.jpeg"));


// Definiendo categorias

categoryProductList.push( new CategoryProductList ("Base",1,"Base cake"));
categoryProductList.push( new CategoryProductList ("Frosting",2,"The frosting can be buttercream, chocolate ganache or naked style (without frosting)."));
categoryProductList.push( new CategoryProductList ("Filling",3,"Filling cake, mousse, buttercream, whipped cream, jam"));
categoryProductList.push( new CategoryProductList ("Decoration",4,"Style decoration frosting"));

// Definiendo bases

cakeBaseList.push( new CakesIngredients ("Vanilla Party",1,1,"Vanilla sponge cake with confetti sprinkles baked in.",300));
cakeBaseList.push( new CakesIngredients ("Chocoloco",2,1,"Dobble chocolate sponge moist cake.",350));
cakeBaseList.push( new CakesIngredients ("Red Velvet",3,1,"Classic and rich red velvet chocolate cake.",350));
cakeBaseList.push( new CakesIngredients ("Carrot",4,1,"Classic sweet carrot cake.",350));
cakeBaseList.push( new CakesIngredients ("Cacao Intense",5,1,"Intense cocoa cake with a pinch of salt.",250));
cakeBaseList.push( new CakesIngredients ("Vanilla",6,1,"Simple vanilla sponge cake.",250));

// Definiendo coberturas

cakeFrostingList.push( new CakesIngredients ("White Buttercream",1,2,"White Buttercream.",250));
cakeFrostingList.push( new CakesIngredients ("Chocolate Buttercream",2,2,"Chocolate Buttercream.",250));
cakeFrostingList.push( new CakesIngredients ("Burnt Salted Caramel Buttercream",3,2,"Burnt Salted Caramel Buttercream.",250));
cakeFrostingList.push( new CakesIngredients ("Cream Cheese Frosting",4,2,"Cream Cheese Frosting.",250));
cakeFrostingList.push( new CakesIngredients ("Dark Chocolate ganache",5,2,"Dark Chocolate ganache.",250));
cakeFrostingList.push( new CakesIngredients ("Vanilla Whip Cream",6,2,"Vanilla Whip Cream.",250));

// Definiendo rellenos

cakeFillingList.push( new CakesIngredients ("Chocolate Whip Cream",1,3,"Chocolate Whip Cream.",250));
cakeFillingList.push( new CakesIngredients ("Raspberry Whip Cream",2,3,"Raspberry Whip Cream.",250));
cakeFillingList.push( new CakesIngredients ("Vanilla Whip Cream",3,3,"Vanilla Whip Cream.",250));
cakeFillingList.push( new CakesIngredients ("Diplomatic Cream",4,3,"Diplomatic Cream.",250));
cakeFillingList.push( new CakesIngredients ("Lemon Cream",5,3,"Lemon Cream.",250));
cakeFillingList.push( new CakesIngredients ("Dark Chocolate Ganache",6,3,"Dark Chocolate Ganache.",250));
cakeFillingList.push( new CakesIngredients ("Cream Cheese Frosting",7,3,"Cream Cheese Frosting.",250));
cakeFillingList.push( new CakesIngredients ("Burnt Salted Caramel",8,3,"Burnt Salted Caramel.",250));

// Definiendo decoraciones

cakeDecorationList.push( new CakesIngredients ("Smooth",1,4,"Smooth and soft coverage.",250));
cakeDecorationList.push( new CakesIngredients ("Horizontal Stripes",2,4,"Horizontal Stripes.",250));
cakeDecorationList.push( new CakesIngredients ("Rustic",3,4,"Rustic.",250));
cakeDecorationList.push( new CakesIngredients ("Rosettes",4,4,"Rosettes.",250));
cakeDecorationList.push( new CakesIngredients ("Naked",5,4,"Naked with frosting in the top.",250));
cakeDecorationList.push( new CakesIngredients ("colorful sprinkles",5,4,"colorful sprinkles around the cake.",250));
cakeDecorationList.push( new CakesIngredients ("Chocolate Ganache Drip",6,4,"Classic chocolate drip over smooth frosting.",250));

// Definiendo tamaños

cakeSizeList.push( new SizeList ("15cm",1,0,));
cakeSizeList.push( new SizeList ("20cm",2,200,));
cakeSizeList.push( new SizeList ("25cm",3,350,));
cakeSizeList.push( new SizeList ("30cm",4,500,));

////////////////////////////////////////////////////////////////////

// GENERADOR DE PRODUCTOS

// SELECCION DE CONTENEDOR DE CARDS
const productList = document.getElementById('products-list');

// CREAR CARDS AUTOMATICAS
for (const producto of cakeHouseList) {
  let card = document.createElement("div");
  card.setAttribute("class", "col-md-6 col-sm-6 col-lg-4");
  card.innerHTML =`
    <div class="product-grid">
      <div class="product-image">
        <a href="#" class="image">
          <img class="pic-1" src="${producto.image1}">
          <img class="pic-2" src="${producto.image2}">
        </a>
    </div>
    <div class="product-content">
      <h3 class="title">
          <a href="#">${producto.name}</a>
      </h3>
      <div class="price">$${producto.price}</div>
      <button type="button" id="${producto.code}" class="btn btn-outline-primary product-links btn-add-cart">Add to cart</button>
    </div>`;
  productList.appendChild(card);
}

////////////////////////////////////////////////////////////////////

// LLENAR OPCIONES DEL FORMULARIO MAKE YOUR CAKE

// CAKE BASE

const baseList = document.getElementById('base-flavors');

for (const base of cakeBaseList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${base.productCode}`);
  listElement.innerHTML = `${base.name} ($${base.price})`;

  baseList.appendChild(listElement);
}

// CAKE FILLINGS

const fillingList = document.getElementById('filling-flavors');

for (const filling of cakeFillingList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${filling.productCode}`);
  listElement.innerHTML = `${filling.name} ($${filling.price})`;

  fillingList.appendChild(listElement);
}

// CAKE FROSTINGS

const frostingList = document.getElementById('frosting-flavors');

for (const frosting of cakeFrostingList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${frosting.productCode}`);
  listElement.innerHTML = `${frosting.name} ($${frosting.price})`;

  frostingList.appendChild(listElement);
}

// CAKE DECORATION

const decorationList = document.getElementById('decoration-style');

for (const decoration of cakeDecorationList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${decoration.productCode}`);
  listElement.innerHTML = `${decoration.name} ($${decoration.price})`;

  decorationList.appendChild(listElement);
}

// CAKE SIZE

const SizesList = document.getElementById('size-list');

for (const size of cakeSizeList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${size.code}`);
  listElement.innerHTML = `${size.name} ($${size.price})`;

  SizesList.appendChild(listElement);
}

/////////////////////////////////////////////////////////////

// ADD TO CART BOTON 

const addBottons = document.getElementsByClassName('btn-add-cart');

function addToCart() {
  const add = cakeHouseList.find(product => product.id == this.code);
  cart.push( new CartProduct (add.name,add.code,add.price));
  console.log(cart);
}

for (const botton of addBottons) {
  botton.addEventListener("click", addToCart);
}

// TODO: REPARAR ADD TO CART, AGREGA EL MISMO ELEMNTO SIEMPRE.

/////////////////////////////////////////////////////////////
// BUILDER

let myCakePrice = parseFloat(0);
let cake = document.getElementById('base-flavors').value;
console.log(cake);
function showcake () {
  console.log(cake);
}
cake.addEventListener("change", showcake);



// ADD TO CART BUILDER BOTON 

const addBottonBuilder = document.getElementsByClassName('btn-add-cart-builder');


function addToCartBuilder() {
  // creo array para armar el producto
  const newCake = [];
  // obtengo el value de cada selector
  let cake = document.getElementById('base-flavors').value;
  let filling = document.getElementById('filling-flavors').value;
  let frosting = document.getElementById('frosting-flavors').value;
  let decoration = document.getElementById('decoration-style').value;
  let writeText = document.getElementById('writeCakeText').value;
  let size = document.getElementById('size-list').value;
  let quantity = document.getElementById('quantity-list').value;
  // creo array para apilar los ingredientes
  const myCakeIngredients = [];
  // Compruebo si el select esta vacio, si no, obtengo datos del igrediente y lo agrego al array.
  if (cake != "default") {
    // Busco opcion seleccionada
    const myBase = cakeBaseList.find(product => product.productCode == cake);
    // Sumo el valor al total.
    myCakePrice = myCakePrice + myBase.price;
    // Cargo los datos del ingrediente al array
    myCakeIngredients.push( new MyCakeIngredientInfo (myBase.name,myBase.productCode,myBase.price));
    // Busco una el elmento alert-selector-empty, si existe la elimina.
    let removeMessege = document.getElementById('alert-selector-empty');
    if (removeMessege != undefined){
      removeMessege.remove();
    }
  } else {
    // Si el selector no tiene opcion seleccionada muestra mensaje de alerta
    messege = document.getElementById('base-selector');
    div = document.createElement("div");
    div.setAttribute("class", "alert-selector-empty");
    div.setAttribute("id", "alert-selector-empty");
    div.innerHTML = `<p>Please select an option.</p>`;
    messege.appendChild(div);  
  }
  // Sigo comprobando selectores
  if (filling != "default") {
      const myBase = cakeFillingList.find(product => product.productCode == filling);
      myCakePrice = myCakePrice + myBase.price;
      myCakeIngredients.push( new MyCakeIngredientInfo (myBase.name,myBase.productCode,myBase.price));
      let removeMessege = document.getElementById('alert-selector-empty');
      if (removeMessege != undefined){
        removeMessege.remove();
      }
    } else {
      messege = document.getElementById('filling-selector');
      div = document.createElement("div");
      div.setAttribute("class", "alert-selector-empty");
      div.setAttribute("id", "alert-selector-empty");
      div.innerHTML = `<p>Please select an option.</p>`;
      messege.appendChild(div);  
    }
    console.log(myCakePrice);
}

  

const myCakeTotalPrice = document.getElementById('builder-total-price');
let priceDiv = document.createElement("span");
priceDiv.setAttribute("class", "input-group-text w-50");
priceDiv.innerHTML = `${myCakePrice}`;
myCakeTotalPrice.appendChild(priceDiv);

for (const botton of addBottonBuilder) {
  botton.addEventListener("click", addToCartBuilder);
}
