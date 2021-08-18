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
    this.code = code,
    this.description = description;
  }
}
const categoryProductList = [];
const cakeBaseList = [];
const cakeFillingList = [];
const cakeFrostingList = [];
const cakeDecorationList = [];
const cakeHouseList = [];
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

cakeFrostingList.push( new CakesIngredients ("White Buttercream",6,2,"White Buttercream.",250));
cakeFrostingList.push( new CakesIngredients ("Chocolate Buttercream",6,2,"Chocolate Buttercream.",250));
cakeFrostingList.push( new CakesIngredients ("Burnt Salted Caramel Buttercream",6,2,"Burnt Salted Caramel Buttercream.",250));
cakeFrostingList.push( new CakesIngredients ("Cream Cheese Frosting",6,2,"Cream Cheese Frosting.",250));
cakeFrostingList.push( new CakesIngredients ("Dark Chocolate ganache",6,2,"Dark Chocolate ganache.",250));
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


console.dir(cakeHouseList);

// SELECCION DE CONTENEDOR DE CARDS
const productList = document.getElementById('products-list');
console.dir(productList);

// GENERADOR DE CARDS AUTOMATICO
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
      <button type="button" class="btn btn-outline-primary product-links">Add to cart</button>
    </div>`;
  productList.appendChild(card);
}

// METODO 2 DE GENERAR HTML 

// cakeHouseList.forEach((producto)=>{

// // Estructura de la card

//         // <div class="col-md-6 col-sm-6 col-lg-3">
//         //   <div class="product-grid">
//         //     <div class="product-image">
//         //         <a href="#" class="image">
//         //             <img class="pic-1" src="./assets/img/cakes/birtday/birthday-full.jpeg">
//         //             <img class="pic-2" src="./assets/img/cakes/birtday/birthday-slice.jpeg">
//         //         </a>
//         //     </div>
//         //     <div class="product-content">
//         //         <h3 class="title">
//         //             <a href="#">Birthday</a>
//         //         </h3>
//         //         <div class="price">$75.99</div>
//         //         <ul class="product-links">
//         //             <li><a href="">Add to Cart</a></li>
//         //             <li><a href=""><i class="fa fa-eye"></i></a></li>
//         //             <li><a href=""><i class="far fa-heart"></i></a></li>
//         //         </ul>
//         //     </div>
//         //   </div>
//         // </div>

//   let colum = document.createElement('div');
//   colum.setAttribute("class", "col-md-6 col-sm-6 col-lg-3");

//   let productGrid = document.createElement('div');
//   productGrid.setAttribute("class", "product-grid");
//   colum.appendChild(productGrid);

//   let productImage = document.createElement('div');
//   productImage.setAttribute("class", "product-image");
//   productGrid.appendChild(productImage);

//   let image = document.createElement('a');
//   image.setAttribute("class", "image");
//   image.setAttribute("href", "#");
//   productImage.appendChild(image);

//   let imageFirst = document.createElement('img');
//   imageFirst.setAttribute("class", "pic-1");
//   imageFirst.setAttribute("src", `${producto.image1}`);
//   image.appendChild(imageFirst);

//   let imageSecond = document.createElement('img');
//   imageSecond.setAttribute("class", "pic-2");
//   imageSecond.setAttribute("src", `${producto.image2}`);
//   image.appendChild(imageSecond);

//   let productContent = document.createElement('div');
//   productContent.setAttribute("class", "product-content");
//   colum.appendChild(productContent);

//   let title = document.createElement('h3');
//   title.setAttribute("class", "title");
//   productContent.appendChild(title);

//   let titleLink = document.createElement('a');
//   titleLink.setAttribute("href", "#");
//   titleLink.textContent = `${producto.name}`;
//   title.appendChild(titleLink);

//   let price = document.createElement('div');
//   price.setAttribute("class", "price");
//   price.textContent = `${producto.price}`;
//   productContent.appendChild(price);

//   let productLinks = document.createElement('ul');
//   productLinks.setAttribute("class", "product-links");
//   productContent.appendChild(productLinks);

//   let add = document.createElement('li');
//   productLinks.appendChild(add);

//   let addLink = document.createElement('a');
//   addLink.setAttribute("href", "#");
//   addLink.textContent = "Add to cart";

//   productList.appendChild(colum);

// })

