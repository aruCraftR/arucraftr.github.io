'use strict';

//html中调用的是此js的压缩文件，更改此js后记得也要更改压缩文件

$(function ($) {

  //------------------------------------------------------------------------------------------------------------------
  // Variables
  //------------------------------------------------------------------------------------------------------------------

  var THEME_COLORS = {
    DEFAULT: '#8fb7bf',
    PRIMARY: '#a49fe1',
    SUCCESS: '#8fb7bf',
    INFO: '#6cc5a7',
    WARNING: '#f7a053',
    DANGER: '#ec6957'
  };

  var SEND_MAIL_PROCESSOR = 'sendmail.php';

  var $body_html = $('body, html'),
    $html = $('html'),
    $body = $('body'),

    $preloader = $('#preloader'),
    $loader = $preloader.find('.loader');

  //------------------------------------------------------------------------------------------------------------------
  // Is mobile
  //------------------------------------------------------------------------------------------------------------------

  var ua_test = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
    is_mobile = ua_test.test(navigator.userAgent);

  $html.addClass(is_mobile ? 'mobile' : 'no-mobile');

  //------------------------------------------------------------------------------------------------------------------
  // Finish loading
  //------------------------------------------------------------------------------------------------------------------

  $(window).on('load', function () {

    /* Remove preloader */
    console.log('page loaded!')

    $loader.delay(500).fadeOut();
    $preloader.delay(1500).fadeOut('slow');

    setTimeout(function () { $body.addClass('loaded'); }, 1000);

    window.sr = ScrollReveal();
    $('.reveal').each(function () {
      var $this = $(this),
        config = {
          easing: 'cubic-bezier(.51, .07, .75, .95)',
          mobile: false,
          scale: 1.01
        };
      var data_container = $this.data('reveal-container'),
        data_origin = $this.data('reveal-origin'),
        data_distance = $this.data('reveal-distance'),
        data_duration = $this.data('reveal-duration'),
        data_delay = $this.data('reveal-delay'),
        data_easing = $this.data('reveal-easing'),
        data_scale = $this.data('reveal-scale'),
        data_opacity = $this.data('reveal-opacity'),
        data_reset = $this.data('reveal-reset');
      if (typeof data_container !== 'undefined') config['container'] = data_container;
      if (typeof data_origin !== 'undefined') config['origin'] = data_origin;
      if (typeof data_distance !== 'undefined') config['distance'] = data_distance;
      if (typeof data_duration !== 'undefined') config['duration'] = data_duration;
      if (typeof data_delay !== 'undefined') config['delay'] = data_delay;
      if (typeof data_easing !== 'undefined') config['easing'] = data_easing;
      if (typeof data_scale !== 'undefined') config['scale'] = data_scale;
      if (typeof data_opacity !== 'undefined') config['opacity'] = data_opacity;
      if (typeof data_reset !== 'undefined') config['reset'] = 1 ? true : false;

      sr.reveal($this, config);
    });

  });


  //------------------------------------------------------------------------------------------------------------------
  // Additional
  //------------------------------------------------------------------------------------------------------------------

  function hex2RGBA (hex, opacity) {

    var r, g, b;

    hex = hex.replace('#', '');

    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
  }

});

//html中调用的是此js的压缩文件，更改此js后记得也要更改压缩文件