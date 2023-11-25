function getPassRandom(length) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contrasena = '';

    for (let i = 0; i < length; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }

    return contrasena;
}

$(document).ready(function(){
    $('#registarUser').on('click', function(){
        var nombre = $('#nombre').val();
        var p_apellido = $('#p_apellido').val();
        var s_apellido = $('#s_apellido').val();
        var mail = $('#mail').val();
        var type_user = $('#tipo_usuario').val();
        var contrasenaAleatoria = getPassRandom(8);

        var dataToSend = {
            nombre: nombre, 
            p_apellido: p_apellido,
            s_apellido: s_apellido,
            mail: mail,
            tipo_usuario: type_user,
            contrasena: contrasenaAleatoria
        }

        $.ajax({
            type: 'POST',
            url: '/registrarUsuarios',
            data: dataToSend,
            success: function (response) {
                // Manejar la respuesta del servidor si es necesario
                console.log('Respuesta del servidor:', response);
            },
            error: function (error) {
                // Manejar errores si es necesario
                console.error('Error en la petición Ajax:', error);
            }
        });
    });
});

