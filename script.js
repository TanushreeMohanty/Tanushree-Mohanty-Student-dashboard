document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    menuToggle.addEventListener('click', function() {
        if (sidebar.style.transform === 'translateX(0px)') {
            sidebar.style.transform = 'translateX(-100%)';
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.style.transform = 'translateX(0)';
            mainContent.style.marginLeft = '250px';
        }
    });
});

// RADIAL PROGRESS
/* Example code for updating a chart with JS */

function loop(t) {
    requestAnimationFrame(loop);
    updateCharts(Math.floor(t / 16) % 100);
  }
  
  function updateCharts(value) {
    charts.forEach(chart => setChartValue(chart, value));
  }
  
  function setChartValue(chart, value) {
    chart.style.setProperty('--percent', value);
  }
  
  let charts = document.querySelectorAll('.js');
  
  loop();
  
//   TRANSPARENT NAVBAR ON SCROLL
document.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
      header.classList.add('transparent');
  } else {
      header.classList.remove('transparent');
  }
});

