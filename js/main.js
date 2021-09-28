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


const cart = [];
const myCakeIngredients = [];



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
// //Declaramos la url que vamos a usar para el GET
const cakeHouseList = [];
const CAKEHOUSELISTDATA = "json/homeCakes.JSON"
let productos = [];
$.get(CAKEHOUSELISTDATA, function (respuesta, estado) {
      if(estado === "success"){
        for (const producto of respuesta) {
          cakeHouseList.push( new CakesHouse (producto.name, producto.code, producto.description, producto.price, producto.image1, producto.image2,producto.quantity));
          productos = respuesta;
          let card = document.createElement("div");
          card.setAttribute("class", "col-md-6 col-sm-6 col-lg-4");
          card.innerHTML =`
            <div class="product-grid">
              <div class="product-image">
                  <div class="view-element">
                    <button type="button" class="btn btn-primary btn-viewmore" data-bs-toggle="modal" data-bs-target="#modal-${producto.code}">VIEW MORE</button>
                    <div class="image">
                      <img class="pic-1" src="${producto.image1}">
                      <img class="pic-2" src="${producto.image2}">
                    </div>
                  </div>
              </div>
            <div class="product-content">
              <h3 class="title">${producto.name}
              </h3>
              <div class="price">$${producto.price}</div>
              <button type="button" id="btn-add-${producto.code}" class="btn btn-outline-primary product-links btn-add-cart">Add to cart</button>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="modal-${producto.code}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-products">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${producto.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body product-modal">
                    <div class="product-image-modal">
                      <img class="product-image-modal__mod" src="${producto.image1}">
                    </div>
                    <div class="product-description-modal">
                      <p>${producto.description}</p>
                      <p><b>Price:</b> $${producto.price}</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="btn-add-${producto.code}-modal" type="button" class="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- MODAL END -->`;
          productList.appendChild(card);
        }
      }
}).done(()=>{
  for(const prod of productos){
    let prodCode = prod.code;
    $("#btn-add-"+prod.code).click(function(){addToCart(prodCode)});
    $("#btn-add-"+prod.code+"-modal").click(function(){addToCart(prodCode)});
  }
})

////////////////////////////////////////////////////////////////////

// LLENAR OPCIONES DEL FORMULARIO MAKE YOUR CAKE

// CAKE BASE
const CAKEBASELISTDATA = "json/cakeBaseList.JSON";
const cakeBaseList = [];
const baseList = document.getElementById('base');
$.get(CAKEBASELISTDATA, function (respuesta, estado) {
      if(estado === "success"){
        console.log(respuesta)
        for (const producto of respuesta) {
          cakeBaseList.push(new CakesIngredients (producto.name, producto.productCode, producto.category,producto.description, producto.price));
          let listElement = document.createElement("option");
          listElement.setAttribute("class", "selection-style");
          listElement.setAttribute("value", `${producto.productCode}`);
          listElement.innerHTML = `${producto.name} ($${producto.price})`;
          baseList.appendChild(listElement);
        }
      }
  });

// CAKE FILLINGS
const CAKEFILLINGLISTDATA = "json/cakeFillingList.JSON";
const cakeFillingList = [];
const fillingList = document.getElementById('filling');
$.get(CAKEFILLINGLISTDATA, function (respuesta, estado) {
  if(estado === "success"){
    console.log(respuesta)
    for (const producto of respuesta) {
      cakeFillingList.push(new CakesIngredients (producto.name, producto.productCode, producto.category,producto.description, producto.price));
      let listElement = document.createElement("option");
      listElement.setAttribute("class", "selection-style");
      listElement.setAttribute("value", `${producto.productCode}`);
      listElement.innerHTML = `${producto.name} ($${producto.price})`;
      fillingList.appendChild(listElement);
    }
  }
});


// CAKE FROSTINGS
const CAKEFROSTINGLISTDATA = "json/cakeFrostList.JSON";
const cakeFrostingList = [];
const frostingList = document.getElementById('frosting');
$.get(CAKEFROSTINGLISTDATA, function (respuesta, estado) {
  if(estado === "success"){
    console.log(respuesta)
    for (const producto of respuesta) {
      cakeFrostingList.push(new CakesIngredients (producto.name, producto.productCode, producto.category,producto.description, producto.price));
      let listElement = document.createElement("option");
      listElement.setAttribute("class", "selection-style");
      listElement.setAttribute("value", `${producto.productCode}`);
      listElement.innerHTML = `${producto.name} ($${producto.price})`;
      frostingList.appendChild(listElement);
    }
  }
});

// CAKE DECORATION
const decorationList = document.getElementById('decoration');
const CAKEDECORATIONLISTDATA = "json/cakeFrostList.JSON";
const cakeDecorationList = [];
$.get(CAKEDECORATIONLISTDATA, function (respuesta, estado) {
  if(estado === "success"){
    console.log(respuesta)
    for (const producto of respuesta) {
      cakeDecorationList.push(new CakesIngredients (producto.name, producto.productCode, producto.category,producto.description, producto.price));
      let listElement = document.createElement("option");
      listElement.setAttribute("class", "selection-style");
      listElement.setAttribute("value", `${producto.productCode}`);
      listElement.innerHTML = `${producto.name} ($${producto.price})`;
      decorationList.appendChild(listElement);
    }
  }
});

// CAKE SIZE
const SizesList = document.getElementById('size');
const CAKESIZELISTDATA = "json/cakeSizeList.JSON";
const cakeSizeList = [];
$.get(CAKESIZELISTDATA, function (respuesta, estado) {
  if(estado === "success"){
    console.log(respuesta)
    for (const producto of respuesta) {
      cakeSizeList.push(new SizeList (producto.name, producto.code, producto.price));
      let listElement = document.createElement("option");
      listElement.setAttribute("class", "selection-style");
      listElement.setAttribute("value", `${producto.code}`);
      listElement.innerHTML = `${producto.name} ($${producto.price})`;
      SizesList.appendChild(listElement);
    }
  }
});
/////////////////////////////////////////////////////////////

// CART POPUP FUNCTIONS
function cartItems(item){
  let itemCart = "#item-cart-" + item.code;
  let itemCartDom = $(itemCart);
  $(itemCartDom).remove();
  $("#cart-count-table").append(`
    <div id="item-cart-${item.code}" class="item-product-render">
      <p class="item-product-title" id="product-${item.code}">${item.name} - $${item.price} |</p>
      <div class="item-control-container">
        <p class="quantity-item-text">QUANTITY </p>
        <button class="cart-control-btn" id="btn-rest-${item.code}">-</button>
        <p class="quantity-bottons-item" id="quantity-product-${item.code}">${item.quantity}</p>
        <button class="cart-control-btn" id="btn-add-${item.code}">+</button>
      </div>
      <button class="cart-control-btn" id="btn-delete-${item.code}">x</button>
      </div>
        
        
        
    </div>`)
  $("#btn-add-"+item.code).click(function(){addCantidad(item.code)});
  $("#btn-delete-"+item.code).click(function(){eliminarCarrito(item.code)});
  $("#btn-rest-"+item.code).click(function(){restarCantidad(item.code)});
}

// BTN RESTAR CANTIDAD DE PRODUCTO
function restarCantidad (item){
  const itemSelected = cart.find(producto => producto.code == item);
  let newQuantity = itemSelected.quantity - 1;
  if (newQuantity == 0) {
    $("#item-cart-"+itemSelected.code).remove();
    let positionItem = cart.findIndex(p => p.id == itemSelected.id);
    cart.splice(positionItem, 1);
  }
  itemSelected.quantity = newQuantity;
  $("#quantity-product-"+item).html(`${itemSelected.quantity}`);
  let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  cartTotalPrice = totalPrice - itemSelected.price;
  cartTotal();
  emptyCart();
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalPrice",JSON.stringify(cartTotalPrice));
}

// AGREGO CANTIDAD DE PRODUCTO
function addCantidad (item){
  const itemSelected = cart.find(producto => producto.code == item);
  itemSelected.quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  $("#quantity-product-"+item).html(`${itemSelected.quantity}`);
  let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  cartTotalPrice = totalPrice + itemSelected.price;
  cartTotal();
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalPrice",JSON.stringify(cartTotalPrice));
}

// ELIMINAR PRODUCTO DEL CARRITO
function eliminarCarrito(item) {
  const itemSelected = cart.find(producto => producto.code == item);
  console.log(itemSelected.code);
  let positionItem = cart.findIndex(p => p.code == itemSelected.code);
  console.log(positionItem);
  cart.splice(positionItem, 1);
  $("#item-cart-"+itemSelected.code).remove();
  let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  let totalPriceItem = itemSelected.price * itemSelected.quantity;
  cartTotalPrice = totalPrice - totalPriceItem;
  cartTotal();
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalPrice",JSON.stringify(cartTotalPrice));
  emptyCart();
  btnFinalOrder();
}

function emptyCart() {
  if (cart.length == 0){
    $("#cart-count-table").append(`<div class="cart-empty">EMPTY CART</div>`);
    $(".total-price-containe").remove();
    localStorage.clear();
  } else {
    $(".cart-empty").remove();
  }
}

/////////////////////////////////////////////////////////////

// ADD TO CART BOTON 
let cartTotalPrice = parseFloat(0);
const addBottons = $(".btn-add-cart");

function addToCart(itemCode) {
  const add = cakeHouseList.find(producto => producto.code == itemCode);
  console.log(add);
  const search = cart.find(producto => producto.code == itemCode);
  // si no esta el producto en el carro
  if (search == undefined){
    // agrego producto
    cart.push (new CartProduct(add.name, add.code, add.price, add.description, add.quantity));
    // renderizo el producto nuevo en le carrito
    cartItems(add);
  } else {
    search.quantity = search.quantity + 1;
    // renderizo el producto ya existente con nueva cantidad
    cartItems(search);
  }
  if ("totalPrice" in localStorage) {
    let price = JSON.parse(localStorage.getItem("totalPrice"));
    cartTotalPrice = price + (add.price * add.quantity);
  } else {
    cartTotalPrice = cartTotalPrice + (add.price * add.quantity);
  }
  cartTotal();
  emptyCart();
  btnFinalOrder();
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalPrice",JSON.stringify(cartTotalPrice));
  console.log(cart);
}

for (const botton of addBottons) {
  botton.addEventListener("click", addToCart);
}

/////////////////////////////////////////////////////////////

// BUILDER CAKE

// ACUMULO SELECCIONES DINAMICAMENTE EN CADA CAMBIO DE SELECCION
function cakeBaseSelector (){
  let select = document.getElementById('base').value;
  // Busco opcion seleccionada
  const ingredient = cakeBaseList.find(product => product.productCode == select);
  // Cargo los datos del ingrediente al array
  myCakeIngredients[0] = new MyCakeIngredientInfo (ingredient.name,ingredient.productCode,ingredient.price);
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
let cakeBuilderTotalPrice = parseFloat(0);

// funcion para agregar al carrito del boton builder cake
function addToCartBuilder() {
      const BuilderCakeList = cart.filter(product => product.name == "Cake Builder");
      let newCode = BuilderCakeList.length * 10;
      // armo el array del producto del carro
      let writeCakeText = $("#writeCakeText").val();
      myCakeIngredients[4] = new MyCakeIngredientInfo ("Write Text: " + writeCakeText , 0, 0 );
      let myCakeDescription =  myCakeIngredients;
      cart.push(new CartProduct("Cake Builder",newCode,cakeBuilderTotalPrice,myCakeDescription,$("#quantity").val()));
      // Sumo el total al total del carro 
      let price = JSON.parse(localStorage.getItem("totalPrice"));
      if ("totalPrice" in localStorage) {
        cartTotalPrice = price + cakeBuilderTotalPrice;;
      } else {
        cartTotalPrice = price + cakeBuilderTotalPrice;;
      }
      console.log(cart);
      const newBuild = cart.find(product => product.code == newCode);
      cartItems(newBuild);
      emptyCart();
      btnFinalOrder();
      cartTotal();
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
  $(".total-price-containe").remove();
  $("#cart-total-price-modal").append(`
  <div class="total-price-containe">
  <p class="total-price-cart"><b>TOTAL PRICE:</b> $${cartTotalPrice}</p>
  </div>`);
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
    $(".total-price-cart").remove();
    $("#cart-total-price-modal").append(`
    <div class="total-price-containe">
    <p class="total-price-cart"><b>TOTAL PRICE:</b> $${price}</p>
    </div>`);
  }
  emptyCart();
  btnFinalOrder();
});

// MANEJO DEL BOTON FINALIZAR COMPRA
function btnFinalOrder(){
  if (cart.length == 0){
    $("#final-order-btn").remove();
    $("#delete-cart-btn").remove();
  } else {
      $("#end-order").html(`
      <button type="button" class="delete-cart btn-dark" id="delete-cart-btn" onclick="clearCart()">DELET CART</button>
      <button id="final-order-btn" type="button" class="btn btn-danger btn-finalize" data-bs-toggle="modal" data-bs-target="#finalize-order-btn">CHECK OUT</button>
      `);
    }
}

// LIMPIAR STORE AL ENVIAR EL PEDIDO
$("#success-btn").click(function(){
  localStorage.clear();
  location.reload();
});

function clearCart() {
  localStorage.clear();
  location.reload();
}