const formEstilo = document.getElementById("formEstilo");
const campoCor =document.getElementById("CampoCor");
const compoPadding =document.getElementById("CampoPadding");
const campoTamanho =document.getElementById("CampoTamanho");
const retorno =document.getElementById("retorno");

function aplicarEstilo(event){
    event.preventDefault();

    retorno.style.color =campoCor.value;
    retorno.style.padding =compoPadding.value + "px";
    retorno.style.fontSize =campoTamanho.value + "px";
}

formEstilo.addEventListener("submit" , aplicarEstilo);