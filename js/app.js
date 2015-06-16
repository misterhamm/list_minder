$(document).ready(function() {

//Prevent form default
    $('form').submit(function(e){
e.preventDefault();
    });

//Check/Uncheck Toggle
    $(document).on("click", ".item-active", function(event) {
        $(this).toggleClass('item-checked');
});

//Add items
    $('.add-items').click(function() {
        var newItem = $('input').val();
        $('.list-items:first-child').prepend('<li class="item"><p class="item-active">&nbsp; ≡ ' + newItem + '</p><i class="fa fa-trash-o delete"></i></li>');
        return $('input').val("");
});

//Delete Items
    $(document).on("click", ".fa-trash-o", function() {
        $(this).parent().remove();
    });

//Delete All
    $(document).on("click", ".clear-all-button", function() {
        var clearAll = confirm("Do you want to clear your whole list?");
        if(clearAll == true) {
            $(".list-items").children().remove();}
    });


//Sort List - jQueryUI widget - not sure how to implement
 /*   $(".list-items").sortable();*/




});
