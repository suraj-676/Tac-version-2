//console.log('tic tac toe')

// let music = new Audio("mixkit-quick-jump-arcade-game-239.wav")
// let audioTurn = new Audio("mixkit-arcade-space-shooter-dead-notification-272.wav")
// let gameover = new Audio("mixkit-player-jumping-in-a-video-game-2043.wav")
let turn = 'x'
let isgameover = false;
//function to change turn
const changeTurn = () => {
    return turn === "x" ? "o" : "x" // user ternary expression to check if it is x turn or o turn
}

// function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]

    wins.forEach(e => {
        //  debugger
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
        }
    })


}

// game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            //chekaudioTurn.play()
            //audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }

    })
})

// ad onclick listener to reste button

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""

    });

    turn = "x";
    isgameover = false;
    document.getElementsByClassName
})