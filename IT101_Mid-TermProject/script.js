
// Back to top functionality
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

// Navigation visibility
const navItems = document.querySelectorAll('nav ul li:not(:first-child)');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navItems.forEach(item => {
  const link = item.querySelector('a');
  if (link && link.getAttribute('href') === currentPage) {
    navItems.forEach(navItem => navItem.classList.add('hidden'));
    link.classList.add('selected');
  }
});
