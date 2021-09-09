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
  constructor (name,code,description,price,image1,image2,quantity) {
    this.name = name,
    this.code = parseInt(code),
    this.description = description,
    this.price = parseFloat(price),
    this.image1 = image1,
    this.image2 = image2,
    this.quantity = parseInt(quantity);
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
  constructor (name,code,price,description,quantity) {
    this.name = name,
    this.code = parseInt(code),
    this.price = parseFloat(price),
    this.description = description,
    this.quantity = parseInt(quantity);
  }
}

class MyCakeIngredientInfo {
  constructor (name,code,price) {
    this.name = name,
    this.code = code,
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
const myCakeIngredients = [];

// Definiendo productos completos

cakeHouseList.push( new CakesHouse ("BIRTHDAY CAKE",1,"Vanilla sponge cake with confetti sprinkles baked in. Filled with vanilla whipped cream and frosted with a funfetti buttercream (confetti sprinkles mixed with buttercream). Decorated naked with a few jimmies sprinkled on top.",250,"./assets/img/cakes/birtday/birthday-full.jpeg","./assets/img/cakes/birtday/birthday-slice.jpeg",1));
cakeHouseList.push( new CakesHouse ("STRAWBERRY CAKE",2,"Our classic vanilla chiffon cake layered with fresh strawberry cream and then topped with strawberry buttercream, in our signature ombre design.",200,"./assets/img/cakes/strawberry/strawberry-full.jpg","./assets/img/cakes/strawberry/strawberry-slice.jpg",1));
cakeHouseList.push( new CakesHouse ("THE BIRTHDAY CAKE",3,"Our sinfully delicious devil's food cake layered with whipped cream, topped with vanilla buttercream, and finished with colorful jimmies.",400,"./assets/img/cakes/devil party/devilparty-full.jpg","./assets/img/cakes/devil party/devilparty-slice.jpg",1));
cakeHouseList.push( new CakesHouse ("SALTED CARAMEL CAKE",4,"Our sinfully delicious devil's food cake layered with burnt caramel Bavarian, and then topped with caramel buttercream. In a grand finale, we drizzle the top with ganache and Maldon salt.",250,"./assets/img/cakes/salted caramel/saltedcaramel-full.jpg","./assets/img/cakes/salted caramel/saltedcaramel-slice.jpg",1));
cakeHouseList.push( new CakesHouse ("GOURMAND",5,"Our sinfully delicious devil's food cake layered and topped with decadent E Guittard 81% chocolate frosting.",250,"./assets/img/cakes/gourmand/gourmand-full.jpg","./assets/img/cakes/gourmand/gourmand-slice.jpg",1));
cakeHouseList.push( new CakesHouse ("RED VELVET CAKE",6,"Our rich red velvet chocolate cake layered and topped with cream cheese icing.",400,"./assets/img/cakes/red velvet/redvelve-full.jpg","./assets/img/cakes/red velvet/redvelve-slice.jpg",1));
cakeHouseList.push( new CakesHouse ("CARROT CAKE",7,"Carrot Cake studded with pineapple, raisins and walnuts — then layered and topped with cream cheese icing. (It counts as a serving of veggies!).",350,"./assets/img/cakes/carrot/carrot-full.jpeg","./assets/img/cakes/carrot/carrot-slice.jpeg",1));
cakeHouseList.push( new CakesHouse ("LEMON PASSIONFRUIT CAKE",8,"Our classic vanilla chiffon cake layered with lemon whipped cream and then topped with passionfruit buttercream in our signature ombre design. Need to Build Your Own Cake?.",220,"./assets/img/cakes/lemon/lemon-full.jpg","./assets/img/cakes/lemon/lemon-slice.jpg",1));
cakeHouseList.push( new CakesHouse ("NE -O COOKIE CAKE",9,"Our rich devil’s food cake layered with a filling that tastes just like your favorite childhood cookie and topped with whipped cream and mini oreos.",300,"./assets/img/cakes/ne-o cookie/neo-full.jpg","./assets/img/cakes/ne-o cookie/neo-slice.jpeg",1));

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
cakeBaseList.push( new CakesIngredients ("Cacao Intense",5,1,"Intense cocoa cake with a pinch of salt.",300));
cakeBaseList.push( new CakesIngredients ("Vanilla",6,1,"Simple vanilla sponge cake.",200));

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

myCakeIngredients.push( new MyCakeIngredientInfo (" ",0,0,));
myCakeIngredients.push( new MyCakeIngredientInfo (" ",0,0,));
myCakeIngredients.push( new MyCakeIngredientInfo (" ",0,0,));
myCakeIngredients.push( new MyCakeIngredientInfo (" ",0,0,));
myCakeIngredients.push( new MyCakeIngredientInfo (" ",0,0,));
myCakeIngredients.push( new MyCakeIngredientInfo (" ",0,0,));

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
  const search = cart.find(producto => producto.code == this.id);
  // si no esta el producto en el carro
  if (search == undefined){
    // agrego producto
    cart.push (new CartProduct (add.name, add.code, add.price, add.description, add.quantity));
  } else {
    search.quantity = search.quantity + 1;
  }
  if ("totalPrice" in localStorage) {
    let price = JSON.parse(localStorage.getItem("totalPrice"));
    cartTotalPrice = price + (add.price * add.quantity);
  } else {
    cartTotalPrice = cartTotalPrice + (add.price * add.quantity);
  }
  cartTotal();
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalPrice",JSON.stringify(cartTotalPrice));
  // cargo el producto al render del carrito nav
  cartItems(search);
}

for (const botton of addBottons) {
  botton.addEventListener("click", addToCart);
}

/////////////////////////////////////////////////////////////

// BUILDER

// ACUMULO SELECCIONES DINAMICAMENTE EN CADA CAMBIO DE SELECCION
function cakeBaseSelector (){
  let select = document.getElementById('base').value;
  // Busco opcion seleccionada
  const ingredient = cakeBaseList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[0] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  $("#select-empty-base").remove();

}
function cakeFillingSelector (){
  let select = document.getElementById('filling').value;
  // Busco opcion seleccionada
  const ingredient = cakeFillingList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[1] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  $("#select-empty-filling").remove();
}
function cakeFrostingSelector (){
  let select = document.getElementById('frosting').value;
  // Busco opcion seleccionada
  const ingredient = cakeFrostingList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[2] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  $("#select-empty-frosting").remove();
}
function cakeDecorationSelector (){
  let select = document.getElementById('decoration').value;
  // Busco opcion seleccionada
  const ingredient = cakeDecorationList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[3] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
  $("#select-empty-decoration").remove();
}
function cakeSizeSelector (){
  let select = document.getElementById('size').value;
  // Busco opcion seleccionada
  const ingredient = cakeSizeList.find(product => product.code == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[5] = new MyCakeIngredientInfo (ingredient.name,ingredient.code,ingredient.price);
  $("#select-empty-size").remove();
}
function cakeQuantitySelector (){
  let select = document.getElementById('quantity').value;
  myCakeIngredients[6] = new MyCakeIngredientInfo ("Quantity: " + select,99, select );
}


// ADD TO CART BUILDER BOTON 

const addBottonBuilder = $(".btn-add-cart-builder");

// array con los id de los selectores
const idsSelectors = ["base","filling","frosting","decoration","size"];

// VALIDACION DE SELECTORES VACIOS
function selectEmptyValidaton () {
  for (const select of idsSelectors){
    let selection = "select-empty-" + select;
    if ($("#"+select).val() != "0"){
    $("#"+selection).remove();
  } else {
    let selectorFather = select + "-selector";
    let getIn = document.getElementById("base-selector");
    let message = document.createElement("div");
    message.setAttribute("id",selection);
    message.innerHTML = `<p class="alert-selector-empty">Pleace select an option.</p>`
    getIn.appendChild(message);
    }
  }
}

let cakeBuilderTotalPrice = parseFloat(0);
// funcion para agregar al carrito del boton builder cake
function addToCartBuilder() {
    selectEmptyValidaton();
    // armo el array del producto del carro
    let writeCakeText = $("#writeCakeText").val();
    myCakeIngredients[4] = new MyCakeIngredientInfo ("Write Text: " + writeCakeText , 0, 0 );
    let myCakeDescription =  myCakeIngredients;
    cart.push(new CartProduct("Cake Builder",00,cakeBuilderTotalPrice,myCakeDescription,$("#quantity").val()));
    // Sumo el total al total del carro
    console.log(cart);   
    for (const messege of idsSelectors){
      let msn = "#select-empty-" + messege;
      $(msn).remove(); 
    }
    if ("totalPrice" in localStorage) {
      let price = JSON.parse(localStorage.getItem("totalPrice"));
      cartTotalPrice = price + cakeBuilderTotalPrice;;
    }
    cartTotal()
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice",JSON.stringify(cartTotalPrice));
}

for (const botton of addBottonBuilder) {
  botton.addEventListener("click", addToCartBuilder);
}

// primer append para el carrito del nav
$("#builder-total-price").append(`<p id="total-builder-price" class="total-price-builder";>total: $0</p>`);

// CALCULADOR DE PRECIO DINAMICO
function builderCakePrice () {
  // inicio en el total price en 0
  cakeBuilderTotalPrice = parseFloat(0);
  // itero por todos los ingredientes
  for (const price of myCakeIngredients) {
    // si esta vacio suma todos los ingredientes y los multiplica por la cantidad.
    if (price.price != null) {
      if (price.code == 99){
        cakeBuilderTotalPrice = cakeBuilderTotalPrice * price.price;
      } else {
        cakeBuilderTotalPrice = cakeBuilderTotalPrice + price.price;
      }
    }
  }
  console.log(cakeBuilderTotalPrice);
  // remuevo precio viejo, agrego precio nuevo.
  $("#total-builder-price").remove();
  $("#builder-total-price").append(`<p id="total-builder-price" class="total-price-builder";>total: $${cakeBuilderTotalPrice}</p>`);
}

// defino inicio de carrito del nav
$("#cart-total-price").append(`<p class="total-price">$0</p>`);
// precio total del carrito

function cartTotal() {
  // remuevo precio viejo, agrego precio nuevo.
  $(".total-price").remove();
  $("#cart-total-price").append(`<p class="total-price">$${cartTotalPrice}</p>`);
}

// Botton Reset Builder
function resetBuilder() {
  for (const select of idsSelectors){
    $("#"+select).val() = 0;
  }
}

// SI EXISTE PRODUCTOS EN STORAGES LOS RECARGO

$(document).ready(function(){
  if ("cart" in localStorage) {
    const arrayLiterales = JSON.parse(localStorage.getItem("cart"));
    for (const literal of arrayLiterales){
      // cargo todos los items del storage
      cart.push(new CartProduct(literal.name, literal.code, literal.price, literal.description, literal.quantity)); 
      cartItems(literal);
    }
  }
  if ("totalPrice" in localStorage) {
    let price = JSON.parse(localStorage.getItem("totalPrice"));
    console.log(price);
    $(".total-price").remove();
    $("#cart-total-price").append(`<p class="total-price">$${price}</p>`);
  }
})


// cart nav event
$("#cart-nav-btn").click(function(){
  $("#cart-display").toggle();
});


// CART POPUP FUNCTIONS
function cartItems(item){
  let selector = "#quantity-product-" + item.code;
  console.log(selector);
  let selectorDom = $(selector);
  console.log(selectorDom);
  if (selectorDom != undefined){
    $("#cart-count-table").append(`
    <p id="product-${item.code}"> ${item.name} 
    <span class=" bg-warning">$ ${item.price}</span>
    <span class="quantity-bottons-item" id="quantity-product-${item.code}"> Cantidad: ${item.quantity}</span>
    </p>`)
  }  
}