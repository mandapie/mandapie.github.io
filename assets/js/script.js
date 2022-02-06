
$( document ).ready(function() {
    var isChecked = localStorage.getItem("darkmode-switch") === 'true'? true: false;
    $('#darkmode-switch').prop('checked', isChecked || false);

    if ($('#darkmode-switch').is(':checked')) {
        $("body").addClass("darkmode");
        $(".btn").addClass("darkmode");
        $(".card-body").addClass("darkmode");
        $(".card-footer").addClass("darkmode");
        $(".text-muted").addClass("darkmode");
      } else {
          $("body").removeClass("darkmode");
          $(".btn").removeClass("darkmode");
          $(".card-body").removeClass("darkmode");
          $(".card-footer").removeClass("darkmode");
          $(".text-muted").removeClass("darkmode");
      }

    $("#darkmode-switch").change(function() {
        localStorage.setItem("darkmode-switch", $(this).is(':checked')); // store input stage when page is refreshed

        if ($(this).is(':checked')) {
          $("body").addClass("darkmode");
          $(".btn").addClass("darkmode");
          $(".card-body").addClass("darkmode");
          $(".card-footer").addClass("darkmode");
          $(".text-muted").addClass("darkmode");
        } else {
            $("body").removeClass("darkmode");
            $(".btn").removeClass("darkmode");
            $(".card-body").removeClass("darkmode");
            $(".card-footer").removeClass("darkmode");
            $(".text-muted").removeClass("darkmode");
        }
      });

      //#region portfolio section
      $(".collaspableHeader").click(function() {
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up')
      });
      //#endregion
});

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