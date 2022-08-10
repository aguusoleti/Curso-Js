var URL = 'http://localhost:5000/amigos';
let verAmigos = function () {
    $('#lista').empty();
    $.get(`${URL}`, function (friends) {
        console.log(friends)
        friends.forEach(element => {
            $('#lista').append(`<li  id='${element.id}'> ${element.name} <button id="${element.id}" onclick ="eliminarAmigo(${element.id})"> X </button>  </li>`)
        });
    })
}

let buscarAmigo = function () {
    $('#amigo').empty();
    let amigo = $('#input').val()
    if (amigo) {
        $.get(`${URL}/${amigo}`, function (friends) {
            $('#amigo').append(`<p  id='${friends.id}'> ${friends.name} ${friends.age} ${friends.email}</p>`)
        }
        
        )}
        $('#input').val('')
}

let eliminarAmigo= function(idcruz){
    let amigo //= $('#inputDelete').val()
    let amigoBorrado

    idcruz ? amigo = idcruz : amigo = $('#inputDelete').val()
    $.get(`${URL}/${amigo}`,function(friend){
    amigoBorrado=friend;
    })
    if(amigo){
   
        $.ajax({
            url: `${URL}/${amigo}`,
            type: "DELETE",
            success: function() {
                $('#success').text(` Tu amigo ${amigoBorrado.name} fue eliminado correctamente`)
                $('#inputDelete').val("")
                verAmigos();
            }
         });
        // $.delete(`${URL}/${amigo}`, function(friends){
        // console.log(friends)
    }else{
        $('#success').text(` Tu amigo no existe`)
           
    }
}


$('#delete').click(eliminarAmigo)
$('#boton').click(verAmigos)
$('#search').click(buscarAmigo)