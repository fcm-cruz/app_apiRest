// Cadastro de funcionários
document.querySelector('#cadastrar').addEventListener('click', (e) => {
    e.preventDefault();

    // Cadastrar funcionário

    function cadastrarFuncionario(){
        // Selecionar todos os inputs de texto e número
        let form = document.querySelector('#formCadastro');
        let inputs = document.querySelectorAll('#formCadastro input[type="text"], input[type="email"]');
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
            
            // console.error(`Erro: Formulário de cadastro não preenchido.`);
        
        } else {
            // Mensagem de sucesso
            boxMsg.innerHTML = `
                <div class="confirm">
                    <p>Cadastro realizado com sucesso!</p>
                </div>`;
    
            console.log(`Status ok: Formulário de cadastro preenchido.`);

            form.reset();

            logado();

        }

        fadeOutEffect(boxMsg.querySelector('div'))
    }       
    
    cadastrarFuncionario();

});

function fadeOutEffect(element) {
    let opacity = 1;
    const fadeInterval = setInterval(() =>{
        if(opacity > 0){
            opacity -= 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
            element.remove();
        }

    }, 100);
}

function logado(){
    window.location = "user/dashboard.html";
}