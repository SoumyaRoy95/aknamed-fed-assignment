function toDashboard(){
    window.location.href="dashboard.html"
}

function toCatalogue(){
    window.location.href="catalogue.html"
}

function infoload() {
    document.getElementById("infotab").style.borderBottom = "2px solid blue"
    document.getElementById("infocontent").style.display = "flex"
    document.getElementById("desctab").style.borderBottom = "2px solid white"
    document.getElementById("subcontent").style.display = "none"
}

function descload() {
    document.getElementById("infotab").style.borderBottom = "2px solid white"
    document.getElementById("infocontent").style.display = "none"
    document.getElementById("desctab").style.borderBottom = "2px solid blue"
    document.getElementById("subcontent").style.display = "flex"
}

function modal_open(){
    const modal = document.querySelector('.modal')
    modal.classList.add('modal-open')
}

function modal_close(){
    const modal = document.querySelector('.modal')
    modal.classList.remove('modal-open')
}

function sidebar(){
    const container = document.querySelector('.container');
    container.classList.add("sidebar-open")
}

function overlay(){
    const container = document.querySelector('.container');
    container.classList.remove("sidebar-open")
}

function logout(){
    const container = document.querySelector('.container');
    container.classList.toggle("logout-open")
}

function signout(){
    window.location.href="index.html"
}