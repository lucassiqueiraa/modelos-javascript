
let resultado = document.querySelector('#res1')
let resultado2 = document.querySelector('#res2')
let resultado3 = document.querySelector('#res3')
let resultado4 = document.querySelector('#res4')

if(vazio(valor1) || vazio(valor2))
{
    resultado.textContent ="Preencha ambos os campos"
}

document.querySelector("#btnSomar").addEventListener("click", function(event){
    event.preventDefault()
    let valor1 = document.querySelector('#valor1').value
    let valor2 = document.querySelector('#valor2').value
    if(vazio(valor1) || vazio(valor2)) {
        resultado.textContent = "Preencha ambos os campos";
        return;
    }
    resultado.textContent = somar(parseFloat(valor1), parseFloat(valor2));
    resultado2.textContent += dividir(parseFloat(valor1), parseFloat(valor2));
    resultado3.textContent += multiplicar(parseFloat(valor1), parseFloat(valor2));
    resultado4.textContent += subtrair(parseFloat(valor1), parseFloat(valor2));
})


function somar(n1,n2){
    return n1 + n2
}
function dividir(n1,n2){
    return  n1 / n2
}
function multiplicar(n1,n2){
    return n1 * n2
}
function subtrair(n1,n2){
    return n1 - n2
}

function vazio(input){
    return typeof input === 'string' && input.trim() === '';
}