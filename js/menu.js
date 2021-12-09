(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  const body = document.querySelector('body');

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });


  handlerEscModalClose();
})();

// Реализация закрытия модалки при клике в бекдроп
const menuBtnClose = document.querySelector('[close-menu]');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  }
}

// Функция закрытия модального окна при нажатии на Esc
function handlerEscModalClose() {
  window.addEventListener('keydown', onEsckeyClick);
  function onEsckeyClick(evt) {
    if (evt.code === 'Escape') {
      onModalClose();
    }
  }
}
// Функция закрытия модального окна и снятия всех классов
function onModalClose() {
  backdrop.classList.add('is-hidden');
  body.classList.remove('modal-open');
  menuBtnClose.classList.remove('is-open');
}

// закрытие модального окна при клике по элементам навигации
const mainModalMenuListItems = document.querySelector('.mobile-menu__link-list');
mainModalMenuListItems.addEventListener('click', onMainMenuItemsClick);


function onMainMenuItemsClick(evt) {
  if (!evt.target.classList.value === 'mobile-menu__list-item') {
    return;
  }
  onModalClose();
}

const onlineBtn = document.querySelector('.contact-us__online');
onlineBtn.addEventListener('click', onOnlineBtnClick);
function onOnlineBtnClick(evt) {
  if (!evt.target.classList.value === 'contact-us__online') {
    return;
  }
  onModalClose();
}