function toDashboard(){
    window.location.href="dashboard.html"
}

function toCatalogue(){
    window.location.href="catalogue.html"
}

function toSproduct(){
    window.location.href="sproduct.html"
}

function sidebar(){
    const dashboard = document.querySelector('.dashboard');
    dashboard.classList.add("sidebar-open")
}

function overlay(){
    const dashboard = document.querySelector('.dashboard');
    dashboard.classList.remove("sidebar-open")
}

function sidebar_products(){
    const products_container = document.querySelector('.products-container');
    products_container.classList.add("sidebar-open")
}

function overlay_products(){
    const products_container = document.querySelector('.products-container');
    products_container.classList.remove("sidebar-open")
}

window.onclick = function(e){
    if(!document.querySelector(".avatar-style").contains(e.target)){
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