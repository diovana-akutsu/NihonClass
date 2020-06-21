function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function abrir1(){
    window.location.href = "aulas1.html";

    sessionStorage.aula = 1;
    
}

function abrir2(){
    window.location.href = "aulas2.html";
}
