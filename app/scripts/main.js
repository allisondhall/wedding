$window = $(window);
$window.scroll(function() {
  $scroll_position = $window.scrollTop();
    if ($scroll_position > 50) { // if body is scrolled down by 300 pixels
        $('#site-nav').addClass('sticky');

        // to get rid of jerk
        header_height = $('#site-nav').innerHeight();
        $('body').css('padding-top' , header_height);
    } else {
        $('body').css('padding-top' , '0');
        $('#site-nav').removeClass('sticky');
    }
 });