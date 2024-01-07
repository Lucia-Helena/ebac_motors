$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true, 
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
       rules: {
        nome: {
            required: true,
            email: true
        },
        mensagem: {
            required: true,
        },
        veiculoInteresse: {
            required: fause,
        }
       },
       messages: {
        nome: 'Por favor, insira o seu nome'
       },
       submitHandler: function(form) {
        console.log(form)
       },
       invalidHandler: function(evento,validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos){
            alert`(Existem $(camposIncorretos) Campos incorretos)`
        }}
    })

    $('.lista-veiculos button').click

})