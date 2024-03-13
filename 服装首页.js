function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target === document.getElementById('loginModal') || event.target === document.getElementById('registerModal')) {
      const modal = document.getElementById('loginModal');
      const registerModal = document.getElementById('registerModal');
      modal.style.display = "none";
      registerModal.style.display = "none";
    }
  }
  let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide img');
  const indicators = document.querySelectorAll('.carousel-indicators button');
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
  