
// $(document).ready(function(){

//     $(".js--services-section").waypoint(function(direction){
//         if(direction=="down"){
//             $("nav").addClass("sticky")
//         }else{
//             $("nav").removeClass("sticky");
//         }
//     });
    
        var mixer = mixitup(".container");
// });




window.onscroll = function() {myFunction()};

var mainNav = document.getElementById("main-nav");
var sticky = mainNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    mainNav.classList.add("sticky");
  } else {
    mainNav.classList.remove("sticky");
  }
}


function openNav(){
  document.getElementById('myNav').style.width='100%'
}
function closeNav(){
  document.getElementById('myNav').style.width='0%'
}