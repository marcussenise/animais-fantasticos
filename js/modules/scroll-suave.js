export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
      // const topo = section.offsetTop;
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // forma alternativa
    // windows.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // });
  }
  linksInternos.forEach((e) => {
    e.addEventListener('click', scrollToSection);
  });
}
