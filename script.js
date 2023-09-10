const dataAtual = new Date().getFullYear()
const elmDataAtual = document.querySelector('.dataAtual')

function getData(){
    console.log(dataAtual);
    elmDataAtual.innerHTML = dataAtual
} 

getData()