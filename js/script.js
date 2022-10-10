


//Define products
let productDome = document.querySelector(".products");
let cart_productDom = document.querySelector(".carts-product div");
let cart_product_menu = document.querySelector(".carts-product");
let padge_Dom = document.querySelector(".padge");
let shopping_cart_icon = document.querySelector(".shopping-cart");

let products = [{
    id: 1,
    title: "heade phone item",
    size: "lar",
    imageUrl: "image/1.jpg",
},
{
    id: 2,
    title: "lab item",
    size: "small",
    imageUrl: "image/2.jpg",
},
{
    id: 3,
    title: "watch item",
    size: "medium",
    imageUrl: "image/3.jpg",
},
{
    id: 4,
    title: "glasess item",
    size: "large",
    imageUrl: "image/4.jpg",
}
];




function draw_product_UI(){
    let productsUi = products.map((item) => {
        return`
        <div class="product-item">
                    <img src="${item.imageUrl}" class="product-item-img" alt="image">
                    <div class="product-item-desc">
                        <h2>${item.title} </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <span>size: ${item.size}</span>

                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart </button>
                        <i class="favourite fa-regular fa-heart"></i> 
                        
                    </div>
                </div>
        `
    });
    productDome.innerHTML = productsUi;
};
draw_product_UI();


let addedItem = localStorage.getItem("product-in-cart") ? JSON.parse(localStorage.getItem("product_in_cart")) : [];


function addedToCart(id){
    if(localStorage.getItem("userName")){
        let chosenItem = products.find((item) => item.id === id);

        cart_productDom.innerHTML += `<p>${chosenItem.title}</p>`;
        addedItem = [...addedItem , chosenItem];
        localStorage.setItem("product-in-cart",JSON.stringify(addedItem))
    let cartproducts_lengh = document.querySelectorAll(".carts-product div p");
        padge_Dom.style.display = "block";
        padge_Dom.innerHTML = cartproducts_lengh.length;
    }else{
        window.location = "login.html"
    }
}



function open_cart_menu(){
   if(cart_productDom.innerHTML != ""){
    if( cart_product_menu.style.display == "block"){
        cart_product_menu.style.display = "none";
    }else{
        cart_product_menu.style.display = "block";
    }
   }
}

shopping_cart_icon.addEventListener("click",open_cart_menu);

