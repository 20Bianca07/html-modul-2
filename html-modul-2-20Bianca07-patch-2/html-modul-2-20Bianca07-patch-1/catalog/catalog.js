var referintaDB = firebase.database().ref();
var referintaPlanete = referintaDB.child("planete");

referintaPlanete.on("child_added", planeta=> {
    console.log(planeta.val());
})