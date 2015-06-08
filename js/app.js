$(document).ready(function() {

//Check/Uncheck Toggle
    $('.item-active').click(function() {
        $(this).toggleClass('item-active item-checked');
});

    $('.item-checked').click(function() {
        $(this).toggleClass('item-checked item-active');
});

   $('.add-items').click(function() {
        $('.list-items:first-child').prepend('<li class="item"><button class="item-active">≡ Test Item</button><button class="delete-item">X</button></li>');
});

 $('.delete-item').click(function() {
     $(this)

});
