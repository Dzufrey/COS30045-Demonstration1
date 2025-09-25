function showPage(page) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  // show selected page
  document.getElementById('page-' + page).style.display = 'block';

  // update active nav
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  document.getElementById('nav-' + page).classList.add('active');
}

// footer year
document.getElementById('year').innerText = new Date().getFullYear();

// -------- Default Page Load --------
document.addEventListener("DOMContentLoaded", function() {
  showPage('home');
});
