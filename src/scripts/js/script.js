'use strict';

function getCurrentPage() {
  var currentPage = window.location.pathname;
  return currentPage;
}
function addActiveClass(currentPage) {
  switch (currentPage) {
    case '/projects.html':
      document.getElementById('projects').classList.add('active');
      break;
    case '/':
      document.getElementById('about').classList.add('active');
      break;
  }
}

addActiveClass(getCurrentPage());