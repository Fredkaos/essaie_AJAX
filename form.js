$("form").submit(function (){
    //POST : Envoyer des données au serveur JSON
    $.ajax('https://641b49fa9b82ded29d4f0c5b.mockapi.io/users', {
        data : JSON.stringify({ "username": $("#username").val(), "email" : $("#email").val() }),
        contentType : 'application/json',
        type : 'POST'
    });
});

