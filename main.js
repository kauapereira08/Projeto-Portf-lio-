let numero1 = document.querySelector('#entrada1');    
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#Resultado');          

function somar(){
resultado.value = Number (numero1.value) + Number (numero2.value);
}
function dividir(){
resultado.value = Number (numero1.value) / Number (numero2.value);
}
function multiplicar(){
 resultado.value = Number (numero1.value) * Number (numero2.value);
}
function subtrair(){
resultado.value = Number (numero1.value) - Number (numero2.value);
}


function IMC(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let IMC  = Number(peso.value) / (Number(altura.value) * Number(altura.value));

    document.querySelector('#IMC').value =IMC.toFixed(2);

    let consideracoes =document.querySelector('#consideracoes');
    if(IMC < 18.5){
        consideracoes.textContent = 'Abaixo do peso';
    }else if(IMC >= 18.5 && IMC <= 24.9){
        consideracoes.textContent='Peso Normal';
    }else if(IMC >= 25.0 && IMC  <= 29.9){
        consideracoes.textContent='Acima do Peso';
    }else if(IMC >= 30.0 && IMC <= 34.9){
        consideracoes.textContent='Obesidade grau 1';
    }else if(IMC >=35.0 && IMC <= 39.9){
        consideracoes.textContent='Obesidade grau 2';
    }else {
        consideracoes.textContent='Obesidade 3';
    }


    }    
