var elSiteFormSection = document.querySelector(".forms");
var elSiteFormToggle = elSiteFormSection.querySelector(".form-wrapper__toggler");

if( elSiteFormToggle){
  elSiteFormToggle.addEventListener("click", function(){
    elSiteFormSection.classList.toggle("form-open");
  });
}

// filter

var ElOpenFilterTogler = document.querySelector('.filter-button__togler');
var ELOpenFilter = document.querySelector('.categories-main__wrapper-one');

if( ELOpenFilter){
  ElOpenFilterTogler.addEventListener('click', function() {
    ELOpenFilter.classList.toggle('filter--open');
  });
}


var elCategoriesMainWrapper = document.querySelector('.categories-main__wrapper');
var elCategoriesMainGridBtn = document.querySelector('.js-grid-btn');

var elCategoriesMainListBtn = document.querySelector('.js-list-btn');

function addGridClass() {
  elCategoriesMainGridBtn.addEventListener('click', function() {
    elCategoriesMainWrapper.classList.remove('list--list');

    elCategoriesMainWrapper.classList.add('list--grid');
  });
}

function addListClass() {
  elCategoriesMainListBtn.addEventListener('click', function() {
    elCategoriesMainWrapper.classList.remove('list--grid');

    elCategoriesMainWrapper.classList.add('list--list');
  });
}

if(elCategoriesMainListBtn && elCategoriesMainGridBtn) {
  addListClass();
  addGridClass();
}


/*MODAL*/

var elModalOpen = document.querySelector('.body');
var elModalClose = document.querySelector('.button-karzinka');
var elCloseModal = document.querySelector('.modal__button');

if(elModalClose){
  elModalClose.addEventListener("click", function(){
    elModalOpen.classList.add("modal--open");
  });

  elCloseModal.addEventListener("click", function(){
    elModalOpen.classList.remove("modal--open");
  });
}