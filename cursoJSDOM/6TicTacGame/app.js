const gameBoard = document.querySelector('.game_board');
const messageTurn = document.querySelector('.game_turn');
const endGame = document.querySelector('.endgame');
const endGameResult = document.querySelector('.endgame_result');
const buttonReset = document.querySelector('.endgame_button');

let isTurnX = true;
let turn = 0;
let maxTurn = 9;
let players = {
    x: 'cross',
    o: 'circle'
}
const winningPosition = [
    //Son las posiciones de los valores del gato.
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

startGame();

function startGame(){
    createBoard();
    messageTurn.textContent = isTurnX ? 'X' : 'O';
    isTurnX = true;
    turn = 0;
    endGame.classList.remove('show');
}

function createBoard(){
    const cells = 9;

    while(gameBoard.firstElementChild){
        gameBoard.firstElementChild.remove();
    }

    for(let i = 0; i<cells; i++){
        const div = document.createElement('div'); 
        div.classList.add('cell');
        div.addEventListener('click', handleGame, {once:true});

        gameBoard.append(div);
    }
}

function handleGame(e){
    const currentCell = e.currentTarget;
    const currentTurn = isTurnX ? players.x : players.o;

    turn++; //se incrementa por cada turno que pase
    drawShape(currentCell, currentTurn);

    if(checkWinner(currentTurn)){
        return;
    }

    if(turn === maxTurn){
        showEndGame(false);
    }

    changeTurn();
}

function drawShape(element, newClass){
    element.classList.add(newClass);
}

function changeTurn(){
    isTurnX = !isTurnX;
    messageTurn.textContent = isTurnX ? 'X' : 'O';
}

function checkWinner(currentPlayer){
    const cells = document.querySelectorAll('.cell');

    // La propiedad some itera un objeto para poder corroborar que se cumpla una sección.
    const winner = winningPosition.some(array =>{
        return array.every(position => {
            return cells[position].classList.contains(currentPlayer);
        });
    });
    if(!winner){
        return;
    }
    showEndGame(true);
    return true;
}

function showEndGame(winner){
    endGame.classList.add('show');

    if(winner){
        endGameResult.textContent = `${isTurnX ? "X" : "O"} HA GANADO.`;
    }else {
        endGameResult.textContent = `¡EMPATE!`;
    }
}

buttonReset.addEventListener('click', startGame);