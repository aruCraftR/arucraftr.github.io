var refresh_urls = []
var url_number = 0
var refreshing = false
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index != -1) {
    this.splice(index, 1);
  }
};

function add_refresh_url(url) {
  if (refreshing) {
    return
  }
  url = 'https://purge.jsdelivr.net/gh/aruCraftR/arucraftr.github.io/' + url
  if (refresh_urls.indexOf(url) >= 0) {
    return
  }
  refresh_urls.push(url)
  $("a[onclick='add_refresh_urls(" + url + ")']").css('pointer-events', 'none')
  $('p').append('<br/>' + url)
}

function user_add_refresh_url() {
  if (refreshing) {
    return
  }
  var url = prompt('请输入目标缓存目录：')
  if (url == '' | url == undefined) {
    return
  }
  url = 'https://purge.jsdelivr.net/gh/aruCraftR/arucraftr.github.io/' + url
  if (refresh_urls.indexOf(url) >= 0) {
    alert('计划已存在')
    return
  }
  refresh_urls.push(url)
  $("a[onclick='add_refresh_urls(" + url + ")']").css('pointer-events', 'none')
  $('p').append('<br/>' + url)
}

function start_refresh_url() {
  if (refreshing) {
    return
  }
  $('h1').text('正在刷新')
  refreshing = true
  refresh_url()
}

function reprint_urls() {
  for (i = 0, len = refresh_urls.length; i < len; i++) {
    $('p').append('<br/>' + refresh_urls[i])
  }
}

function refresh_url() {
  if (url_number == refresh_urls.length) {
    $('h1').text('刷新完成')
    refreshing = false
    url_number = 0
    $('p').text('计划列表：')
    if (refresh_urls.length > 0) {
      reprint_urls()
    }
    return
  }
  var data, xhr, err;
  refreshing_url = refresh_urls[url_number]
  xhr = new XMLHttpRequest();
  xhr.onerror = function () {
    $('span').append('<br/>' + refreshing_url + '刷新失败')
  };

  xhr.onload = function () {
    try {
      data = JSON.parse(xhr.responseText)
    } catch (e) {
      $('span').append('<br/>' + refreshing_url + '刷新失败：' + e)
      url_number++
      refresh_url()
      return
    }
    if (data['success']) {
      for (var cdnSuccess in data['cdn']) {
        if (!cdnSuccess) {
          err = true
        }
      }
    } else {
      err = true
    }
    if (err) {
      $('span').append('<br/>' + refreshing_url + '刷新失败：详情请查看控制台')
      console.log(data)
      url_number++
      refresh_url()
      return
    }
    $('span').append('<br/>' + refreshing_url + '刷新完成')
    refresh_urls.remove(refreshing_url)
    refresh_url()
  };
  xhr.open('GET', refreshing_url, true);
  xhr.send();
}
window.onload = function () {
  $('body').css('visibility', 'unset')
}