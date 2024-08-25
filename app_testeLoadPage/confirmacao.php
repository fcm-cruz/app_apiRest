<?php 
    $senha_1 = isset($_GET['senha1']);
    $senha_2 = isset($_GET['senha2']);

    if ($senha_1 === $senha_2) {
        echo "Senha cadastrada com sucesso";
    } else {
        echo "Por favor, verifique a senha inserida";
    }
?>