// iniciar minhas variáveis
//array representando os quadrados que são 9
let board = ['','','','','','','','',''];
//variável representando a vez do jogador = 0 para jogador 1, 1 para jogador 2
let playerTime = 0;
//para evitar continuação do jogo depois que ganha
let gameOver = false;

//array para os simbolos
let symbols = ['o', 'x'];



let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//colocar o simbolo no quadrado - recebe o position que é a posição que quer efetuar o move
function handleMove(position){

    //verificar se o jogo acabou
    if(gameOver){
        return;
    }

    //vai pegar o board(variável criada la em cima)
    //vai pegar a posição que quer fazer o move
    //vai colocar um simbolo dentro dele - que esta dentro da variável symbols
    //...o index do simbolo vai ser o playerTime(variável)
    if(board[position] == ''){
        board[position] = symbols[playerTime];

        //function para verificar se algem venceu
        gameOver = isWin();

        if(gameOver == false) {    

            playerTime = (playerTime == 0) ? 1 : 0;

        }
    }

    return gameOver;

}

function isWin(){

    //i < winStates.length vai de zero até sete, pois o tamanho do array tem sete posiçoes
    for (let i = 0; i < winStates.length; i++) {
        //cada vez que passar no for vai pegar uma sequência do winStates 
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '' ){
            return true;
        }

    }

    return false;
}