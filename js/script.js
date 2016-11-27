// Searchbar Handler
$(function(){
  var searchField = $('#query');
  var icon = $('#search-btn');

  //Focus Handler
  $('searchField').on('focus', function(){
    $(this).animate({
      width:'100%'
    },400);
    $(icon).animate({
      right: '10px'
    }, 400);
  });
});