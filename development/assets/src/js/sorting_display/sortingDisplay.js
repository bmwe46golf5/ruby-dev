export default () => {

// SORTABLE
var diplayBtn = $('a.gl-sorting-btn'),
    searchItem = $('.gl-featured-items');

diplayBtn.on('click', function(e){
  e.preventDefault();

  if(diplayBtn.hasClass('gl-grid-view')){
    $(this).removeClass('gl-grid-view').addClass('gl-list-view');
    $(this).find('i').removeClass('fa-list-ul').addClass('fa-th-large');

    searchItem.addClass('gl-listtype-display')
  } else {
    $(this).removeClass('gl-list-view').addClass('gl-grid-view');
    $(this).find('i').removeClass('fa-th-large').addClass('fa-list-ul');

    searchItem.removeClass('gl-listtype-display');
  }


});

};
