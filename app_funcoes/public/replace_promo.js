// Função para pegar valor de cada input do formulário
document.querySelector('#btn').addEventListener('click', (e) => {

    // Evita que a página seja recarregada quando o botão for clicado
    e.preventDefault();

    // Seleciona todos os inputs do tipo texto dentro do formulário com id "registrarPromos"
    let inputs = document.querySelectorAll('#registrarPromos input[type="text"]');
    
    // Converte a NodeList em um array e extrai os valores de cada input
    let array = Array.from(inputs).map(input => input.value);
    
    // Cria um array vazio para armazenar os valores formatados
    let formattedArray = []; 

    // Itera sobre cada valor do array
    array.forEach((element) => {

        // Remove caracteres especiais, espaços e transforma em letras maiúsculas
        let cleaned = element.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        
        // Transforma a string em um array de caracteres
        let cleanedArray = cleaned.split("");
        
        // Verifica se o array não está vazio após a limpeza
        if (cleanedArray.length > 0) {
            
            // Pega os primeiros 4 caracteres da string resultante
            let formatted = cleanedArray.join('').slice(0, 4); 

            // Adiciona o valor formatado ao array "formattedArray"
            formattedArray.push(formatted); 
        }
    });
    
    // Concatena todos os itens do "formattedArray" em uma única string, separados por "|"
    let concatenatedString = formattedArray.join('-'); 
    
    // Exibe a string concatenada final no console
    console.log(concatenatedString); 

});
