let boxs=document.querySelectorAll(".box");
let rebut=document.querySelector("#restart");
let newbut=document.querySelector("#newgame");
let win_mge=document.querySelector("#mag-winer");
let mge_continer=document.querySelector(".mag-continer");

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

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    mge_continer.classList.add("hide");
}
 
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        wincheck();
        checkDraw();
        
        // drowchack();
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
    mge_continer.classList.remove("hide");
};

const draw=()=>{
    win_mge.innerText=`Match is Draw`;
    disableBoxes();
    mge_continer.classList.remove("hide");
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

// boxs.forEach((box) => {
//     box.addEventListener("click", () => {
//         box.style.transform = "translateZ(100px)";
//     });
// });