  //Sticky navbar
  var stickyNavBar = function() {
    var show = $(window).pageYOffset() >= $(".site-nav").offsetTop;
    if (show) {
      $(".site-nav").addClass("sticky");
    } else {
      $(".site-nav").removeClass("sticky");
    }
  }
  
  stickyNavBar();

  $(.window).onscroll(function() {
    stickyNavBar();
  });
