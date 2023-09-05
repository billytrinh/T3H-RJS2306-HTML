// LOGIC: JS -> có thuật toán -> có 1 sự sắp xếp các lệnh để đạt được 1 mục đích công việc
// Ko LOGIC: HTML CSS XML FXML CSV JSON -> có gì thì hiện nấy (ko thuật toán)

// Javascript - JS
// Ngôn ngữ hướng kịch bản -> script được nhúng vào html để thực thi

// Loại dữ liệu sử dụng (number, string, true/false)
// Mở rộng: Array [], Object {}
// Cú pháp: for, while ..., function

// tính chu vi tam giác khi biết độ dài 3 cạnh
function chuvi(a,b,c){
    var cv = a + b +c ;
    return cv;
}
// tính diện tích tam giác khi biết độ dài 3 cạnh
function dientich(a,b,c){
    // heron S = can bac 2 (nua chu vi *  (nua chu vi - a) * (ncv -b)* (ncv-c))
    var cv2 = chuvi(a,b,c)/2;
    var S = Math.sqrt(cv2*(cv2-a)*(cv2-b)*(cv2-c));
    return S;
}

// alert("")
// prompt();
// console.log("Xin chao cac ban");
var tt = document.getElementById("tit");
tt.innerText = "Xin chào các bạn";
tt.innerHTML = "<i>Xin chào các bạn</i>";
tt.style.color = "red";
// typescript -> js 

// event -> người dùng phần mềm tác động vào giao diện
// phân mềm sẽ sinh ra các sự kiện tương ứng
// => nhận diện xem người dùng muốn gì?

// event
// click
// mouse enter
// mouse leave

// key up
// key down
// key press
// change

// call api
// web api: url + json -> string json
// chuyển đổi về object json
// sử dụng: object {} hoặc Array []
function getNumber(e){
//   var no = document.getElementById("no1");
  var v = e.value;
  console.log(v);  
}

function getNumber2(){
    var no = document.getElementById("no2");
    var v = no.value;
    console.log(v);  
}
// this -> đối tượng ngầm định bên trong
// https://dummyjson.com/products/search?q=iphone

function find(){
    var s = document.getElementById("search");
    var v = s.value;
    getProducts(v);
}

function getProducts(q){
    var url = `https://dummyjson.com/products/search?q=${q}`;
    
}