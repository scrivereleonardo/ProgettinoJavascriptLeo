let utenti = [
    { name: "Marco", surname: 'Albertazzi', competenze: { linux: 3, java: 2 } },
    { name: "Paolo", surname: 'Bianchi', competenze: { java: 4, cSharp: 1 } },
    { name: "Luca", surname: 'Verdi', competenze: { php: 3 } }
];

function creaOggetto(nome, cognome) {
    let user = {
        name: nome,
        surname: cognome,
        competenze: {},

    };
    return user;
}

function selectComptence() {

    let selectedSelect = document.getElementById("competenze");
    let valoreOption = selectedSelect.value;
    document.getElementById("bottoncino").setAttribute("disabled", "");
    document.getElementById("conclusioneBottone").setAttribute("disabled", "");

    console.log(valoreOption);
    document.getElementById("salutiCompetenze").innerHTML = "Seleziona il tuo livello di competenze su " + valoreOption + " :";
    document.getElementById("radioField").removeAttribute("hidden");
    salvaComptenza(valoreOption);

    console.log(utenti);





}

//tecnicamente è pìù sicuro crearle sul momento ste cose invece che nasconderele e farle riapparire però mi è appena venuto in mente e non ho intenzione di cambiare tutto ora

function salvaComptenza(valoreOption) {
    let levels = document.getElementsByName("livello");

    for (var i = 0, length = levels.length; i < length; i++) {
        if (levels[i].checked) {


            oggettoUser.competenze[valoreOption] = parseInt(levels[i].value);

            document.getElementById("radioField").setAttribute("hidden", "");
            document.getElementById("salutiCompetenze").innerHTML = "";
            document.getElementById("bottoncino").removeAttribute("disabled");
            document.getElementById("conclusioneBottone").removeAttribute("disabled");
            levels[i].checked = false;

            break;
        }
    }


}

function addUser() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;

    if ((nome === "" || null || undefined) || (cognome === "" || null || undefined)) {
        alert("Inserire Dati correttamente");
    }
    else {
        oggettoUser = creaOggetto(nome, cognome);
        utenti.push(oggettoUser);
        console.log(utenti);
        document.getElementById("nomiUtenti").innerHTML += `<option value=${oggettoUser.surname}>${oggettoUser.surname} ${oggettoUser.name}</option>`


        document.getElementById("saluti").innerHTML = "Ciao " + oggettoUser.name + ", seleziona le tue competenze e il tuo livello";
        document.getElementById("bottoneAggiungi").setAttribute("disabled", "");
        document.getElementById("bottoneModifica").setAttribute("disabled", "");
        document.getElementById("bottoneCerca").setAttribute("disabled", "");

        document.getElementById("bottoneCercaNome").setAttribute("disabled", "");
        document.getElementById("competenze").removeAttribute("hidden");
        document.getElementById("bottoncino").removeAttribute("hidden");
        document.getElementById("conclusioneBottone").removeAttribute("hidden");


        document.getElementById("nome").value = "";
        document.getElementById("cognome").value = "";


    }

}

function endCreation() {
    document.getElementById("radioField").setAttribute("hidden", "");
    document.getElementById("competenze").setAttribute("hidden", "");
    document.getElementById("bottoncino").setAttribute("hidden", "");
    document.getElementById("bottoneAggiungi").removeAttribute("disabled");
    document.getElementById("bottoneModifica").removeAttribute("disabled");
    document.getElementById("bottoneCerca").removeAttribute("disabled");
    document.getElementById("bottoneCercaNome").removeAttribute("disabled");

    document.getElementById("saluti").innerHTML = "";
    document.getElementById("conclusioneBottone").setAttribute("hidden", "");
}

function searchUser() {

    document.getElementById("saluti").innerHTML = "Cercuna un perito che sappia utilizzare:";
    document.getElementById("competenze").removeAttribute("hidden")
    document.getElementById("salutiCompetenze").innerHTML = "Con almeno una competenza di livello:";
    document.getElementById("livelli").removeAttribute("hidden");

    document.getElementById("confermaRicerca").removeAttribute("hidden");
    document.getElementById("terminaRicerca").removeAttribute("hidden");
    document.getElementById("bottoneAggiungi").setAttribute("disabled", "");
    document.getElementById("bottoneModifica").setAttribute("disabled", "");
    document.getElementById("bottoneCercaNome").setAttribute("disabled", "");
    document.getElementById("bottoneCerca").setAttribute("disabled", "");

}

function showUsers() {



    let competenzaRicercata = document.getElementById("competenze").value;
    let livelloRicercata = parseInt(document.getElementById("livelli").value);
    document.getElementById("printedUsers").innerHTML = "";

    console.log(competenzaRicercata, livelloRicercata);



    for (let index = 0; index < utenti.length; index++) {



        for (var key in utenti[index]) {
            if ((utenti[index].competenze.hasOwnProperty(competenzaRicercata)) && (utenti[index].competenze[competenzaRicercata] >= livelloRicercata)) {

                document.getElementById("printedUsers").innerHTML += "<ul><br><li> nome: " + utenti[index].name + "</li><br> <li>cognome:" + utenti[index].surname + "</li><br> <li>Competenza " + competenzaRicercata + ": " + utenti[index].competenze[competenzaRicercata] + "</li></ul><br><br><hr>";

                break;
            }
        }
    }





}

function refresh() {

    document.getElementById("saluti").innerHTML = "";
    document.getElementById("competenze").setAttribute("hidden", "");
    document.getElementById("salutiCompetenze").innerHTML = "";
    document.getElementById("livelli").setAttribute("hidden", "");

    document.getElementById("confermaRicerca").setAttribute("hidden", "");
    document.getElementById("terminaRicerca").setAttribute("hidden", "");
    document.getElementById("bottoneAggiungi").removeAttribute("disabled", "");
    document.getElementById("bottoneModifica").removeAttribute("disabled", "");
    document.getElementById("bottoneCerca").removeAttribute("disabled", "");
    document.getElementById("bottoneCercaNome").removeAttribute("disabled");

    document.getElementById("printedUsers").innerHTML = "";
    document.getElementById("radioField").setAttribute("hidden", "")
    document.getElementById("terminaModifica").setAttribute("hidden", "")
    document.getElementById("modifica").setAttribute("hidden", "")
    document.getElementById("competenze").setAttribute("hidden", "")
    document.getElementById("nomiUtenti").setAttribute("hidden", "")
    document.getElementById("nomeInput").setAttribute("hidden","");
    document.getElementById("confermaRicercaNome").setAttribute("hidden","");
}

function modifyUser() {
    document.getElementById("nomiUtenti").removeAttribute("hidden", "");
    document.getElementById("modifica").removeAttribute("hidden", "")
    document.getElementById("bottoneAggiungi").setAttribute("disabled", "");
    document.getElementById("bottoneModifica").setAttribute("disabled", "");
    document.getElementById("bottoneCercaNome").setAttribute("disabled", "");
    document.getElementById("bottoneCerca").setAttribute("disabled", "");
    document.getElementById("terminaModifica").removeAttribute("hidden", "")

}

function modify() {
    selectBox = document.getElementById("nomiUtenti");
    for (let index = 0; index < utenti.length; index++) {
        if (utenti[index].surname == selectBox.value) {
            console.log(selectBox.value);
            document.getElementById("saluti").innerHTML = "Modifica/Aggiungi Competenze di " + utenti[index].surname + " " + utenti[index].name;
            document.getElementById("radioField").removeAttribute("hidden", "");
            document.getElementById("competenze").removeAttribute("hidden", "");
            oggettoUser = utenti[index];

        }


    }
}

function searchByName() {
    document.getElementById("bottoneAggiungi").setAttribute("disabled", "");
    document.getElementById("bottoneModifica").setAttribute("disabled", "");
    document.getElementById("bottoneCercaNome").setAttribute("disabled", "");
    document.getElementById("bottoneCerca").setAttribute("disabled", "");
    document.getElementById("salutiCompetenze").innerHTML = "Cerca l'utente di Nome: ";
    document.getElementById("nomeInput").removeAttribute("hidden", "")
    document.getElementById("confermaRicercaNome").removeAttribute("hidden", "");
    document.getElementById("terminaRicerca").removeAttribute("hidden", "");

    console.log(utenti);


    
}


function showUsersName(){
    document.getElementById("printedUsers").innerHTML =""

    app=document.getElementById("nomeInput").value.toUpperCase();
    
    for (let index = 0; index < utenti.length; index++) {

        

        for (var key in utenti[index]) {
            if ((utenti[index].name.toUpperCase()== document.getElementById("nomeInput").value.toUpperCase())) {

                document.getElementById("printedUsers").innerHTML += "<ul><br><li> nome: " + utenti[index].name + "</li><br> <li>cognome:" + utenti[index].surname + "" + printObject(utenti[index].competenze) + "</ul><br><br><hr>";

                break;
            }
            
        }
    }

}



    function printObject(obj) {
        var output = '';
        for (var key in obj) {
          output += "</li><br> <li> Competenze: " + key + ': ' + obj[key]+"</li>";
        }
       
        return output;
        
      }


/*
    for (let index = 0; index < utenti.length; index++) {



        for (var key in utenti[index]) {
            if ((utenti[index].name == document.getElementById("nomeInput").value)) {

                document.getElementById("printedUsers").innerHTML += "<ul><br><li> nome: " + utenti[index].name + "</li><br> <li>cognome:" + utenti[index].surname + "</li><br> <li>Competenza " + competenzaRicercata + ": " + utenti[index].competenze[competenzaRicercata] + "</li></ul><br><br><hr>";

                break;
            }
        }
    }
*/






