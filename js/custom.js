document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.querySelector('.sidebar');
  var mainContent = document.querySelector('.main');
  var navbarCustom = document.querySelector('.site-header .navbar-custom');
  var navLinks = document.querySelectorAll('.sidebar .nav-link');
  var toggleButton = document.querySelector('.button-toggle-menu');
  var logoSm = document.querySelector('.sidebar .logo .logo-sm');
  var logoLg = document.querySelector('.sidebar .logo .logo-lg');
  var closeIcon = document.querySelector('.close-icon');

  // Function to update the sidebar state based on window width
  function updateSidebarState() {
    if (window.innerWidth < 768) {
      sidebar.classList.add('collapsed');
      mainContent.classList.add('expanded');
      navbarCustom.classList.add('expanded-navbar');
      navLinks.forEach(function (navLink) {
        navLink.classList.add('collapsed-link');
      });
      logoSm.classList.add('show-logo-sm');
      logoLg.classList.add('show-logo-lg');
    } else {
      // Remove classes if window width is greater than or equal to 767
      sidebar.classList.remove('collapsed');
      mainContent.classList.remove('expanded');
      navbarCustom.classList.remove('expanded-navbar');
      navLinks.forEach(function (navLink) {
        navLink.classList.remove('collapsed-link');
      });
      logoSm.classList.remove('show-logo-sm');
      logoLg.classList.remove('show-logo-lg');
    }
  }

  // Initial call to set the initial state
  updateSidebarState();

  // Event listener for window resize to handle responsiveness
  window.addEventListener('resize', function () {
    updateSidebarState();
  });

  // Toggle button click event
  toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
    navbarCustom.classList.toggle('expanded-navbar');
    navLinks.forEach(function (navLink) {
      navLink.classList.toggle('collapsed-link');
    });
    logoSm.classList.toggle('show-logo-sm');
    logoLg.classList.toggle('show-logo-lg');
  });

  function closeSidebar() {
      sidebar.classList.add('collapsed');
      mainContent.classList.add('expanded');
      navbarCustom.classList.add('expanded-navbar');
      navLinks.forEach(function (navLink) {
          navLink.classList.add('collapsed-link');
      });
      logoSm.classList.add('show-logo-sm');
      logoLg.classList.add('show-logo-lg');
  }

  closeIcon.addEventListener('click', function () {
      closeSidebar();
  });
});