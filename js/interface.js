//primeiramente garantir que o documento já foi carregado(que o html já foi carregado)
document.addEventListener('DOMContentLoaded', () => {

    //pegar todos os elementos que foi criado em "square" la no index
    let squares = document.querySelectorAll(".square");

    //adicionar um novo eventoListen de click para cada elemento (acima "squeres")
    squares.forEach((square) => {
        //passar o evento "click" e criar uma função chamada handleClick 
        square.addEventListener('click', handleClick)
    })
})

//criar função handleClick - vai receber o evento
function handleClick(event){
    //teste console.log do target do evento(é o elemento que sofreu a ação)
    //console.log(event.target);


    //variável square vai representar qual item foi clicado
    let square = event.target;
    //esse elemento que foi clicado vai ter um ID, esse ID vai ser a posição quero fazer o movimento la no board(variável) 
    let position = square.id;

    //chama a função handleMove passando a position
    if(handleMove(position)){

        setTimeout(()=>{
            alert("O Jogo Acabou ");
        }, 10);

    };
    
    //chamar função updateSquares
    updateSquare(position);

}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

