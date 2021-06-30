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