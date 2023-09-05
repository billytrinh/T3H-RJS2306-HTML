var url = `https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
// https:// | http://  - proxy
// api.openweathermap.org  --- domain
// /data/2.5/forecast   --- path string (route)
// ?q=...&appid=... - ---  parameters - tham số.( giups truyền đạt mong muốn của người dùng lên api)
fetch(url)
.then(data=>data.json())
.then(data=>{
    var list = data.list;
    var ls = document.getElementById("list");
    ls.innerHTML = "";
    for(var i=0;i<list.length;i++){
        var icon = list[i].weather[0].icon;
        var desc = list[i].weather[0].description;
        var item = `<div class="col-3 mb-3 mt-3">
                    <div class="card">
                        <h4>${list[i].dt_txt}</h4>
                        <h3>${list[i].main.temp}<sup>o</sup>C</h3>
                        <p>${desc}</p>
                        <img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>
                    </div>
                </div>`;
        
        ls.innerHTML += item;         
    }
});