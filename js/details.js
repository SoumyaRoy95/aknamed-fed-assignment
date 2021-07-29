function toDashboard(){
    window.location.href="dashboard.html"
}

function toCatalogue(){
    window.location.href="catalogue.html"
}

function infoload() {
    document.getElementById("infotab").style.borderBottom = "3px solid #078FFE"
    document.getElementById("infocontent").style.display = "flex"
    document.getElementById("infotablabel").style.color = "black"
    document.getElementById("desctab").style.borderBottom = "3px solid white"
    document.getElementById("subcontent").style.display = "none"
    document.getElementById("desctablabel").style.color = "gray"
}

function descload() {
    document.getElementById("infotab").style.borderBottom = "3px solid white"
    document.getElementById("infocontent").style.display = "none"
    document.getElementById("infotablabel").style.color = "gray"
    document.getElementById("desctab").style.borderBottom = "3px solid #078FFE"
    document.getElementById("subcontent").style.display = "flex"
    document.getElementById("desctablabel").style.color = "black"
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

window.onclick = function(e){
    if(!document.querySelector(".profile-icon").contains(e.target)){
        document.querySelector('.container').classList.remove("logout-open")
    }
}

function logout(){
    const container = document.querySelector('.container');
    container.classList.toggle("logout-open")
}

function signout(){
    window.location.href="index.html"
}

const btnScrollUp = document.querySelector('.scrolltop')
btnScrollUp.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})