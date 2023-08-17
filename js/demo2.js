var arr =  []; // khai báo 1 array // vị trí các phần tử theo thứ tự: 0 1 2 3 4...
// arr[0] = 15;
// arr[1] = "hello";
// arr[2] = 30;

for(var i=0;i<10;i++){
    // arr[i] = prompt("Nhập giá trị cho phần tử "+i);
    var x = prompt("Nhập giá trị cho phần tử "+i);
    arr.push(x);
}

//console.log("Mảng arr có số lượng: "+ arr.length);

// nhập vào 1 mảng 10 số, tìm số lớn nhất trong mảng vừa nhập
var max = arr[0];
var min = arr[0];
for(var i=1;i< arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i]<min){
        min = arr[i];
    }
}
alert("Gia tri lớn nhất: "+max);

for(var i=0;i<arr.length;i++){ // for
    // arr[i]
}

arr.map((e,i)=>{ // foreach
    // e
});

arr.sort();  // sap xep mang theo thứ tự từ bé đến lớn.

x = 15;

arr.includes(x); // kiểm tra xem trong mảng có giá trị x hay không?
if(arr.includes(x)){
    alert("trong mảng có giá trị "+x);
}

// Lucky number
// Tạo ra 1 số ngẫu nhiên sẽ là con số của giair thưởng trong khoảng 0 ->99
// Cho người dùng nhập 5 số trong khoảng 0-> 99, đảm bảo là không được nhập
// trùng số đã nhập (nhập 5 số khác nhau) => nên sử dụng mảng để đưa giá trị vừa nhập vào 
// Kiểm tra xem có trúng giải hay không?
var winner = parseInt(Math.random() * 100);
var luckyNumbers = [];
do{
    var x = prompt("Nhap 1 gia tri tu 0 -> 99:");
    x = parseInt(x);
    if(x >=0 && x<=99 && !luckyNumbers.includes(x)){
        luckyNumbers.push(x);
    }
}while(luckyNumbers.length < 5);

var check = false;// gỉa sử chưa trúng giải
for(var i=0;i<luckyNumbers.length;i++){
    if(luckyNumbers[i] == winner){
        alert("Chuc mung ban da trung giai thuong");
        check = true;
        break;
    }
}

if(check == false){
    alert("Chuc ban may man lan sau");
}

// VIETLOT  1 2 3 4 5  --- 5 1 2 3 4
// người chơi sẽ mua 5 số khác nhau từ 0 -> 45
// hệ thống sẽ ngẫu nhiên sinh ra 5 số khác nhau từ 0 -> 45
// Đối chiếu 5 số người chơi chọn với bộ 5 số ngẫu nhiên kia
// Không nhất thiết phải đúng thứ tự
// Nếu trùng 3/5 số: 10 Triệu
// Nếu trùng 4/5 số: 100 triệu
// Trung 5/5 số: Jackpot
var chooses = [];// mang 5 so khac nhau nguoi choi lua chon
var randoms = [];// mang 5 so khac nhau ngau nhien

// nhap 5 so khac nhau trong khoang [0,45]
while(chooses.length<5){
    // nhap 1 so tu 0 -> 45
    var c = prompt("Nhập 1 số từ 0->45:"); //5 => "5"
    c = parseInt(c);//5 + 1 => 6   "5"+1 => "51"
    if(c>=0 && c<=45){ // 0 <=c<=45
        chooses.push(c);
    }
}
// tao ngau nhien 5 so khac nhau trong khoan [0,45]
while(randoms.length<5){
    var r = Math.random()*46;// sinh ra 1 so thuc 34.523434
    r = parseInt(r);// 34
    // if(r>=0&&r<=45){
        randoms.push(r);
    // }
}
// So sanh 2 bộ số
var count_lucky = 0;// đếm số trùng trong giải thưởng
// 12 33 41 9 22
for(var i=0;i<chooses.length;i++){
    if(randoms.includes(chooses[i])){
        count_lucky++;
    }
}
if(count_lucky==3){
    alert("Chúc mừng bạn đã trúng 10 triệu");
}else if(count_lucky==4){
    alert("Chúc mừng bạn đã trúng 100 triệu");
}else if(count_lucky==5){
    alert("Chúc mừng bạn đã trúng Jackpot");
}else{
    alert("Chúc bạn may mắn lần sau");
}