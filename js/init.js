//  $(document).ready(function(){
//       $('.parallax').parallax();
//     });
//    function scrolleffect() {
//     var scroll;
//     $(window).scroll(function(){
//         scroll = $(window).scrollTop();
//         if (scroll > 100) {
//             $(".navblack").css({"background-color":"rgba(255,255,255,1)"});
//             $(".navblack").removeClass('navbig z-depth-0');
//             $(".navblack").addClass('z-depth-12');
//             // $(".navblack").css({"border-bottom-left-radius":"60px","border-bottom-right-radius":"60px"});
//             $(".navlink").addClass('black-text');
//             $(".navlink").removeClass('white-text');
//             $(".brand-logo").addClass('pink-text text-accent-3');
//             $(".brand-logo").css({"padding-left":"2%","padding-right":"2%","letter-spacing":"2px"});
//             $(".brand").css({"transform":"scale(0.8)","margin-top":"3%"});
//         }else{
//             $(".navblack").css({"background-color":"rgba(255,255,255,0.0)"});
//             $(".navblack").addClass('navbig z-depth-0');
//             $(".navblack").removeClass('z-depth-12');
//             // $(".navblack").css({"border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"});
//             $(".navlink").removeClass('black-text');
//             $(".navlink").addClass('white-text');
//             $(".brand-logo").removeClass('pink-text text-accent-3');
//             $(".brand-logo").css({"padding-left":"0%","padding-right":"0%","letter-spacing":"2px"});
//             $(".brand").css({"transform":"scale(1)","margin-top":"4%"});
//         }
//         if (scroll > 650) {
//             $(".navblack").css({"border-bottom-left-radius":"60px","border-bottom-right-radius":"60px"});
//         } else {
//             $(".navblack").css({"border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"});
//         } 
//     });
// }
        $(window).on('scroll', function() {

            var st = $(this).scrollTop();

            $(".contain").css({ 
                'transform' : "translate3d(0px,"+(st/2)+"px, 0px)",
                'opacity' : 1 - st/700
            });
            $(".main-card").css({ 
                'transform' : "translate3d(0px,"+(st/5)+"px, 0px)",
            });
        });
$('.dropdown-button').dropdown({
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
    }
  );
$(".button-collapse").sideNav();
        /* ---- particles.js config ---- */

// particlesJS("particles-js", {
//   "particles": {
//     "number": {
//       "value": 150,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#f50057"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 1,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#f50057",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 6,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });
// $(function(){
//     $(".typed").typed({
//         strings: ["Web Designer.", "Android Developer.", "Web Artisan.","Photo Manipulator.","Gamer.","Design Enthusiast.","Web Developer.","UI Designer.","UX Designer.","Front-end Developer.","Mobile Legends Player.","EDM Enthusiast."],
//         // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
//         stringsElement: null,
//         // typing speed
//         typeSpeed: 150,
//         // time before typing starts
//         startDelay: 1200,
//         // backspacing speed
//         backSpeed: 20,
//         // time before backspacing
//         backDelay: 500,
//         // loop
//         loop: true,
//         // false = infinite
//         loopCount: 5,
//         // show cursor
//         showCursor: true,
//         // character for cursor
//         cursorChar: "|",
//         // attribute to type (null == text)
//         attr: null,
//         // either html or text
//         contentType: 'html',
//         // call when done callback function
//         callback: function() {},
//         // starting callback function before each string
//         preStringTyped: function() {},
//         //callback for every typed string
//         onStringTyped: function() {},
//         // callback for reset
//         resetCallback: function() {}
//     });
// });
//   $(document).ready(function(){
//     $('ul.tabs').tabs();
//   });