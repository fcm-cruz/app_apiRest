// Função para pegar promo na url e alterar o valor

function getParamsPromoUrl(){
    let getUrl = new URL(window.location.href)
    let params = getUrl.searchParams.get('promo')

    let arr = params.replace(/[\s-]/g, '').toUpperCase()
    let newArr = arr.split("")
    
    if(newArr.length > 0){
        let arr = newArr.slice(0, 8).join('-')
        console.log(arr)
    }
}

getParamsPromoUrl()