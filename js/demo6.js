function writeName(e){
   var v = e.value;
   var k = e.name;
   var hx = document.getElementById(k);
   hx.innerText = v;
}
// nếu muốn xử lý form hoàn toàn bằng js
function submitForm(event){
    // hàm chặn form di chuyển
    event.preventDefault();
}
// nhập thông tin gồm:
/*
    name
    email
    age
    tel
    address
    country
*/