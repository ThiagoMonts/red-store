var menuItens = document.getElementById("menu-itens")

menuItens.style.maxHeight = "0px"

function menuToggle() {
    if (menuItens.style.maxHeight == "0px") {
        menuItens.style.maxHeight = "200px"
    } else {
        menuItens.style.maxHeight = "0px"
    }
}

/* JS for product galley */

var ProductImg = document.getElementById("productImg")
var SmallImg = document.getElementsByClassName("small-img")

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src
}
SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src
}
SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src
}
SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src
}

