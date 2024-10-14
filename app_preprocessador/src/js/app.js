// Cadastro de funcionários
document.querySelector('#cadastrar').addEventListener('click', (e) => {
    e.preventDefault();

    // Cadastrar funcionário

    function cadastrarFuncionario(){
        // Selecionar todos os inputs de texto e número
        let inputs = document.querySelectorAll('#formCadastro input[type="text"], input[type="number"]');
        let array = Array.from(inputs).map(input => input.value);
        let boxMsg = document.querySelector('#box');

        // Verifica se todos os campos estão preenchidos
        const allFieldsFiltred = array.every(value => value !== "");
            
        if (!allFieldsFiltred){
            // Mensagem de erro
            boxMsg.innerHTML = `
                <div class="warning">
                    <p>Preencha todos os campos!</p>
                </div>`;   
            
            console.error(`Erro: Formulário de cadastro não preenchido.`);
        
        } else {
            // Mensagem de sucesso
            boxMsg.innerHTML = `
                <div class="confirm">
                    <p>Cadastro realizado com sucesso!</p>
                    <p>Nome: ${array[0]}</p>
                    <p>Idade: ${array[1]}</p>
                </div>`;
    
            console.log(`Status ok: Formulário de cadastro preenchido.`);

        }
    }       
    
    cadastrarFuncionario();

});