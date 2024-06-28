
// swiper for logos
const swiper = new Swiper('.logoSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    slidesPerView: 7,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 7,

        },
        768: {
            slidesPerView: 4,

        },
        425: {
            slidesPerView: 3,

        },
        0: {
            slidesPerView: 2,

        }
    }
});


// swiper for card items
const swiper2 = new Swiper('.cards', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 300,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 1.5,
            spaceBetween: 40
        }
    }
});


// scroll animation 1
document.addEventListener('scroll' , function (){
    let window_scroll_position = document.documentElement.scrollTop;
    let h2 = document.getElementById('h2');
    let h2_scroll_position = h2.offsetTop;

    let leftBox = document.getElementById('leftBox');
    let rightBox = document.getElementById('rightBox');
    if( window_scroll_position >= h2_scroll_position ){
        leftBox.style.left = "0";
        rightBox.style.right = "0";
    }

});

// scroll animation 2 with jQuery

// $(document).scroll( function (){
//     let scrollPosition = $(document).scrollTop();
//     let homepage1Position = $('#homePage1').offset().top;
//     if( scrollPosition >= homepage1Position ){
//         $('#video').css({
//             opacity : '1',
//             top : '0',
//             visibility : 'visible'
//         });
//     }
// } )


// simple scroll animation with GSAP
ScrollTrigger.create({
    trigger: '#homePage1',
    start: 'top top',
    endTrigger: '#h2',
    end: 'bottom 50%+=100px',
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
        $('#video').css({
            opacity : '1',
            top : '0',
            visibility : 'visible'
        });
    }
});




// advanced animation with GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// You can use a ScrollTrigger in a tween or timeline
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#h2",
        start: "top bottom",
        end: "bottom top",
    }
})
tl.fromTo("#signin", { opacity: 0 , x: -100 }, { opacity: 1 , x: 0, duration: 1 })
tl.fromTo("#signin2", { opacity: 0 , x: 100 }, { opacity: 1 , x: 0, duration: 1 } , '-=0.5' )
tl.fromTo("#leftBox", { opacity: 0 , x: -400 }, { opacity: 1 , x: 0, duration: 0.5 } , '-=0.7' )
tl.fromTo("#rightBox", { opacity: 0 , x: 400 }, { opacity: 1 , x: 0, duration: 0.5 } , '-=0.3' )
tl.to('#h2', {
        duration: 1,
        text: {
            value: "Your Work And Code Engine",
        },
});
tl.to('#h2',{ y: -20, duration: 0.5 });


// mobile menu
$('#menuBtn , .menuLayer').click(function (){
    $('.mobileMenu , .menuLayer').toggleClass('active');
})