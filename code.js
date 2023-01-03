const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult=document.querySelector('#pResult');
let resultado=0;

btn.addEventListener('click',btnOnClick);

function btnOnClick(){
    resultado=(Number(input1.value)+Number(input2.value));
    pResult.innerText="Resultado: "+resultado;
}