//navlinks menu mobile
let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

// scroll behavior
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//cards flip ao clicar

// var cards = document.querySelectorAll('.card');

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });


// // gallery popup magnific
// $(document).ready(function() {
//   $('.parent-container').magnificPopup({
//       delegate: 'a', // child items selector, by clicking on it popup will open
//       type: 'image',
//       // other options
//       gallery:{enabled:true}
//     });
// });
// $(document).ready(function() {
//   $('.parent-container2').magnificPopup({
//       delegate: 'a', // child items selector, by clicking on it popup will open
//       type: 'image',
//       // other options
//       gallery:{enabled:true}
//     });
// });
// $(document).ready(function() {
//   $('.parent-container3').magnificPopup({
//       delegate: 'a', // child items selector, by clicking on it popup will open
//       type: 'image',
//       // other options
//       gallery:{enabled:true}
//     });
// });
// $(document).ready(function() {
//   $('.parent-container4').magnificPopup({
//       delegate: 'a', // child items selector, by clicking on it popup will open
//       type: 'image',
//       // other options
//       gallery:{enabled:true}
//     });
// });
// $(document).ready(function() {
//   $('.parent-container5').magnificPopup({
//       delegate: 'a', // child items selector, by clicking on it popup will open
//       type: 'image',
//       // other options
//       gallery:{enabled:true}
//     });
// });
// $(document).ready(function() {
//   $('.parent-container6').magnificPopup({
//       delegate: 'a', // child items selector, by clicking on it popup will open
//       type: 'image',
//       // other options
//       gallery:{enabled:true}
//     });
// });
// $(document).ready(function() {
//   $('.parent-container7').magnificPopup({
//       delegate: 'a', // child items selector, by clicking on it popup will open
//       type: 'image',
//       // other options
//       gallery:{enabled:true}
//     });
// });



// popup 

function togglePopupF(){
  document.getElementById("popup-1").classList.toggle("active")
}
function togglePopupS(){
  document.getElementById("popup-2").classList.toggle("active")
}
function togglePopupT(){
  document.getElementById("popup-3").classList.toggle("active")
}
function togglePopupQ(){
  document.getElementById("popup-4").classList.toggle("active")
}