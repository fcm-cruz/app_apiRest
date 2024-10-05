import { btn } from './data.js'

let getBtn = btn

// Função para pegar valor do input

getBtn.addEventListener('click', ()=>{
    let promo = document.querySelector('#name').value
    let arr = promo.replace(/[\s-]/g, '').toUpperCase()
    let newArr = arr.split("")
    
    if(newArr.length > 0){
        let arr = newArr.slice(0, 8).join('-')
        console.log(arr)
    }
})