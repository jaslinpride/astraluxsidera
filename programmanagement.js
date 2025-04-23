const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


<script>
  const pages = ["SOW-page-onejpg.jpg", "SOW-page-two.jpg", "SOW-page-three.jpg"];
  let currentPage = 0;

  function updatePage() {
    const img = document.getElementById("book-page");
    img.style.transform = "rotateY(10deg)";
    setTimeout(() => {
      img.src = pages[currentPage];
      img.style.transform = "rotateY(0deg)";
    }, 150);
  }

  function nextPage() {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updatePage();
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      updatePage();
    }
  }
</script>