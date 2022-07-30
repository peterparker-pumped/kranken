/* Date and Time */

var dt = new Date().toUTCString();
document.getElementById('datetime').innerHTML = dt;

/* Button to Top */


const btntotop = document.querySelector(".btn-to-top .btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        btntotop.classList.add("active");
    } else {
        btntotop.classList.remove("active");
    }
});


$('.btn-to-top .btn').click(
    function () {
        $('html,body').animate({
            scrollTop: 0
        }, 50)
    });

/* Owl Carousel */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 10000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        760: {
            items: 4
        },
        1000: {
            items: 7
        }
    }
});

/* Copy to clipboard */

function copyclipboard() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}