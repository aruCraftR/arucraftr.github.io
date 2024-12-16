// script.js

// 获取当前页面的路径
const currentPath = window.location.pathname;

// 判断当前页面是否是主页
if (currentPath.endsWith('index.html')) {
  // 获取主页链接
  const homeLink = document.getElementById('home-link');
  
  // 为主页链接添加 'active' 类
  homeLink.classList.add('active');
}

// 等待页面加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".main-nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetPage = e.target.getAttribute("href"); // 获取目标页面的 URL
            const currentPath = window.location.pathname.replace(/\/$/, ""); // 去掉尾部的 '/'
            let targetPath = targetPage.replace(/\/$/, ""); // 去掉目标页面的尾部 '/'

            // 如果 targetPage 是相对路径, 则需要处理成绝对路径
            if (targetPath.startsWith("/")) {
                targetPath = targetPath;
            } else {
                targetPath = window.location.pathname.replace(/\/[^\/]+$/, "/") + targetPath;
            }

            // 如果点击的链接目标是当前页面，则阻止跳转
            if (currentPath === targetPath) {
                console.log("已在当前页面，无需跳转");
                e.preventDefault(); // 阻止页面跳转
                return; // 终止后续操作
            }

            console.log(`Target Page: ${targetPage}`); // 调试输出目标页面
            e.preventDefault(); // 防止直接跳转

            // 给整个页面添加动画
            document.body.classList.add("hide");

            // 等待动画结束后跳转
            setTimeout(() => {
                console.log(`Redirecting to ${targetPage}`); // 调试输出跳转目标
                window.location.href = targetPage; // 跳转到目标页面
            }, 500); // 与 CSS 动画持续时间相同
        });
    });
});
