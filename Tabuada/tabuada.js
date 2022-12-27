let valor = document.querySelector("div.container input")
let tabuada = document.querySelector("div.container div.tabuada")
const calcular = document.querySelector("div.container button")


calcular.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if(Number(valor.value) < 1 || Number(valor.value) > 10){        

   
        Swal.fire({
          icon: 'error',
          title: 'Erro..',
          text: 'Digite um número entre 1 a 10.',
         
        })

    }else{

       

        for(i = 1; i <= 10; i++){

            var calc = valor.value + " x " + String(i) + " = " + i * Number(valor.value);

            var resultado = document.createElement("p")

            resultado.innerText = calc

            tabuada.appendChild(resultado)

        }

    }

})
