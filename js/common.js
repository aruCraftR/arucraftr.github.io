window.onpagehide = function () { initialize() };
window.onbeforeunload = function () { initialize() };
$(window).on('load', function () { loaded() });

var is_loaded = false

//当刷新和跳转时
function initialize () {
  if (is_loaded) {
    $('.waifu').css("display", "none");
    $('#load_page').css("display", "block");
    $('body').css("overflow", "hidden");
  };
};

//当所有资源加载完毕时
function loaded () {
  console.log('page loaded!')
  checkScrollPos()
  $('#load_page').css("display", "none");
  $('.reveal').css('visibility','unset');
  $('body').css("overflow", "auto");
  is_loaded = true;
};

//导航栏自适应透明
function checkScrollPos () {
  var scroll_pos = $(this).scrollTop();
  if (scroll_pos > 50) {
    $('.navbar-bg').css("opacity", "1");
  } else {
    $('.navbar-bg').css("opacity", "0");
  };
}

$(this).scroll(function () {
  checkScrollPos()
});