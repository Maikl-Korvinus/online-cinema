const burgerBtn = document.querySelector('.burger-btn-js');
const navigation = document.querySelector('.js-navigation');
const navigationClose = document.querySelector('.js-close');

burgerBtn.addEventListener('click', () => {
   navigation.style.right = '0';
});
navigationClose.addEventListener('click', () => {
   navigation.style.right = '';
});