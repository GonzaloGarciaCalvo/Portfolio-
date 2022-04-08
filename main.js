

$('#subir').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 400); //obtenemos el alto del documento
})

$('#misContactos').click(function () {
    $('body,html').animate({scrollTop: $(document).height()}, 17); //obtenemos el alto del documento
})