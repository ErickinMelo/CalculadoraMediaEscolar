let lineA = document.querySelector('.lineA');
let lineB = document.querySelector('.lineB');
let lineC = document.querySelector('.lineC');
let lineD = document.querySelector('.lineD');
let lineE = document.querySelector('.lineE');
let lineF = document.querySelector('.lineF');

    function removeBg() {
        lineA.style.backgroundColor = '';
        lineB.style.backgroundColor = '';
        lineC.style.backgroundColor = '';
        lineD.style.backgroundColor = '';
        lineE.style.backgroundColor = '';
        lineF.style.backgroundColor = '';
    }

function media() {

    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    let nota1 = parseInt(valor1);
    let nota2 = parseInt(valor2);
    
    let media = (nota1 + nota2)/2

    let showMedia = document.querySelector('.media-valor');


    if (media >= 9) {
        removeBg();
        showMedia.innerHTML = `Parabéns sua média é: ${media} !`;
        showMedia.style.display = 'block'
        lineA.style.backgroundColor = '#008000'
    } else if (media >= 7 && media < 9) {
        removeBg();
        showMedia.innerHTML = `Parabéns sua média é: ${media} !`;
        showMedia.style.display = 'block'
        lineB.style.backgroundColor = '#32CD32'
    } else if (media >= 5 && media < 7) {
        removeBg();
        showMedia.innerHTML = `${media} !`;
        showMedia.style.display = 'block'
        lineC.style.backgroundColor = '#9ACD32'
    } else if (media >= 3 && media < 5) {
        removeBg();
        showMedia.innerHTML = `Que pena, sua média é: ${media}`;
        showMedia.style.display = 'block'
        lineD.style.backgroundColor = '#FFFF00'
    } else if (media >= 1 && media < 3) {
        removeBg();
        showMedia.innerHTML = `Sinto muito, mas sua média é: ${media} :(`;
        showMedia.style.display = 'block'
        lineE.style.backgroundColor = '#FF8C00'
    } else {
        removeBg();
        showMedia.innerHTML = `${media} <br/><br/> Infelizmente você está REPROVADO!`;
        showMedia.style.display = 'block'
        lineF.style.backgroundColor = '#B22222'    
    }
}

