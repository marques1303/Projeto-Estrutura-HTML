let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');
let resultadob = document.querySelector ('#resultadob');

function somar() {
  let final = Number(numero1.value) + Number(numero2.value);

  resultado.innerHTML = final;
  resultadob.value = final;
}

function subtrair() {
    let final = Number(numero1.value) - Number(numero2.value);
  
    resultado.innerHTML = final;
    resultadob.value = final;
}

  function dividir() {
    let final = Number(numero1.value) / Number(numero2.value);
  
    resultado.innerHTML = final;
    resultadob.value = final;
  }

  function multiplicar() {
    let final = Number(numero1.value) * Number(numero2.value);
  
    resultado.innerHTML = final;
    resultadob.value = final;
  }

 function imc(){
    let Peso = document.querySelector('#peso')
    let Altura = document.querySelector('#altura')
    let resultadoIMC = Number(peso.value)/(Number(altura.value) * Number(altura.value));

    document.querySelector('#imc').value = resultadoIMC;
    let consideracoes = document.querySelector('#consideracoes')  
    if(resultadoIMC < 18.5){
      consideracoes.textContent = 'Abaixo do Peso'
    }
    else if(resultadoIMC >= 18.5 && resultadoIMC <= 24.9){
      consideracoes.textContent = 'Peso Normal'
    }
    else if(resultadoIMC >= 25 && resultadoIMC <= 29.9){
      consideracoes.textContent = 'Acima do Peso'
    }
    else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
      consideracoes.textContent = 'Obesidade grau 1';
  } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
      consideracoes.textContent = 'Obesidade grau 2';
  } else {
      consideracoes.textContent = 'Obesidade grau 3';
  }

}
