# 这里是 aruCraftR 服务器官网的源码页面

鉴于 CSDN 有些人搞自动爬虫，这里声明开源许可为 [GNU General Public License v3.0](LICENSE)

<h1 align="center">
  <a href="https://arucraftr-web.vercel.app">
    <img alt="spaceship →~ jekyll" src="https://jsd.onmicrosoft.cn/gh/aruCraftR/arucraftr.github.io/assets/logo/logo.png" width="800">
  </a>
  <br> 🚀 aruCraftR 🚀 <br>
</h1>

**目前没有做手机样式适配的计划**

#### 网页访问地址(2 个源都可以，均不走 Cloudflare 代理)

**1.Vercel：** https://www.arucraftr.club/

**2.Github Pages：** https://github-page.arucraftr.club/

**网站在 PC 上有样式显示 bug，或对网站有建议(包括新增页面)，可以在 qq、discord 或 issues 中提出**

**欢迎提交 PR**

### 开发注意事项：

如果是直接提交(包括 PR)到了此存储库，请使用https://github-page.arucraftr.club/ 来查看网页上的显示情况
因为 Vercel 的团队账号需要收费，所以现阶段是将此存储库 Fork 到了 noeru_desu 的个人 Github 账户下面，看到了此仓库有新的提交我也会尽快 Fetch upstream
更新 jsDelivr CDN 文件后，请访问 refresh 页面刷新 CDN 缓存。  
注意：Staticfile CDN 上的文件无法更改，但例如要更改 materialize.css，可以直接将新样式写入到 common.css 来达到更改的目的(就是把样式覆盖)，遇到优先级问题可以使用"!important"。  
更改 js/css 后记得也要将对应的.min 文件进行更新，.min.js 可以使用根目录下的 Clear-JS.bat 生成。.min.css 可自行使用 cssnano 或其他在线压缩器生成。  
如果有新增的 js 文件，请修改根目录下的 Clear-JS.bat，加入新增的 js 文件。
没有看到变化可能是因为浏览器缓存 TTL 的影响，清理浏览器缓存即可。
