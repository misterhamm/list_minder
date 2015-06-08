$(document).ready(function() {

//Check/Uncheck Toggle
    $('.item-active').click(function() {
        $(this).removeClass('item-active').addClass('item-checked');
});

    $('.item-checked').click(function() {
        $(this).removeClass('item-checked').addClass('item-active');
});







});
