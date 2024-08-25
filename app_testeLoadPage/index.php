<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Teste de Scripts</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/result/estilo.css">

    <script src="assets/js/jquery.min.js"></script>

    <script>
        $(function() {
            $( "p" ).text( "O DOM foi carregado agora e manipulado. " );
        });
    </script>

</head>

<body>

    <script>
        $("div.container").wrap("<div class='teste'></div>");

        $(document).ready(function () {
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();
                $('#mask').css({
                    'width': maskWidth,
                    'height': maskHeight
                });
                $('#mask').fadeIn(1000);
                $('#mask').fadeTo("slow", 0.8);
                //Get the window height and width
                var winH = $(window).height();
                var winW = $(window).width();
                $('#dialog2').css('top', winH / 2 - $('#dialog2').height() / 2);
                $('#dialog2').css('left', winW / 2 - $('#dialog2').width() / 2);
                $('#dialog2').fadeIn(1000);
                $('.window .close').click(function (e) {
                    e.preventDefault();
                    $('#mask').hide();
                    $('.window').hide();
                });
                $('#mask').click(function () {
                    $(this).show();
                    $('.window').show();
                });
            });
    </script>

    <div class="container">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <div id="boxes">
                    <!-- Janela Modal -->
                    <div id="dialog2" class="window" style="border:1px solid #cecece;">
                        <div align="right">
                            <!-- <input type="button" value="Fechar" class="close" /> -->
                        </div>
                        <?php include "test.php"; ?>
                    </div>
                    <!-- Fim Janela Modal-->
                    <!-- Máscara para cobrir a tela -->
                    <div id="mask"></div>
                </div>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>



    <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
</body>
</html>