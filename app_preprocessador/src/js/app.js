// Cadastro de funcionários
document.querySelector('#cadastrar').addEventListener('click', (e) => {
    e.preventDefault();

    // Cadastrar pessoa

    function pessoas(){

        let inputs = document.querySelectorAll('#formCadastro input[type="text"], input[type="number"]');

        let array = Array.from(inputs).map(input => input.value);

        let boxMsg = document.querySelector('#box');

        let arr = [];

        array.forEach((element) => {
            
            if(element == ""){
            
            boxMsg.innerHTML = `<div class="warning"><p>Preencha todos os campos!</p></div>`;   
            
            console.error(`Erro: Formulário de cadastro não preenchido.`);
            
            }
            else{

                arr.push(element);

                boxMsg.innerHTML = `<div class="confirm">
                        <p>Cadastro realizado com sucesso!</p>
                        <p>Nome: ${arr[0]}</p><p>Idade: ${arr[1]}</p>
                    </div>`;
        
                console.log(`Status ok: Formulário de cadastro preenchido.`);

                // setInterval(() => {

                //     boxMsg.classList.remove('confirm').
                //     boxMsg.classList.add('remove')

                // }, 2000);
            }
        }      
        
        );
    }
    
    pessoas();

})