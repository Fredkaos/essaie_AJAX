function afficher() {
// GET JSON : Obtenir les données du serveur JSON
    $.getJSON('https://641b49fa9b82ded29d4f0c5b.mockapi.io/users')
        .done(function (users) {
            for (user of users) {
                $("#reception").append(`
                <div id='user${user.id}' class="card col-3" style="width: 18rem;">
                    <img class="card-img-top" src="http://placeimg.com/640/480/technics" alt="Card image cap">
                    <div class="card-body">
                        <p id='user${user.id}'>${user.id}</p>
                        <h5 class="card-title">${user.username}</h5>
                        <p class="card-text">${user.email}</p>
                    </div>
                </div>
                `)
            }
        });
};

function modifier(){
    //Modifier l'utilisateur avec le id choisi.
    //Référence : https://github.com/mockapi-io/docs/wiki/Code-examples
    fetch('https://641b49fa9b82ded29d4f0c5b.mockapi.io/users/'+$("#id").val(), {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify({ "username": $("#username").val(), "email" : $("#email").val() })
    }).then(function (){
        id = $("#id").val();
        username = $("#username").val();
        email = $("#email").val();
        //Mette à jour l'affichage de façon dynamique, sans recharger la page
        $("#user"+$("#id").val()).html(`
                <div class="card col-3" style="width: 18rem;">
                    <img class="card-img-top" src="http://placeimg.com/640/480/technics" alt="Card image cap">
                    <div class="card-body">
                        <p id='user${user.id}'>${id}</p>
                        <h5 class="card-title">${username}</h5>
                        <p class="card-text">${email}</p>
                    </div>
                </div>
                `);
    });
};

function supprimer(){
    //Supprimer le user avec le id choisi à l'aide de la commande ajax fetch et la methode delete du serveur.
    //Référence : https://github.com/mockapi-io/docs/wiki/Code-examples
    fetch('https://641b49fa9b82ded29d4f0c5b.mockapi.io/users/'+$("#id").val(), {
        method: 'DELETE',
    }).then(function (){
        $("#user"+$("#id").val()).remove();
    });
};

// utilise la fonction afficher();
afficher();