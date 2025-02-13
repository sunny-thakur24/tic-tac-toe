let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#re-btn");
let newgame = document.querySelector(".n-game");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,5,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = ()=>{
    turnO = true;
    enableboxes()
    msg_container.classList.add("hide")

}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            box.style.color="red"
            turnO = false;
        }
        else{
            box.innerText = "X"
            box.style.color="blue"
            turnO = true;
        }
        box.disabled = true
        checkwinner()

    })
})
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner)=>{
    msg.innerText =`congratulations, winner is ${winner}`
    msg_container.classList.remove("hide")
    disableboxes()

}
const checkwinner = ()=>{
    for (let pattern of winningpattern) {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val != ""&& pos2val != ""&& pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val)
            }
        }
    }
    
}
newgame.addEventListener("click", resetgame) 
resetbtn.addEventListener("click", resetgame) 