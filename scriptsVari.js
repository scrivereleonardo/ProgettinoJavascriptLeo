

let titoli = [];



var titoliInput = document.getElementById("titolo");




function insert() {

    titoli.push(titoliInput.value);

    titoliInput.value = "";


    console.log(titoli)
}

function show() {


    document.getElementById("display").InnerHTML = "";

    document.getElementById("display").innerHTML = "<h2>Lista:</h2> <li>" + titoli.join(" <li> ");




}

var selectBox = document.getElementById('selectRimozione');

function eliminaElemento() {


    for (let index = 0; index < titoli.length; index++) {
        selectBox.innerHTML += `<option value=${titoli[index]}>${titoli[index]}</option>`
    }
    document.getElementById("labelHidden").removeAttribute("hidden");
    selectBox.removeAttribute("hidden");
    document.getElementById("buttonHidden").removeAttribute("hidden");

}

function eliminazioneUfficiale() {
    delete titoli[selectBox.selectedIndex];
    titoli = titoli.filter(item => item !== null);
    selectBox.remove(selectBox.selectedIndex);


}






