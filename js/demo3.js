// object
var sv = {
  name: "Nguyen Van An",
  age:18,
  tel:"0987654321",
  address:"Ha Noi, Viet Nam"  
}
console.log(sv.name);// sv[0]
sv.name = "Le Quang Truong";
console.log(sv.name);

var tennguoiyeu = prompt("Nhập tên người yêu của bạn");
var diachi = prompt("NHap dia chi");
var dienthoai = prompt("Nhap dien thoai");
setTimeout(function(){
    var nguoirom = document.getElementById("abc");
    // nguoirom.innerText = "Xin chào "+tennguoiyeu;
    nguoirom.innerHTML = "<i>Xin chào "+tennguoiyeu+"</i>";
    nguoirom.style.color = "red";

    var telxx = document.getElementById("tel");
    telxx.innerText = diachi;
    var addressxx = document.getElementById("address");
    addressxx.innerText = dienthoai;
},2000);// milisecond
// Viết chương trình nhập thông tin sinh viên gồm
// Tên
// Ngày sinh
// Email
// Địa chỉ
// Sau đó in ra ngoài giao diện HTML

