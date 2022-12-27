let sinal = document.getElementById('sinal')
let vermelho = document.getElementById('red')
let amarelo = document.getElementById('yellow')
let verde = document.getElementById('green')
let automatico = document.getElementById('automatico')



function red () {
sinal.src = "Imagens/red.png"
const audio = new Audio('click.mp3')
audio.play();

}

function yellow () {
sinal.src = "Imagens/yellow.png"
const audio = new Audio('click.mp3')
audio.play();
}

function green () {
sinal.src = "Imagens/green.png"
const audio = new Audio('click.mp3')
audio.play();

}

function changecolor () {
    setTimeout(function(){
        



        
    }, 3000) 
}





vermelho.addEventListener('click', red)
amarelo.addEventListener('click', yellow)
verde.addEventListener('click', green)
automatico.addEventListener('click', changecolor)

    
