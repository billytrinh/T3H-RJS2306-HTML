

// string json - string định đạng dữ liệu loại json
// var data = ``;
// b1 - chuyển nó về  object (object json) trong js 
// data = JSON.parse(data);

// call api  
function weather(ct){
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url) // call api
    .then(data=>data.json()) // b1 - chuyển nó về  object (object json) trong js 
    .then(   // b2 - lấy ra đúng các thông tin bên trong cần sử dụng
        data=>{
            var tp = data.main.temp;
            var t = document.getElementById("temp");
            t.innerText = tp;
            document.getElementById("humd").innerText = data.main.humidity
            document.getElementById("press").innerText = data.main.pressure
            document.getElementById("city").innerText = data.name+" ,"+data.sys.country;
            document.getElementById("des").innerText = data.weather[0].description;
            document.getElementById("imgx").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        }
    )
}
weather("hanoi");
function find(){
    // chặn việc form gửi nội dung đi
    event.preventDefault();
    var txtcity = document.getElementById("txtcity");
    var v = txtcity.value;
    weather(v);
}



/// Demo 2
// https://dummyjson.com/products/1
// var json2 = ``;

// var json3 = JSON.parse(json2);
// document.getElementById("img2").src = json3.thumbnail;
// document.getElementById("tt").innerText = json3.title;
// var mangimages = json3.images; //. 1 mang cac link anh
// var xyz = "";
// for(var i=0;i<mangimages.length;i++){
//      xyz = xyz +  `<img width="80" src="${mangimages[i]}" />`;
// }
// document.getElementById("imglist").innerHTML = xyz;

// https://dummyjson.com/products?limit=8
// Xây dựng 1 trang danh sách sản phẩm từ api trên