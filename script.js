let boxs=document.querySelectorAll(".box");

let rebut=document.querySelector("#restart");
let newbut=document.querySelector("#newgame");
let win_mge=document.querySelector("#mag-winer");
let mge_continer=document.querySelector(".mag-continer");
let main=document.querySelector(".main");
let player=document.querySelector("#play");
let continer=document.querySelector("#continer");
let continerhide=document.querySelector(".hide");

let hidegame=document.querySelectorAll(".gameHide");

let turn0=true;//playerX,PlayerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


const GameHide=()=>{
    hidegame.forEach((el) => {
    el.style.display = "none";
});
};
const GameUnHide=()=>{
    hidegame.forEach((el) => {
    el.style.display = "block";
});
};
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    // mge_continer.classList.add("hide");
    continerhide.style.display="none"
    player.innerText="O";
    GameUnHide();
    
}
 
 
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            player.innerText="X";
            turn0=false;
            
        }
        else{
            box.innerText="X";
            player.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        wincheck();
        checkDraw();
    });
});

const disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};
const winer=(win)=>{
    win_mge.innerText=`You are Winer ${win}`;
    disableBoxes();
    continerhide.style.display="block"
    GameHide();
    
};

const draw=()=>{
    win_mge.innerText=`Match is Draw`;
    disableBoxes();
     continerhide.style.display="block"
    GameHide();
};
const checkDraw = () => {
    let isDraw = true;
    boxs.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
         draw();
    }
};

const wincheck =()=>{
     
    for(let pattern of winPatterns)
    {

        let pos1val =boxs[pattern[0]].innerText;
        let pos2val =boxs[pattern[1]].innerText;
        let pos3val =boxs[pattern[2]].innerText;

        if(pos1val !==""&& pos2val !==""&&pos3val !==""){
            if(pos1val===pos2val&&pos2val===pos3val){    
                winer(pos1val);
                 
            }
            
        } 
    }
    
    
};

newbut.addEventListener("click",resetGame);
rebut.addEventListener("click",resetGame);

 //play button
 
 continer.addEventListener("mousemove", (e)=>{
  let rect = continer.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  player.style.left = (x - 30) + "px";
  player.style.top = (y - 30) + "px";
});
continer.addEventListener("mouseenter", () => {
  player.style.opacity = "1";
   
});

continer.addEventListener("mouseleave", () => {
  player.style.opacity = "0";
});