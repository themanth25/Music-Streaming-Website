
var a=document.createElement("AUDIO");
var j;
var data;



function fun2(con,dt){
var track = con;
    j = con;
    data = dt;
var obj;
var o;
var s_name;
var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 || xhr.status == 200){
          obj = JSON.parse(xhr.responseText);
            o = obj.urlp[con];
            console.log(o);
            a.setAttribute("src",o);
            s_name = obj.name[con];
            a.play();
            document.getElementById("song_name").innerHTML = s_name;
            var pl=document.getElementById("play_button");
            var pau = document.getElementById("pause_button");
            pl.style.display="none";
            pau.style.display="block";
            pl.onclick = function(){
                a.play()
                document.getElementById("play_button").style.display="none";
                document.getElementById("pause_button").style.display="block";
            }
            pau.onclick = function(){
                a.pause();
                document.getElementById("play_button").style.display="block";
                document.getElementById("pause_button").style.display="none";
            }
            
            var slide = document.getElementById("ran");
slide.oninput = function(){
            var t = this.value;
            a.volume = t/100;
        }
            
a.addEventListener("timeupdate", function(event){
    var currentMinute, CurrentSecond, totalMinutes, totalSeconds;
    currentMinute = Math.floor((a.currentTime / 60));
    totalMinutes = Math.floor((a.duration / 60));
    CurrentSecond = Math.floor((a.currentTime % 60));
    totalSeconds = Math.floor((a.duration % 60));
    var curT = currentMinute + ":" + CurrentSecond;
    var totalT = totalMinutes + ":" + totalSeconds;
    document.getElementById("tim").innerHTML=curT;
    document.getElementById("tim2").innerHTML=totalT;
});
            var p = document.getElementById("progress_bar");
var pr = document.getElementById("progress");
         a.addEventListener("timeupdate",function(event){
p.style.width = ((a.currentTime / a.duration)*100) + "%";
});

pr.addEventListener("mousedown",function(event){
var clic = event.clientX - pr.offsetLeft;
a.currentTime = (clic / pr.offsetWidth)*a.duration;
},false);
        }

    };
        xhr.open("GET",dt,true);
        xhr.send();

    
}



