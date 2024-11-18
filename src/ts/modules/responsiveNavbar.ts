type replaceClassParams = (
  element: Element,
  whatReplace: string,
  toReplace: string
) => void;

const navPanel = document.querySelector('.nav');
const navBgr = document.querySelector('.nav__background');

const replaceClass: replaceClassParams = (...args) => {
  const [element, whatReplace, toReplace] = args;
  element.classList.replace(whatReplace, toReplace);
};

const onToggleMenuButton = (menu: Element) => {
  if (!navPanel || !navBgr) return;

  navPanel.classList.contains('nav__mobile-hide')
    ? replaceClass(navPanel, 'nav__mobile-hide', 'nav__mobile-show')
    : replaceClass(navPanel, 'nav__mobile-show', 'nav__mobile-hide');

  navBgr.classList.contains('hide')
    ? replaceClass(navBgr, 'hide', 'show')
    : replaceClass(navBgr, 'show', 'hide');

  menu.classList.toggle('show');
};

export default onToggleMenuButton;
