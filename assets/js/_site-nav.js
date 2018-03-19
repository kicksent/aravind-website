  //Sticky navbar
  var stickyNavBar = function() {
    var show = $(window).pageYOffset() >= $(".masthead").offsetTop;
    if (show) {
      $(".masthead").addClass("sticky");
    } else {
      $(".masthead").removeClass("sticky");
    }
  }
  
  stickyNavBar();

  $(.window).onscroll(function() {
    stickyNavBar();
  });
