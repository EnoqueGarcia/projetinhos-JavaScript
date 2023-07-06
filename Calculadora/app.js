function insert (num) {


var numero =document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero+ num
const audio = new Audio('bip.mp3')
audio.play();

}



function clean() {
    document.getElementById('resultado').innerHTML = ''
    const audio = new Audio('bip.mp3')
audio.play();

}

function back (){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    const audio = new Audio('bip.mp3')
audio.play();

}

function calcular () {

    var resultado = document.getElementById('resultado').innerHTML
    const audio = new Audio('bip.mp3')
    audio.play();
if (resultado){
    document.getElementById('resultado').innerHTML = eval(resultado)
} else {
    const audio = new Audio('error sound.mp3')
    audio.play();
    Swal.fire({
        icon: 'error',
        title: 'Erro..',
        text: 'Realize uma operação matemática antes.',
       
      })
   

}

}