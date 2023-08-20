console.log("Welcome to Tic Tac Toe");

let turnMusic = new Audio("game-notification.wav");
let gameOverMusic = new Audio("retro-game-over.wav");

let turn  = "X";
let isGameOver = false;

//func to change turn
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}

//func to check for a win
const isWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins =[
        [0, 1, 2],
        [3, 4 , 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info-span').innerText = boxtext[e[0]].innerText + " Won!";
            isGameOver = true;
            document.querySelector('.imagebox').getElementsByClassName('game-over-img')[0].style.width = "300px";
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',() => {
        if(boxtext.innerText === ''){
            boxtext.innerText =  turn;
            turn = changeTurn();
            turnMusic.play();
            isWin();
            if(!isGameOver){
                document.getElementsByClassName('info-span')[0].innerText = "Turn for "+ turn;
            }
        }
    })

})