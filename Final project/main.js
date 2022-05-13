var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

// mobile navigation menu
var naviGation = document.getElementById("naviGation");
      function displayMenu() {
        naviGation.style.right = "0";
      }
      function menuHide() {
        naviGation.style.right = "-200px";
      }