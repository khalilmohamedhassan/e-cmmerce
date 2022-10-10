let products_in_carts = localStorage.getItem("product-in-cart");
let productDome = document.querySelector(".products");


if(products_in_carts){
    let items = JSON.parse(products_in_carts)
    draw_cart_product_UI(items)

}

function draw_cart_product_UI(products){
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
                        <button class="add-to-cart" onclick="removefromcart(${item.id})">Remove From Cart</button>
                        
                    </div>
                </div>
        `
    });
    productDome.innerHTML = productsUi;
};