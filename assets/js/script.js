function RemoveGrayScale(x) {
    var background_img = document.getElementsByClassName("carousel-img");
    background_img[x].classList.remove("gray");
}

function AddGrayScale(x) {
    var background_img = document.getElementsByClassName("carousel-img");
    background_img[x].classList.add("gray");
}