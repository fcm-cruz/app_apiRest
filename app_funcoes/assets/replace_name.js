import { btn } from './data.js'

let getBtn = btn

// Função para pegar valor na caixa de texto e alterar o texto
getBtn.addEventListener('click', ()=>{
    let name = document.querySelector('#name').value
    let arr = Array.from(name.replace(/[\s-]/g, '').toLowerCase())

    if(arr.length > 0){
        let newArr = arr.slice(0, 8).join('-')
        console.log(newArr)
    }
})