const menuToggle = document.getElementById("menu-toggle");
const mainMenu = document.getElementById("mainMenu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

mainMenu.classList.add("menu-transition");

let isOpen = false;

function openMenu() {
  mainMenu.classList.add("menu-visible");
  mainMenu.style.display = "flex";
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  isOpen = true;
}

function closeMenu() {
  mainMenu.classList.remove("menu-visible");
  setTimeout(() => {
    mainMenu.style.display = "none";
  }, 300);
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  isOpen = false;
}

menuToggle.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});

document.addEventListener("click", (e) => {
  if (
    isOpen &&
    !mainMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    closeMenu();
  }
});

// Reset menu on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    mainMenu.style.display = "flex";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "none";
    isOpen = false;
  } else {
    if (!mainMenu.classList.contains("menu-visible")) {
      mainMenu.style.display = "none";
    }
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    isOpen = false;
  }
});
