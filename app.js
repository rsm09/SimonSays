let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let hs=0;

let h2=document.querySelector('h2');
let h3=document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];
    gameSeq.push(randColor);
    let randbtn=document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
}

function btnPress(){
    userFlash(this);

    userColor = this.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        if(level>hs){
            h3.innerHTML=`High Score is <b>${level}</b`
            hs=level;
        };
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },400);
        reset();
       
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}