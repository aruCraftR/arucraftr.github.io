//使用MCSM面板API
window.onload = function () {
  $(".server-status").each(function () {
    fetch("https://console.arucraftr.club/api/status/" + $(this).data("server-id"))
      .then(response => response.json())
      .then(json => printServerStatus($(this), json))
      .catch(err => printServerError($(this), err));
  })
};

function printServerStatus($this, status) {
  if (status["id"]) {
    if (status["status"]) {
      $this.css("background-color", "rgba(40, 197, 61, 0.5)")
      $this.find(".version").text(status["version"])
      $this.find(".player").text(status["current_players"] + "/" + status["max_players"])
      $this.find(".motd").text(status["motd"])
    } else {
      $this.css("background-color", "rgba(140, 140, 140, 0.5)")
      $this.find(".version").text("服务器不在线")
      $this.find(".motd").text("离线时间：" + status["lastDate"])
    }
  } else if (status["id"] == null) {
    $this.css("background-color", "rgba(194, 42, 42, 0.5)")
    $this.find(".motd").text("服务器ID不存在")
  } else {
    console.log(status)
    $this.css("background-color", "rgba(140, 140, 140, 0.5)")
    $this.find(".motd").text("未知错误(请查看控制台)")
  }
}

function printServerError($this, err) {
  console.log(err)
  $this.find(".motd").text("状态获取失败")
  $this.css("background-color", "rgba(194, 42, 42, 0.5)")
}

/*
//使用MCSM面板API(轮流获取)
var serverLiList = []
var serverNameList = []
var num = 0
var retry = 0

window.onload = function () {
  $(".server-status").each(function () {
    serverLiList.push($(this));
    serverNameList.push($(this).data("server-name"));
  })
  printServerStatus(serverNameList[0])
};

function printServerStatus(serverName) {
  if (num == serverNameList.length) {
    return
  }
  getServerStatus(serverName, function callBack(err, status) {
    var $this = serverLiList[num]
    if (err) {
      console.log(err)
      if (retry == 5) {
        retry = 0
        $this.find(".motd").text("状态获取失败")
        serverLiList[num].css("background-color", "rgba(194, 42, 42, 0.5)")
        num++
        printServerStatus(serverNameList[num])
      } else {
        retry++
        $this.find(".motd").text("状态获取失败，正在重新获取(" + retry + "/5)")
      }
    } else {
      if (status) {
        $this.css("background-color", "rgba(40, 197, 61, 0.5)")
        $this.find(".version").text(status["version"])
        $this.find(".player").text(status["current_players"] + "/" + status["max_players"])
        $this.find(".motd").text(status["motd"])
        num++
        printServerStatus(serverNameList[num])
      } else {
        console.log(status)
        $this.find(".motd").text("服务器不在线")
        serverLiList[num].css("background-color", "rgba(140, 140, 140, 0.5)")
        num++
        printServerStatus(serverNameList[num])
      }
    }
  })
}

async function getServerStatus(serverName, callBack) {
  var apiUrl = "https://console.arucraftr.club/api/status/" + serverName;
  try {
    var reponse = await fetch(apiUrl);
    var status = await reponse.json()
  } catch (e) {
    callBack(e)
    return
  }
  callBack(undefined, status)
};
*/

//使用Minecraft API
/*var number = 0;
var server_li_list = []
var server_ip_list = []
function getServerStatus (server_ip) {
  server_li_list[number].find("div").find(".motd").text("状态：正在获取");
  MinecraftAPI.getServerStatus(server_ip, { port: 25565 }, function callBack (err, status) {
    if (err) {
      server_li_list[number].find("img").css("opacity", "0")
      if (err == "Connection refused (os error 111)"){
        server_li_list[number].css("background-color", "rgba(140, 140, 140, 0.5)")
        server_li_list[number].find("div").find(".motd").text("服务器不在线");
      }else{
        server_li_list[number].css("background-color", "rgba(194, 42, 42, 0.5)")
        server_li_list[number].find("div").find(".motd").text("获取失败：" + err);
      }
    } else {
      printServerStatus(server_li_list[number], status)
    }
    number += 1
    if (number != server_ip_list.length) {
      getServerStatus(server_ip_list[number]);
    }
  })
};

function printServerStatus ($this, server_status) {
  $this.css("background-color", "rgba(40, 197, 61, 0.5)")
  $this_div = $this.find("div")
  if (server_status["favicon"] != null) { $this.find("img").attr("src", server_status["favicon"]); };
  $this_div.find("span").text(server_status["players"]["now"] + "/" + server_status["players"]["max"]);
  $this_div.find(".motd").text(server_status["motd"]);
}

window.onload = function () {
  $(".server-status").each(function () {
    server_li_list.push($(this))
    server_ip_list.push($(this).data("server-ip"))
  })
  getServerStatus(server_ip_list[0]);
};

//HTML
<ul>
  <li class="server-status" data-server-ip="arucraftr.club" style="background-color: #fdec0080;">
    <img>
    <div>
      <p>生存服[arucraftr.club]</p><span></span><br>
      <p class="motd">状态：等待获取</p>
    </div>
  </li>
  <li class="server-status" data-server-ip="mod.mc.114514.ovh" style="background-color: #fdec0080;">
    <img>
    <div>
      <p>mod服[mod.arucraftr.club]</p><span></span><br>
      <p class="motd">状态：等待获取</p>
    </div>
  </li>
  <li class="server-status" data-server-ip="snapshot.arucraftr.club" style="background-color: #fdec0080;">
    <img>
    <div>
      <p>快照服[snapshot.arucraftr.club]</p><span></span><br>
      <p class="motd">状态：等待获取</p>
    </div>
  </li>
</ul>
*/