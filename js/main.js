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
  constructor (name,code,price,description) {
    this.name = name,
    this.code = parseInt(code),
    this.price = parseFloat(price),
    this.description = description;
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

const baseList = document.getElementById('base');

for (const base of cakeBaseList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${base.productCode}`);
  listElement.innerHTML = `${base.name} ($${base.price})`;

  baseList.appendChild(listElement);
}

// CAKE FILLINGS

const fillingList = document.getElementById('filling');

for (const filling of cakeFillingList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${filling.productCode}`);
  listElement.innerHTML = `${filling.name} ($${filling.price})`;

  fillingList.appendChild(listElement);
}

// CAKE FROSTINGS

const frostingList = document.getElementById('frosting');

for (const frosting of cakeFrostingList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${frosting.productCode}`);
  listElement.innerHTML = `${frosting.name} ($${frosting.price})`;

  frostingList.appendChild(listElement);
}

// CAKE DECORATION

const decorationList = document.getElementById('decoration');

for (const decoration of cakeDecorationList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${decoration.productCode}`);
  listElement.innerHTML = `${decoration.name} ($${decoration.price})`;

  decorationList.appendChild(listElement);
}

// CAKE SIZE

const SizesList = document.getElementById('size');

for (const size of cakeSizeList) {
  let listElement = document.createElement("option");
  listElement.setAttribute("class", "selection-style");
  listElement.setAttribute("value", `${size.code}`);
  listElement.innerHTML = `${size.name} ($${size.price})`;

  SizesList.appendChild(listElement);
}

/////////////////////////////////////////////////////////////

// ADD TO CART BOTON 

let cartTotalPrice = parseFloat(0);

const addBottons = $(".btn-add-cart");

function addToCart() {
  const add = cakeHouseList.find(producto => producto.code == this.id);
  cart.push (new CartProduct (add.name, add.code, add.price, add.description));
  console.log(cart);
  cartTotalPrice = cartTotalPrice + add.price;
  console.log(cartTotalPrice);
}

for (const botton of addBottons) {
  botton.addEventListener("click", addToCart);
}

// TODO: REPARAR ADD TO CART, AGREGA EL MISMO ELEMNTO SIEMPRE.

/////////////////////////////////////////////////////////////

// BUILDER


const myCakeIngredients = [];

// ACUMULO SELECCIONES DINAMICAMENTE EN CADA CAMBIO DE SELECCION

function cakeBaseSelector (){
  let select = document.getElementById('base').value;
  // Busco opcion seleccionada
  const ingredient = cakeBaseList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[0] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  console.log(myCakeIngredients);
  $("#select-empty-base").remove();
}
function cakeFillingSelector (){
  let select = document.getElementById('filling').value;
  // Busco opcion seleccionada
  const ingredient = cakeFillingList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[1] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  console.log(myCakeIngredients);
  $("#select-empty-filling").remove();
}
function cakeFrostingSelector (){
  let select = document.getElementById('frosting').value;
  // Busco opcion seleccionada
  const ingredient = cakeFrostingList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[2] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  console.log(myCakeIngredients);
  $("#select-empty-frosting").remove();
}
function cakeDecorationSelector (){
  let select = document.getElementById('decoration').value;
  // Busco opcion seleccionada
  const ingredient = cakeDecorationList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[3] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  console.log(myCakeIngredients);
  $("#select-empty-decoration").remove();
}
function cakeSizeSelector (){
  let select = document.getElementById('size').value;
  // Busco opcion seleccionada
  const ingredient = cakeSizeList.find(product => product.code == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[5] = new MyCakeIngredientInfo (ingredient.name,ingredient.code,ingredient.price);
  console.log(myCakeIngredients);
  $("#select-empty-size").remove();
}
function cakeQuantitySelector (){
  let select = document.getElementById('quantity').value;
  myCakeIngredients[6] = select;
  console.log(myCakeIngredients);
}


/////////////////////////////////////////////////////////////////////////////////

// ADD TO CART BUILDER BOTON 

const addBottonBuilder = $(".btn-add-cart-builder");

// array con los id de los selectores

function selectEmptyValidaton () {
  if ($("#base").val() != ""){
    $("#select-empty-base").remove();
    return true;
  } else {
    $("#base-selector").append(`<p id="select-empty-base" class="alert-selector-empty">Pleace select an option.</p>`);
  }
  if ($("#filling").val() != ""){
    $("#select-empty-base").remove();
    return true;
  } else {
    $("#filling-selector").append(`<p id="select-empty-filling" class="alert-selector-empty">Pleace select an option.</p>`)
  } if ($("#frosting").val() != ""){
    $("#select-empty-frosting").remove();
    return true;
  } else {
    $("#frosting-selector").append(`<p id="select-empty-frosting" class="alert-selector-empty">Pleace select an option.</p>`)
  } if ($("#decoration").val() != ""){
    $("#select-empty-decoration").remove();
    return true;
  } else {
    $("#decoration-selector").append(`<p id="select-empty-decoration" class="alert-selector-empty">Pleace select an option.</p>`)
  } if ($("#size").val() != ""){
    $("#select-empty-size").remove();
    return true;
  } else {
    $("#size-selector").append(`<p id="select-empty-size" class="alert-selector-empty">Pleace select an option.</p>`);
    return false;
  }
}

let myCakePrice = 0;

// funcion para agregar al carrito del boton builder cake
function addToCartBuilder() {
  selectEmptyValidaton();
    // armo el array del producto del carro
    let writeCakeText = $("#writeCakeText").val();
    myCakeIngredients[4] = new MyCakeIngredientInfo ("Write Text: " + writeCakeText , 0, 0 );
    let myCakeDescription =  myCakeIngredients;
    cart.push(new CartProduct("Cake Builder",00,myCakePrice,myCakeDescription));
    // Sumo el total al total del carro
    console.log(cakeBuilderTotalPrice);    
}

for (const botton of addBottonBuilder) {
  botton.addEventListener("click", addToCartBuilder);
}
let cakeBuilderTotalPrice = 0;
// CALCULADOR  DE PRECIO DINAMICO
function builderCakePrice () {
  cakeBuilderTotalPrice = parseFloat(0);
  for (const ingrediente of myCakeIngredients) {
    cakeBuilderTotalPrice = cakeBuilderTotalPrice + ingrediente.price;
  }
  $("#total-builder-price").remove();
  $("#builder-total-price").append(`<p id="total-builder-price">total: $ ${cakeBuilderTotalPrice}</p>`);
}

