window.onload=function(){
  var s = 20
  console.log('开始计时')
  setInterval(() => {
    console.log(s)
    $('#back-home-timer').text(s + '秒后自动返回主页')
    s--
    if(s < 0){
      $('#back-home-timer').text('正在返回主页')
      window.location.href = "/"
    }
  }, 1000);
}