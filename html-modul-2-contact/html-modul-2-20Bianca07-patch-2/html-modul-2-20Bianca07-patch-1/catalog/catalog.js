var referintaDB = firebase.database().ref();
var referintaPlanete = referintaDB.child("planete");


referintaPlanete.on("child_added", planeta=> {
    afisareCard(planeta.val());
})

var input = getElementById("bara-cautare");
input.addEventLister("keyup", eveniment=>{
    if(eveniment.keyCode == 13){
        cautare(input.value);
    }
})

function cautare(numePlaneta){
    document.getElementById("container-rezultate").innerHTML = "";

    referintaPlanete.orderByChild('nume').startAt(numePlaneta).endAt(numePlaneta+"\uf8ff").on("child_added", planeta =>{
        afisareCard(planeta.val());
    })
}

function afisareCard(planeta){
    var divCard = document.createElement("div");
    divCard.className = "card";

    var rowCard = document.createElement("div");
    rowCard.className = "row";

    var colMD5 = document.createElement("div");
    colMD5.className = "col-MD-5";

    var img = document.createElement("img");
    img.className = "imagine-card";
    img.src = planeta.poza;
    colMD5.appendChild(img);

    var colMD7 = document.createElement("div");
    colMD7.className = "col-MD-7";

    var divContinut = document.createElement("div");
    divContinut.getElementsByClassName = "continut-card";

    var titluCard = document.createElement("h4");
    titluCard.className = "titlu card";
    titluCard.textContent = planeta.nume;
    divContinut.appendChild(titluCard);

    var textCard1 = document.createElement("h6");
    textCard1.textContent = "Marca: " +planeta.marca;
    divContinut.appendChild(textCard1);

    var textCard2 = document.createElement("h6");
    textCard2.textContent = "Pret" +planeta.pret;
    divContinut.appendChild(textCard2);

    var textCard3 = document.createElement("h6");
    textCard3.textContent = "Cai Putere" +planeta.cai
    divContinut.appendChild(textCard3);

    var textCard4 = document.createElement("h6");
    textCard4.textContent = "Descriere" +planeta.descriere
    divContinut.appendChild(textCard4);

    colMD7.appendChild(divContinut);
    rowCard.appendChild(colMD5);
    rowCard.appendChild(colMD7);
    divCard.appendChild(rowCard);

    document.getElementById("container-rezultate").appendChild(divCard);
}