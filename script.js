function validarForm() {
    alert("Hey there Astronomer");
    var Nom = document.getElementById("nom").value;
    alert(Nom + " Please confirm to this contact form, to confirm select 'OK'");
    alert(Nom + " Your form has been sent correctly we'll shortly get in touch with you.");
    if (validaContra(pass) && validaDoc(doc)) {
        alert("Form sent correctly. Thankyou!! " + Nom);
        document.getElementById("formulari").submit();
        return true;
    } else {
        return false;
    }
}