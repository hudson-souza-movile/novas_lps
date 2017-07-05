function contraste() {
	document.getElementById("body").classList.toggle("contraste-on");
	var elem1 = document.getElementsByClassName("contraste")[0];
    if (elem1.innerHTML=="Ativar contraste") {
    	elem1.innerHTML = "Desativar contraste";
        localStorage.setItem("tem_contraste", "sim");
        var x = localStorage.getItem("tem_contraste");
    } 
    else {
    	elem1.innerHTML = "Ativar contraste";
        localStorage.setItem("tem_contraste", "nao");
        var x = localStorage.getItem("tem_contraste");
    }
   
}

function load_contraste() {

    if(!localStorage.getItem('tem_contraste')) {
        localStorage.setItem("tem_contraste", "nao");
    }

    var tem_contraste = localStorage.getItem('tem_contraste');

    if(tem_contraste == "sim") {
        document.getElementById("body").classList.add("contraste-on");
        document.getElementsByClassName("contraste")[0].innerHTML = "Desativar contraste";
    }
    else {
        document.getElementsByClassName("contraste")[0].innerHTML = "Ativar contraste";
    }

}