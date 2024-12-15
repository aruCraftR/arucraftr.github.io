(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stoppropagation: true
  }
  );
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip({ delay: 100 });
  $('.carousel').carousel({indicators: true});
})(jQuery); // end of jQuery name space