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
                    <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>`;
        var list = document.getElementById("list");
        list.innerHTML = list.innerHTML + item;    
    }
})
