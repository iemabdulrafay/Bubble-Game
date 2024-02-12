var timer = 60;
var score = 0;
var pressram = 0;
var clinknber = 0;

function makeBubble(){
    var babal = "";


for(var i = 1; i<127; i++){
   var rdm = Math.floor(Math.random() *10);
   babal += `<div class="bubble">${rdm}</div>` ;

}

document.querySelector("#pbtm").innerHTML = babal;
}
makeBubble()

// timmer 
 function runTimer() {
    var stoptimer = setInterval (function () {
        if (timer > 0) {
            timer --;
        document.querySelector("#timerval"). textContent = timer;
        }                
        else{
            clearInterval(stoptimer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over </h1>`;
        }
        
    }, 1000);
 }
 runTimer()


//  For Press Key
function getNewPress() {
    pressram = Math.floor(Math.random()*10);
    document.querySelector("#pressval"). textContent = pressram;

}
getNewPress()

// score addition process
function increaseScore() {
    
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    
}

// work on event bubbling

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    // console.log(Number(dets.target.textContent));
    var clinknber = Number(dets.target.textContent);
    if(clinknber === pressram){
        increaseScore()
        makeBubble()
        getNewPress()
    }
    
})


