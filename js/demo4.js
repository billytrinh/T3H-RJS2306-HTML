var n = 0;

function changeX(){ // khai báo hàm
    n++;
    var h1x = document.getElementById("number");
    h1x.innerText = n;
}
//changeX();// thực thi hàm có tên là changeX
//changeX();// thực thi hàm có tên là changeX
//changeX();// thực thi hàm có tên là changeX

// event -  là việc người dùng thao tác trên giao diện

// Yêu cầu
// click vào button để làm xoay tròn 1 phần tử thanh
// var p = 0 
// sử dụng style.transform = "rotate(...)"
var deg = 0;
function changeBox(){
    deg = deg+45;
    var box = document.getElementById("box");
    box.style.transform = "rotate("+deg+"deg)";
}

var x = 100;
function downX(){
    var s = setInterval(function(){
        x--;
        var h1x = document.getElementById("number");
        h1x.innerText = x;
        if(x<=0){
            clearInterval(s);
        }
    },100);// cứ mỗi 1000 milisecond nó chạy 1 lần
}
// đếm ngược thời gian
// khi nhấn vaò nút start -> đếm 
// ngược thời gian về 00:00
var min = 10;
var sec=0;
function timerCountDown(){
    var t = setInterval(function(){
        var m = document.getElementById("min");
        m.innerText = min>=10?min:"0"+min;// toán tử 3 ngôi
        /*
        if(min>=10){
            m.innerText = min;
        }else{
            m.innerText = "0"+min
        }
        */
        var s = document.getElementById("sec");
        s.innerText = sec>=10?sec:"0"+sec;
        sec--;
        if(sec<0){
            sec=59;
            min--;
        }
        if(min<0){
            clearInterval(t);
        }
    },1000);
}