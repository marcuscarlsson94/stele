function myFunction(x) {
    x.classList.toggle("change");
}

$(function () {
    $(".hamburger").click(function () {
        $(".mobile_menu").toggleClass('mobile_menu--active');
        // if ($(this).hasClass("change"))
        //     $('.swap').text('STÄNG');
        // else
        //     $('.swap').text('MENY');
    });
});
