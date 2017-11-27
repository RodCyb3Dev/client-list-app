/*************************
 preloader
 *************************/
$("#load").fadeOut();
$("#loading")
  .delay(0)
  .fadeOut("slow");
/*************************
 Home Intro Typing
 *************************/

$("#typed").typed({
    stringsElement: $('#typed-strings'),
    typeSpeed: 20,
    backDelay: 500,
    loop: false,
    contentType: 'html',
    loopCount: false,
    callback: function () {
        foo();
    },
    resetCallback: function () {
        newTyped();
    }
});


$(".reset").on("click", function (e) {
    $("#typed").typed('reset');
});



function newTyped() {
}

function foo() {
    console.log("Callback");
}

/**** Swiper Testimonials Slider ****/
/* more information : http://idangero.us/swiper/demos/#.V_0G2Tjy31V */
var swiper = new Swiper('.section-testimonials .swiper-container', {
    pagination: '.section-testimonials .swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

/*************************
 Back To Top
 *************************/

 jQuery(document).ready(function ($) {
        // hide #back-top first
        $(".goto-top").hide();

        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.goto-top').fadeIn();
                } else {
                    $('.goto-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('.goto-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    });
