const tablero = document.querySelector('#board-content'); 
const p1 = document.querySelector('.player-1');
const p2 = document.querySelector('.player-2');
const win = document.querySelector('.win');
const lost = document.querySelector('.lost');
const jugadasRealizadas = document.querySelector('.jugadas');
const game = document.querySelector('.game');
const jugarDeNuevo = document.querySelector('.jugar-de-nuevo');
const jugadorA = 'x';
const jugadorB = 'o';
const board = ['','','','','','','','',''];

let turno = jugadorA;
let ganador = 0;
let jugadas = 0;
jugarDeNuevo.addEventListener('click', () => {
    window.location.reload()
})
for(let i = 0; i < board.length; i++){ 

    function clickBox() {
        if(turno == jugadorA) {
            p1.classList.remove('turn');
            p2.classList.add('turn');
            board[i] = 'O';
            newbox.innerHTML = board[i];
            turno = jugadorB;
        }else if(turno == jugadorB) {
            p2.classList.remove('turn');
            p1.classList.add('turn');
            board[i] = 'x';
            newbox.innerHTML = board[i];
            turno = jugadorA;
        }
        if(board[0] == 'O' && board[1] == 'O' && board[2] == 'O') {
            ganador = 1;
        }else if(board[3] == 'O' && board[4] == 'O' && board[5] == 'O') {
            ganador = 1;
        }else if(board[6] == 'O' && board[7] == 'O' && board[8] == 'O') {
            ganador = 1;
        }else if(board[0] == 'O' && board[3] == 'O' && board[6] == 'O') {
            ganador = 1;
        }else if(board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
            ganador = 1;
        }else if(board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
            ganador = 1;
        }else if(board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
            ganador = 1;
        }else if(board[2] == 'O' && board[4] == 'O' && board[6] == 'O') {
            ganador = 1;
        }else if(board[0] == 'x' && board[1] == 'x' && board[2] == 'x') {
            ganador = 2;
        }else if(board[3] == 'x' && board[4] == 'x' && board[5] == 'x') {
            ganador = 2;
        }else if(board[6] == 'x' && board[7] == 'x' && board[8] == 'x') {
            ganador = 2;
        }else if(board[0] == 'x' && board[3] == 'x' && board[6] == 'x') {
            ganador = 2;
        }else if(board[1] == 'x' && board[4] == 'x' && board[7] == 'x') {
            ganador = 2;
        }else if(board[2] == 'x' && board[5] == 'x' && board[8] == 'x') {
            ganador = 2;
        }else if(board[0] == 'x' && board[4] == 'x' && board[8] == 'x') {
            ganador = 2;
        }else if(board[2] == 'x' && board[4] == 'x' && board[6] == 'x') {
            ganador = 2;
        }
        jugadas++
        if(ganador == 1) {
            game.classList.add('display');
            win.innerHTML = 'Player 1 WIN';
        }else if(ganador == 2) {
            game.classList.add('display');
            win.innerHTML = 'Player 2 WIN';
        }else if(ganador == 0 && jugadas == 9) {
            lost.innerHTML = 'Game over';
            game.classList.add('display');
        }
        jugadasRealizadas.innerHTML = `Jugada numero: ${jugadas}`;  
    }
    const newbox = document.createElement('div');
    tablero.appendChild(newbox);
    newbox.classList.add('box');
    newbox.addEventListener('click', clickBox);
}

