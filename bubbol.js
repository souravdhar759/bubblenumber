var hrn;

function makebubbol(){
    var cule="";
    for (let i = 1; i <235; i++) {
        var rnum = Math.floor(Math.random()*10);
        cule += `<div class="bubbol">${rnum}</div>`;
        
    }
    document.querySelector("#panelbottom").innerHTML=cule;
}
var Timer= 60;
function runTimer(){
    var savetimer=setInterval(() => {
        if(Timer>0){
            Timer--;
            document.querySelector("#timerinter").textContent=Timer;   
        }
        else{
            clearInterval(savetimer);
            document.querySelector("#panelbottom").innerHTML=`<h1>Game Over</h1>`;

        }
       
    }, 1000);
}
 
function gethit(params) {
    hrn = Math.floor(Math.random()*10);
    document.querySelector("#hitwhere").textContent=hrn;
}
 
var socor_run =0;

function hiso(){
    socor_run += 10;
document.querySelector("#scoreinterval").textContent=socor_run;
}

document.querySelector("#panelbottom").addEventListener("click",function(mut){
   var clicknumber= Number(mut.target.textContent);
   if(clicknumber===hrn){
    runTimer();
    makebubbol();
    gethit();
    hiso();
   }
});

runTimer();
makebubbol();
gethit();
