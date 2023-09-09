var url = `https://dummyjson.com/products?limit=8`;
fetch(url)
.then(data=>data.json())
.then(data=>{
    var products = data.products;
    for(var i=0;i<products.length;i++){
        var item = `<div class="col-3 mb-3 mt-3">
                <div class="card">
                    <img src="${products[i].thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${products[i].title}</h5>
                    <p class="card-text">${products[i].description}</p>
                    <p>${products[i].price}</p>
                    <button onclick="addToCart(${products[i].id})" class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>`;
        var list = document.getElementById("list");
        list.innerHTML = list.innerHTML + item;    
    }
})
// localstorage -> bộ nhớ của trình duyệt dành cho mỗi website
var storage = localStorage.getItem("cart");
if(storage == null){
    storage = [];
}else{
    storage = JSON.parse(storage);
}
var cart = storage;
document.getElementById("cart_number").innerText = cart.length;

function addToCart(id){
    // kiem tra id đã có trong cart chưa?
    var check = false;
    for(var i=0;i<cart.length;i++){
        if(cart[i].id == id){
            check = true;
            cart[i].buy_qty = cart[i].buy_qty +1;
            localStorage.setItem("cart",JSON.stringify(cart));
            break;
        }
    }
    if(check == false){
        // dùng id để call api lấy chi tiết sản phẩm
        var url = `https://dummyjson.com/products/${id}`;
        fetch(url).then(data=>data.json())
        .then(data=>{
            data.buy_qty = 1;
            cart.push(data);
            document.getElementById("cart_number").innerText = cart.length;
            localStorage.setItem("cart",JSON.stringify(cart));
        })
    }
}