function trimiteEmail(){
    var parametriEmail = {
        nume_utilizator: document.getElementById("inputNume").value,
        email_utilizator: document.getElementById("inputEmail").value,
        subiect: document.getElementById("inputSubiect").value 
    }
    emailjs.send('default_service','template_u2xhbys', parametriEmail);
    alert("Email-ul a fost trimis cu succes")
}