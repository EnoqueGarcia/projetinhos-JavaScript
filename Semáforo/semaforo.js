let sinal = document.getElementById('sinal')
let vermelho = document.getElementById('red')
let amarelo = document.getElementById('yellow')
let verde = document.getElementById('green')
let automatico = document.getElementById('automatico')




function red () {
	sinal.src = "red.png"
const audio = new Audio('click.mp3')
audio.play();

}

function yellow () {
sinal.src = "yellow.png"
const audio = new Audio('click.mp3')
audio.play();
}

function green () {
sinal.src = "green.png"
const audio = new Audio('click.mp3')
audio.play();

}

function changecolor () {
    let contador = 1;

setInterval(() => {
	if(contador <= 1) {
		sinal.src = "red.png"
        const audio = new Audio('click.mp3')
audio.play();
	} else if (contador === 5) {
		sinal.src = "yellow.png"
        const audio = new Audio('click.mp3')
audio.play();
	} else if (contador === 10) {
        sinal.src = "green.png"
        const audio = new Audio('click.mp3')
audio.play();
	} else if (contador === 15) {
		sinal.src = "off.png";
		contador = 0;
	}
	
	contador += 1;
}, 300);

}


vermelho.addEventListener('click', red)
amarelo.addEventListener('click', yellow)
verde.addEventListener('click', green)
automatico.addEventListener('click', changecolor)

    
