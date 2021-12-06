function RemoveGrayScale(x) {
    var background_img = document.getElementsByClassName("carousel-img");
    //background_img[x].classList.remove("gray");
    background_img[x].style.filter = "grayscale(0)";
    background_img[x].style.transition = "all 1s ease";
}

function AddGrayScale(x) {
    var background_img = document.getElementsByClassName("carousel-img");
    //background_img[x].classList.add("gray");
    background_img[x].style.filter = "grayscale(100%)";
    background_img[x].style.transition = "all 1s ease";
}