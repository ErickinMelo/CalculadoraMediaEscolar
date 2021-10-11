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

    let showMeida = document.querySelector('.media-valor');


    if (media >= 9) {
        removeBg();
        showMeida.innerHTML = 'Parabéns sua média é ' + media + '!';
        showMeida.style.display = 'block'
        document.querySelector('.lineA').style.backgroundColor = '#008000'
    } else if (media >= 7 && media < 9) {
        removeBg();
        showMeida.innerHTML = 'Parabéns sua média é ' + media + '!';
        showMeida.style.display = 'block'
        document.querySelector('.lineB').style.backgroundColor = '#32CD32'
    } else if (media >= 5 && media < 7) {
        removeBg();
        showMeida.innerHTML = media + '!';
        showMeida.style.display = 'block'
        document.querySelector('.lineC').style.backgroundColor = '#9ACD32'
    } else if (media >= 3 && media < 5) {
        removeBg();
        showMeida.innerHTML = 'Que pena sua média é ' + media;
        showMeida.style.display = 'block'
        document.querySelector('.lineD').style.backgroundColor = '#FFFF00'
    } else if (media >= 1 && media < 3) {
        removeBg();
        showMeida.innerHTML = 'Sinto muito mas sua média é ' + media + ' :(';
        showMeida.style.display = 'block'
        document.querySelector('.lineE').style.backgroundColor = '#FF8C00'
    } else {
        removeBg();
        showMeida.innerHTML = media +'<br/>'+' Infelizmente você está REPROVADO!';
        showMeida.style.display = 'block'
        document.querySelector('.lineF').style.backgroundColor = '#B22222'    
    }
}

