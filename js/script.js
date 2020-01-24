var ProsesBtn = document.getElementById("PoemsBtn");
var PoemsBtn = document.getElementById("ProsesBtn");
var poems_sec = document.getElementById('poems').offsetTop;
var proses_sec = document.getElementById('proses').offsetTop;

var distination;

setInterval(Update, 1000/3);
document.getElementsByTagName('html')[0].style.opacity = 1;
//Intervals
function Scroll(){
    document.getElementsByTagName('html')[0].scrollTop = lerp(document.getElementsByTagName('html')[0].scrollTop, distination, 0.05) + 1;
}
function Update(){
    if(document.getElementsByTagName('html')[0].scrollTop > 100){
        document.getElementsByClassName('center')[0].style.opacity = 0;
    }
    else{
        document.getElementsByClassName('center')[0].style.opacity = 1;
    }
}

//events...
PoemsBtn.onclick = function(){
    distination = poems_sec;
    
    setInterval(Scroll, 1000/60);
    setTimeout(StopIntervals, 1500);
}
ProsesBtn.onclick = function(){
    distination = proses_sec;
    
    setInterval(Scroll, 1000/60);
    setTimeout(StopIntervals, 1500);
}

function lerp(a, b, t){
    return (1-t)*a+b*t;
}

function StopIntervals(){
    for(let i=0; i<50; i++){
        clearInterval(i);
    }
    setInterval(Update, 1000/3);
}