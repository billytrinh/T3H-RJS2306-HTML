var randoms = [];
while(randoms.length < 5){
    var x = Math.random()*46;
    x = parseInt(x);
    if(!randoms.includes(x)){
        randoms.push(x);
    }
}
console.log(randoms);
function kiemtra(){
    var lucky = [];
    var s1 = document.getElementById("s1").value;
    s1 = parseInt(s1);
    if(s1 >=0 && s1<=45){
        lucky.push(s1);
    }
    var s2 = document.getElementById("s2").value;
    s2 = parseInt(s2);
    if(s2 >=0 && s2<=45 && !lucky.includes(s2)){
        lucky.push(s2);
    }
    var s3 = document.getElementById("s3").value;
    s3 = parseInt(s3);
    if(s3 >=0 && s3<=45 && !lucky.includes(s3)){
        lucky.push(s3);
    }
    var s4 = document.getElementById("s4").value;
    s4 = parseInt(s4);
    if(s4 >=0 && s4<=45 && !lucky.includes(s4)){
        lucky.push(s4);
    }
    var s5 = document.getElementById("s5").value;
    s5 = parseInt(s5);
    if(s5 >=0 && s5<=45 && !lucky.includes(s5)){
        lucky.push(s5);
    }
    if(lucky.length < 5){
        var tb = document.getElementById("thongbao");
        tb.innerText = "Vui lòng chọn 5 giá trị hợp lệ";
        tb.style.color = "red";
    }else{
        var count = 0;
        for(var i=0;i<randoms.length;i++){
            if(lucky.includes(randoms[i])){
                count++;
            }
        }
        var tb = document.getElementById("thongbao");
        if(count == 3){
            tb.innerText = "Chúc mừng bạn đã trúng 3 số";
            tb.style.color = "green";
        }else if(count == 4){
            tb.innerText = "Chúc mừng bạn đã trúng 4 số";
            tb.style.color = "green";
        }else if(count == 5){
            tb.innerText = "Chúc mừng bạn đã trúng jackpot";
            tb.style.color = "green";
        }else{
            tb.innerText = "Chúc bạn may mắn lần sau";
            tb.style.color = "deeppink";
        }
    }
}