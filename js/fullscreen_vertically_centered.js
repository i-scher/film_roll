// Generated by CoffeeScript 1.7.1
(function() {
  jQuery(function() {
    this.film_rolls = new FilmRoll({
      container: '#film_roll',
      vertical_center: true
    });
    return jQuery('a.more_link').click(function() {
      return jQuery('#more').slideToggle();
    });
  });

}).call(this);