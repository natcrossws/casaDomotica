function encenderSala(){
    $.ajax({
        url: '/encender-sala',
        method: 'POST',
        success: function (response){
            console.log(response + 'OK');
        },
        error: function (error){
            console.error('Error en la petición AJAX:', error);
        }
    });
}

