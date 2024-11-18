import onToggleMenuButton from './modules/responsiveNavbar';
const menu = document.querySelector('.burger-menu');

menu.addEventListener('click', () => onToggleMenuButton(menu));
