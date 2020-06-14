// function to "delete" items from the list
$(function(){
  $('.shopping-item-delete').click(function(event){
    $(this).closest('li').remove();
  });
});

// function to "check" the item off the list (line through text) 
$(function(){
  $('.shopping-item-toggle').click
  (function(event){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});

// function to add an item/buttons to the list when submit or press enter
$(function(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    var newItem = $('#shopping-list-entry').val();
  $('.shopping-list').append('<li>' + '<span class="shopping-item">' + newItem +'</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button> ' + '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' + '</li>');
 });
});
