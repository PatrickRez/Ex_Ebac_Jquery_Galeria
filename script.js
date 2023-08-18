$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem= $('#endereco-imagem-nova').val();
        const novaItem = $('<li style= "display: none"></li>');
        $(`img src= "${enderecoDaNovaImagem}"/>`).appendTo(novaItem);
        $(`
            <div class= "overlay-imagen-link">
                <a hreaf= "${enderecoDaNovaImagem}" target="_black" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaItem);
        $(novaItem).appendTo('ul');
        $(novaItem).fadeIn(5000);
        $('#endereco-de-imagem').val('')
    })





})  