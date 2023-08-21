function demo1(){
    console.log("Demo 1 action");
}
function demo2(){
    console.log("Demo 2 action");
}

function input1(){
    var ipxx = document.getElementById("ipx");
    var v = ipxx.value;
   console.log("input 1..."+v);
}
function input2(){
    var ipxx = document.getElementById("ipx");
    var v = ipxx.value;
    // console.log("input 2..."+v);
    var ctx = document.getElementById("ct");
    ctx.innerText = v;
}
function change1(){
    var slxx = document.getElementById("slx");
    var v= slxx.value;
    console.log(v);
}

var dg = 0;
var speed = 10;
var fanVN;
function fan(){
    fanVN = setInterval(function(){
        var fanX = document.getElementById("fanX");
        dg+= speed;
        fanX.style.transform = "rotate("+dg+"deg)";
    },1);
}
function fan1(){
    speed = 10;
    if(fanVN == null){
        fan();
    }
}
function fan2(){
    speed = 20;
    if(fanVN == null){
        fan();
    }
}
function fan3(){
    speed = 30;
    if(fanVN == null){
        fan();
    }
}
function closeFan(){
    if(fanVN != null){
        clearInterval(fanVN);
    }
}