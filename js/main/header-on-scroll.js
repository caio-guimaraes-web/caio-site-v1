function initScrollMoreThenZero() {
  let scrollPos = 0;
  const nav = document.querySelector('#header-main');

  function scrollMoreThenZero() {
    //console.log('chamou');
    let scrollPos = window.scrollY;
    //console.log('scrollPos antes = ' + scrollPos);

    if (scrollPos > 0) {
      // Scrolling UP
      nav.classList.add('is-visible');
      nav.classList.remove('is-hidden');
    } else {
      // Scrolling DOWN
      nav.classList.add('is-hidden');
      nav.classList.remove('is-visible');
    }

    //console.log('scrollPos = depois' + scrollPos);
  }

  window.addEventListener('scroll', debounce(scrollMoreThenZero, 200));
}
initScrollMoreThenZero();
