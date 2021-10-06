//console.log('teste-compila');

/* lógica */
//identify menu click
//verify the distance of clicked item and(or) make refence to the target
//relation betwen clicked menu and target section
//to smooth to the scroll section´s movement

function initScrollSuave() {
  //select internal links
  const linksInternos = document.querySelectorAll(
    '.js-menu-header a[href^="#"',
  );

  const linkToNextSection = document.querySelector('#link-to-section-who');

  //leading to the clicked section
  function scrollToSection(event) {
    event.preventDefault();

    //relating href target with section
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    //console.log(section.offsetTop);

    /* js method
    https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView */
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  //click oberver
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
  linkToNextSection.addEventListener('click', scrollToSection);
}
initScrollSuave();
