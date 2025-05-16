document.addEventListener('DOMContentLoaded', () => {
  // --- Login Modal Functionality ---
  const loginBtn = document.getElementById('login-btn');
  const loginModal = document.getElementById('login-modal');
  const loginCloseBtn = document.querySelector('.close');
  const loginForm = document.getElementById('login-form');

  // Open login modal
  loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });

  // Close login modal when clicking the close button
  loginCloseBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });

  // Close login modal when clicking outside the modal
  window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Handle login form submission
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form refresh
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy validation
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      loginModal.style.display = 'none';
    } else {
      alert('Invalid username or password!');
    }
  });

  // --- Settings Modal Functionality ---
  const settingsBtn = document.getElementById('settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const settingsCloseBtn = document.querySelector('.close-btn');

  // Open settings modal
  settingsBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    settingsModal.style.display = 'block';
  });

  // Close settings modal
  settingsCloseBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
  });

  // Close settings modal when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === settingsModal) {
      settingsModal.style.display = 'none';
    }
  });

  // --- Remember Me Functionality ---
  const rmCheck = document.getElementById("rememberMe");
  const emailInput = document.getElementById("email");

  if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
  } else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
  }

  // Save Remember Me data
  rmCheck.addEventListener('change', () => {
    if (rmCheck.checked && emailInput.value !== "") {
      localStorage.username = emailInput.value;
      localStorage.checkbox = "true";
    } else {
      localStorage.username = "";
      localStorage.checkbox = "";
    }
  });

  // --- Hamburger Menu Functionality ---
  const navOptions = document.querySelector('.nav-options');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.addEventListener('click', () => {
    navOptions.classList.toggle('active');
  });

  // --- Slide Visibility on Scroll ---
  const slides = document.querySelectorAll('.slide');
  window.addEventListener('scroll', () => {
    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      slide.classList.toggle('active', isPartiallyVisible);
    });
  });
});


// Add event listeners to each left-bar `<li>`
document.querySelectorAll(".left-bar ul li").forEach((item) => {
  item.addEventListener("click", function () {
    const setting = this.getAttribute("data-setting");
    const rightSide = document.getElementById("rightSideContent");

    if (setting && settingsContent[setting]) {
      // Update the content in the right-side container
      rightSide.innerHTML = settingsContent[setting];
    }
  });
});

// Close button functionality
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

// Optional: Open modal functionality
document.getElementById("settings-btn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

// Log out button functionality
document.getElementById("logOutButton").addEventListener("click", function () {
  alert("You have been logged out.");
  document.body.setAttribute("data-logged", "false");
});

document.querySelectorAll(".left-bar ul li").forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-setting");

    // Hide all content sections
    document.querySelectorAll(".right-side .content").forEach((content) => {
      content.classList.add("hidden");
    });

    // Show the targeted section
    document.querySelector(`.${target}`).classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("hamburger-menu");
  const sidebar = document.getElementById("sidebar");

  menuIcon.addEventListener("mouseenter", () => {
      sidebar.classList.add("active");
  });

  sidebar.addEventListener("mouseleave", () => {
      sidebar.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const sidebar = document.getElementById("sidebar");

  // Show sidebar on hover
  hamburger.addEventListener("mouseenter", function () {
      sidebar.classList.add("active");
  });

  // Hide sidebar when the mouse leaves the sidebar
  sidebar.addEventListener("mouseleave", function () {
      sidebar.classList.remove("active");
  });
});


function updateProgress() {
  let currentValue = parseFloat(document.getElementById("currentValue").value);
  let totalValue = parseFloat(document.getElementById("totalValue").value);

  if (isNaN(currentValue) || isNaN(totalValue) || totalValue <= 0) {
      alert("Please enter valid numbers.");
      return;
  }

  let percentage = (currentValue / totalValue) * 100;
  percentage = Math.min(Math.max(percentage, 0), 100); // Clamp between 0% and 100%

  let progressBar = document.getElementById("myBar");
  let percentageText = document.querySelector(".percentage");

  progressBar.style.width = percentage + "%";
  percentageText.textContent = Math.round(percentage) + "%";
}

const loginBtn = document.getElementById("login-btn");
const modal = document.getElementById("profile-panel");

loginBtn.addEventListener("mouseenter", () => {
    modal.style.display = "block";
});

loginBtn.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!modal.matches(":hover")) {
            modal.style.display = "none";
        }
    }, 200);
});

modal.addEventListener("mouseleave", () => {
    modal.style.display = "none";
});

