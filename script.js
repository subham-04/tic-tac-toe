let music = new Audio("./music.mp3");
let audioTurn = new Audio("./ting.mp3");
let gameover = new Audio("./gameover.mp3");
let resetAudio = new Audio("./game-flute-bonus-2313.wav");
let groupApplause = new Audio("./small-group-applause-523.wav");
let click = new Audio("./click.wav");


let turn = "X";
let isgameover = false;

//Function to change turn 
const changeTurn=()=>{
    return turn === "X"?"0":"X";
}

//Function to check win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext')
    
        console.log(boxtexts);
    
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach((e)=>{
        if(( boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=='')){
            document.querySelector('.info').innerText= boxtexts[e[0]].innerText+' Won';
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '15rem';
            groupApplause.play()
        }
    })
}


//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            click.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }
        }
    })
})


// Reset game logic
let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach((element)=>{
        element.innerText = "";
    })
    resetAudio.play()
    turn = "X"
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0';

    
})


