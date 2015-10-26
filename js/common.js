var scrollingScreen = (function() {
  var screen = 0,
      $sections = $('.sections'),
      //sectionNumber = $sections.find('.section').length;
      scroll = true;

  return {
    init: function() {
      $('.screen').on('mousewheel', function(event) {
        var position;

        if (scroll) {

          if (event.deltaY > 0 && screen > 0) {
            screen--;
            scroll = false;
          } else if (event.deltaY < 0 && screen < 3) { //(sectionNumber - 1)
            screen++;
            scroll = false;
          }
          $('nav div ul li.active').removeClass("active");
          $('nav div ul li').eq(screen).addClass("active");

          //console.log($('nav div ul li').eq(screen).attr("class"));
          position = (-screen * 100) + '%';
          $sections.css('top', position);
          $('nav div ul li a').click(function(){
              $sections.css('top', position);
          })

        }

      });

      $sections.on('transitionend', function() {
        scroll = true;
      });
      $('nav div ul li').click(function() {
          $('nav div ul li.active').removeClass("active");
          console.log($('nav div ul li').index(this));
          $('nav div ul li').eq($('nav div ul li').index(this)).addClass("active");

          position = (-$('nav div ul li').index(this) * 100) + '%';
          $sections.css('top', position);
      });

    }
  }
}());

$(document).ready(function() {
  scrollingScreen.init();
});
