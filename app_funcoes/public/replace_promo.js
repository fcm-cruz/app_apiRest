// Função para pegar valor de cada input do formulário
document.querySelector('#btn').addEventListener('click', (e) => {
    
    e.preventDefault(); // Evita que a página seja recarregada quando o botão for clicado

    
    let inputs = document.querySelectorAll('#registrarPromos input[type="text"]'); // Seleciona todos os inputs do tipo texto dentro do formulário com id "registrarPromos"
    let array = Array.from(inputs).map(input => input.value); // Converte a NodeList em um array e extrai os valores de cada input
    let formattedArray = []; // Cria um array vazio para armazenar os valores formatados

    // Itera sobre cada valor do array
    array.forEach((element) => {
        
        let cleaned = element.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(); // Remove caracteres especiais, espaços e transforma em letras maiúsculas
        let cleanedArray = cleaned.split("");// Transforma a string em um array de caracteres
        
        // Verifica se o array não está vazio após a limpeza
        if (cleanedArray.length > 0) {
            
            let joinFormatted = cleanedArray.join(''); // Junta os caracteres em uma única string sem separadores
            let formatted = joinFormatted.slice(0, 4); // Pega os primeiros 4 caracteres da string resultante

            formattedArray.push(formatted); // Adiciona o valor formatado ao array "formattedArray"
        }
    });

    
    let concatenatedString = formattedArray.join('-'); // Concatena todos os itens do "formattedArray" em uma única string, separados por "|"
    
    console.log(concatenatedString); // Exibe a string concatenada final no console

});
