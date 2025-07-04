// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Contact form submission (demo only)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you, we will respond as quickly as possible!');
    contactForm.reset();
  });
}

// Dropdown support for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function(e) {
    if (window.innerWidth <= 900) {
      e.stopPropagation();
      this.classList.toggle('open');
      const menu = this.querySelector('.dropdown-menu');
      if (menu) menu.classList.toggle('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Modal logic
  const authModal = document.getElementById('auth-modal');
  const loginNavBtn = document.getElementById('login-nav-btn');
  const closeModalBtn = document.getElementById('close-modal');
  const showRegister = document.getElementById('show-register');
  const showLogin = document.getElementById('show-login');
  const loginSection = document.getElementById('login-form-section');
  const registerSection = document.getElementById('register-form-section');

  function openModal() {
    if (authModal) {
      authModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      loginSection.style.display = 'block';
      registerSection.style.display = 'none';
    }
  }
  function closeModal() {
    if (authModal) {
      authModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
  if (loginNavBtn) {
    loginNavBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  window.addEventListener('click', function(e) {
    if (e.target === authModal) closeModal();
  });
  if (showRegister) {
    showRegister.addEventListener('click', function(e) {
      e.preventDefault();
      loginSection.style.display = 'none';
      registerSection.style.display = 'block';
    });
  }
  if (showLogin) {
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      loginSection.style.display = 'block';
      registerSection.style.display = 'none';
    });
  }
}); 