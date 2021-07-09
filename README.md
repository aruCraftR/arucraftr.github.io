# 这里是aruCraftR服务器官网的源码页面
鉴于CSDN有些人搞自动爬虫，这里声明开源许可为 [GNU General Public License v3.0](LICENSE)
<h1 align="center">
  <a href="https://arucraftr-web.vercel.app">
    <img alt="spaceship →~ jekyll" src="https://cdn.jsdelivr.net/gh/aruCraftR/arucraftr.github.io/assets/logo/logo.png" width="800">
  </a>
  <br> 🚀 aruCraftR 🚀 <br>
</h1>


**目前没有做手机样式适配的计划**

#### 网页访问地址(2个源都可以，均不走Cloudflare代理)

**1.Vercel：** https://www.arucraftr.club/

**2.Github Pages：** https://github-page.arucraftr.club/

**网站在PC上有样式显示bug，或对网站有建议(包括新增页面)，可以在qq、discord或issues中提出**

**欢迎提交PR**


### 开发注意事项：  
如果是直接提交(包括PR)到了此存储库，请使用https://github-page.arucraftr.club/ 来查看网页上的显示情况
因为Vercel的团队账号需要收费，所以现阶段是将此存储库Fork到了sophie_desu的个人Github账户下面，看到了此仓库有新的提交我也会尽快Fetch upstream
更新jsDelivr CDN文件后，请访问refresh页面刷新CDN缓存。  
注意：Staticfile CDN上的文件无法更改，但例如要更改materialize.css，可以直接将新样式写入到common.css来达到更改的目的(就是把样式覆盖)，遇到优先级问题可以使用"!important"。  
更改js/css后记得也要将对应的.min文件进行更新，.min.js可以使用根目录下的Clear-JS.bat生成。.min.css可自行使用cssnano或其他在线压缩器生成。  
如果有新增的js文件，请修改根目录下的Clear-JS.bat，加入新增的js文件。
没有看到变化可能是因为浏览器缓存TTL的影响，清理浏览器缓存即可。
