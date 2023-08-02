// variable - biến
var x = 10; //  x (biến x)  là 1 ký hiệu mà coder thích đặt gì thì đặt và nó sẽ đại diện cho giá trị đi theo
var y = "hello";
console.log(5+3);// 8
console.log(x);// 10
x = x + 10; // 20
console.log(x);// 20
console.log(y);

if(x > 15){
   // alert("X > 15");
 //  var msg = prompt("Vui lòng nhập số điện thoại");
  // alert(msg+"-"+msg+msg);
   // Đưa ra các ô nhập khác nhau để nhập các thông tin bao gồm: Họ và tên, SĐT, Email, Địa chỉ.
   // Sau đó alert ra tất cả thông tin vừa nhập vào. ( trong 1 alert)
}else{
   // alert("X <= 15");
  // var msg = prompt("Vui lòng nhập địa chỉ?");
}
// console.log(x);
// x=x+1;
// console.log(x);
// x=x+1;
// console.log(x);
// x=x+1;
// console.log(x);
// x=x+1;
// console.log(x);
// x=x+1;

// có 1 số ngẫu nhiên ran trong khoảng 0 -> 99
var ran = parseInt(Math.random()*100); 
// parseInt: vứt bỏ phần thập phân
 for(var i=0;i<10;i++){ // LOOP
   // console.log(i);
  //  i++ // i = i+1; // i =0; (i++)/7  ++i/7
  // i-- // i = i - 1;
    var kq = prompt("Chọn 1 số từ 0 -> 100");
    kq = parseInt(kq);

   // if(kq >=0 && kq <=100){ // kết hợp điều kiện: && ||
        
   // }else{
        
   // }
   // bắt nhập đi nhập lại đến khi nào được giá trị đúng thì thôi
    for( ;kq <0 || kq >100 ; ){
        kq = prompt("Chọn 1 số từ 0 -> 100");
        kq = parseInt(kq);
    }
    if(kq == ran){ // == !=  > < >= <=
        alert("Chúc mừng bạn đã trúng giải!");
        break;
    }else{
        alert("Chúc bạn may mắn lần sau!");
    }
 }

// Sử dụng LOOP để viết chương trình nhập vào 10 số ngẫu nhiên
// Sau đó kiểm tra xem có số nào trúng giải hay không>? Nếu có
// thông báo kết quả.

// nếu xong rồi, thì nâng cấp: người dùng phải nhập đúng số
// trong khoảng 0 -> 100 mới đc tính.

// khi đã trúng giair thì dừng game luôn.

// Viết chương trình nhập vào 1 số tiền muốn gửi ngân hàng,
// nhập vào giá trị % lãi suất theo năm của ngân hàng
// nhập vào số năm muốn gửi.
// Thông báo tổng số tiền cuối cùng nhận được ( Lãi cộng dồn)