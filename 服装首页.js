// 显示模态窗口的函数，接收一个参数 modalId，表示模态窗口的ID
function showModal(modalId) {
  // 获取页面上ID为 modalId 的元素
  const modal = document.getElementById(modalId);
  // 将该元素的 display 样式设置为 block，以显示模态窗口
  modal.style.display = "block";
}

// 隐藏模态窗口的函数，接收一个参数 modalId，表示模态窗口的ID
function closeModal(modalId) {
  // 获取页面上ID为 modalId 的元素
  const modal = document.getElementById(modalId);
  // 将该元素的 display 样式设置为 none，以隐藏模态窗口
  modal.style.display = "none";
}

// 监听窗口的点击事件
window.onclick = function(event) {
  // 检查点击的目标元素是否是ID为 'loginModal' 或 'registerModal' 的元素
  if (event.target === document.getElementById('loginModal') || event.target === document.getElementById('registerModal')) {
    // 如果是，获取ID为 'loginModal' 和 'registerModal' 的元素
    const modal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    // 隐藏这两个模态窗口
    modal.style.display = "none";
    registerModal.style.display = "none";
  }
}

// 初始化一个变量 currentIndex，用于跟踪当前轮播图的索引
let currentIndex = 0;
// 使用 document.querySelectorAll 选择页面上所有的轮播图滑块图片元素
const slides = document.querySelectorAll('.carousel-slide img');
// 选择所有的轮播图指示器按钮
const indicators = document.querySelectorAll('.carousel-indicators button');
// 获取轮播图图片元素的数量
const slideCount = slides.length;
  function goToSlide(index) {
    // 更新当前索引
    currentIndex = index;
    // 更新指示器状态
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    // 切换轮播图
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${slideWidth * index}px)`;
  }
  
  // 初始化指示器
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });
  
  // 控制按钮事件
  document.querySelector('.carousel-control.prev').addEventListener('click', () => goToSlide(currentIndex - 1));
  document.querySelector('.carousel-control.next').addEventListener('click', () => goToSlide(currentIndex + 1));
  
  // 自动轮播
  setInterval(() => goToSlide(currentIndex + 1), 5000); // 每5秒切换一次
  