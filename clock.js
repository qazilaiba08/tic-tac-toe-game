let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector('#msg')

let turnO = true //playerX,playerO

const winPattrens = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
  if(turnO){//playerO
    box.innerHTML = "O";
   turnO = false;
  }else{
    box.innerHTML = "X";
    turnO = true
  }
  box.disabled = true;

  checkWinner();
  }); 
});


const disabledBoxes = () => {
  for(let box of boxes){
   box.disabled = true;
  }
};

const enabledBoxes = () => {
  for(let box of boxes){
   box.disabled = false;
   box.innerHTML = "";
  }
};

const showWinner = (winner) => {
   msg.innerHTML = `Congratulation, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disabledBoxes();
  
}

const checkWinner = () => {
  for(pattren of winPattrens){
    let pos1val = boxes[pattren[0]].innerHTML;
    let pos2val = boxes[pattren[1]].innerHTML;
    let pos3val = boxes[pattren[2]].innerHTML;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val === pos2val && pos2val === pos3val){
        console.log('Winner' , pos1val);
        showWinner(pos1val);
      }
    }
    }
};

newGameBtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);