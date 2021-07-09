if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE? 这tm什么年代了还在用IE
  alert('朋友，IE浏览器未适配哦~\n如果是 360、QQ 等双核浏览器，请关闭 IE 模式！');
}

//html中调用的是此js的压缩文件，更改此js后记得也要更改压缩文件