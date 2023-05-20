document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('#back-to-top');
    if (window.pageYOffset > 50) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  document.querySelector('#back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.checkDivs = function () {
    const portfolioImages = document.getElementById('portfolio-images');
    const imageCarousel = document.getElementById('image-carousel');

    if (getComputedStyle(portfolioImages).display !== 'none') {
      location.href = '#portfolio-images';
    }

    if (getComputedStyle(imageCarousel).display !== 'none') {
      location.href = '#image-carousel';
    }
  };

  const body = document.getElementsByTagName('body')[0];
  let resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth < 1200) {
      document.querySelector('.big-portfolio').style.display = 'none';
      document.querySelector('.image-carousel').style.display = 'block';
    } else {
      document.querySelector('.big-portfolio').style.display = 'block';
      document.querySelector('.image-carousel').style.display = 'none';
    }
  });
  resizeObserver.observe(body);

  function setupVideos() {
    for (const video of document.querySelectorAll('video')) {
      video.controls = false;
      video.addEventListener('mouseover', () => {
        video.controls = true;
      });
      video.addEventListener('mouseout', () => {
        video.controls = false;
      });
    }
  }
  setupVideos();
});
