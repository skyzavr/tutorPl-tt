import onToggleMenuButton from './modules/responsiveNavbar';
import onShowModal from './modules/modalWindowPromotion';
const menu = document.querySelector('.burger-menu');
const button = document.querySelectorAll('.promotion');

menu.addEventListener('click', () => onToggleMenuButton(menu));
button.forEach((el) => el.addEventListener('click', onShowModal));
