
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
  