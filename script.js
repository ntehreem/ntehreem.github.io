function validarForm() {
    alert("Hey there Astronomer");
    //var nom = document.forms["formulari"]["nom"].value;
    //var nom =document.getElementByName("nom")[0].value; //per name="nom"
    var Nom = document.getElementById("nom").value; //per id="nom"
    // var pass = document.getElementById("pass").value;
    // var doc = document.getElementById("doc").value;
    alert(Nom +" Please coNfirm to this contact form, to confirm select 'OK'");
    if (validaContra(pass) && validaDoc(doc)) {
        alert("Form sent correctly. Thankyou!! " + Nom);
        document.getElementById("formulari").submit();
        return true;
    } else {
        return false;
    }
}