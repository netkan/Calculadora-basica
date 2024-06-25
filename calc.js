function somar() {
    let n1 = parseInt( document.querySelector('.n1').value);
    let n2 = parseInt(document.querySelector('.n2').value);
    let soma = n1 + n2 
    console.log (soma);
    let titulo = document.querySelector('p')
    titulo.innerHTML =  soma
}
function subtrair() {
    let n1 = parseInt( document.querySelector('.n1').value);
    let n2 = parseInt(document.querySelector('.n2').value);
    let soma = n1 - n2
    console.log (soma);
    let titulo = document.querySelector('p')
    titulo.innerHTML =  soma
}
function multiplicar () {
    let n1 = parseInt( document.querySelector('.n1').value);
    let n2 = parseInt(document.querySelector('.n2').value);
    let soma = n1 * n2
    console.log (soma);
    let titulo = document.querySelector('p')
    titulo.innerHTML =  soma
}
function dividir() {
    let n1 = parseInt( document.querySelector('.n1').value);
    let n2 = parseInt(document.querySelector('.n2').value);
    let soma = n1 / n2
    console.log (soma);
    let titulo = document.querySelector('p')
    titulo.innerHTML =  soma
}







