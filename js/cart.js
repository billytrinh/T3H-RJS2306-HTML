function cart(){
    // localstorage -> bộ nhớ của trình duyệt dành cho mỗi website
    var storage = localStorage.getItem("cart");
    if(storage == null){
        storage = [];
    }else{
        storage = JSON.parse(storage);
    }
    var cart = storage;
    document.getElementById("cart_number").innerText = cart.length;
    var grand_total = 0;
    for(var i=0;i<cart.length;i++){
        var item = `<tr>
                        <td><a onclick="removeItem(${i})" href="#">X</a></td>
                        <td><img src="${cart[i].thumbnail}" width="100" class="img-thumbnail"/></td>
                        <td>${cart[i].title}</td>
                        <td>${cart[i].price}</td>
                        <td>${cart[i].buy_qty}</td>
                        <td>${cart[i].buy_qty * cart[i].price}</td>
                    </tr>`;
        document.getElementById("tbody").innerHTML += item;     
        grand_total += cart[i].buy_qty * cart[i].price ; 
    }
    document.getElementById("grand_total").innerText = grand_total;
}
cart();
function removeItem(vt){
    // remove cart[i]
    localStorage.setItem("cart",JSON.stringify(cart));
}
function clean(){
    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
}