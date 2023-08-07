export default class ScrollSmooth {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    if (section) {
      // const topo = section.offsetTop;
      section.scrollIntoView(this.options);
    }
    // forma alternativa
    // windows.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // });
  }

  addLinkEvent() {
    this.linksInternos.forEach((e) => {
      e.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
