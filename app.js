let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// start a game
document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
});


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random Button for flash
    let ranIdx = Math.floor(Math.random() * 3);
    let ranCol = btns[ranIdx];
    let randbtn = document.querySelector(`.${ranCol}`);

    // console.log(ranIdx);
    // console.log(ranCol);
    // console.log(randbtn);

    gameSeq.push(ranCol);
    console.log(gameSeq);

    btnFlash(randbtn);
}


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function checkAns(idx){
    // console.log("Curr level", level);

    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game over! your score was ${level}<br><br> press any key to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() =>{
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function buttonPress(){
     let btn = this;
     userFlash(btn);

     let userCol = btn.getAttribute("id");
     userSeq.push(userCol);
     checkAns(userSeq.length-1);
}

 let btnsPress = document.querySelectorAll(".btn");

 for(btn of btnsPress){
    btn.addEventListener("click", buttonPress);
 }


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}