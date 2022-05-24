function saglasan() {
    var checkBox = document.getElementById("zanimljivosti");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function posaljiFormu() {
    var ime = document.getElementById("ime").value
    var prezime = document.getElementById("prezime").value

    var muskiPol = document.getElementById("muski").checked
    var pol = muskiPol ? "muski" : "zenski"
    var email = document.getElementById("email").value

    var formaJeValidna = validirajFormu(ime, prezime,email);


    if (formaJeValidna) {
        var nastavi = confirm("Vasi podaci: \n " + ime + " " + prezime + "\n" + pol + "\n" + email)
        if (nastavi ) {
            var element = document.getElementById("element").value
            alert("Pronašli smo ga! Na mejl " + email + " smo Vam poslali parfem Vaših snova!")
        }

    }
}

function validirajFormu(ime, prezime,email) {
    if (!ime) {
        alert("Niste uneli ime!")
        return false;
    }

    if (!prezime) {
        alert("Niste uneli prezime!")
        return false;
    }

    if(!email){
        alert("Niste uneli mejl adresu!")
        return false;
    }

    return true;
}

$(document).ready(function(){ 
    var d = new Date();
    $("#date")[0].innerHTML = d.toLocaleDateString() + " &nbsp";
})


function reload(){
    console.log('a')
    window.location.reload();
}