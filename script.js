var menuItens = document.getElementById("menu-itens")

menuItens.style.maxHeight = "0px"

function menuToggle() {
    if (menuItens.style.maxHeight == "0px") {
        menuItens.style.maxHeight = "200px"
    } else {
        menuItens.style.maxHeight = "0px"
    }
}