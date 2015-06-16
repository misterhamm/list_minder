$(document).ready(function() {

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

//Delete icon show/hide
    /*$(document).on("mouseenter", ".item", function() {
        $('.delete').toggleClass('delete-show');
        console.log('working in');
    });

    $(document).on("mouseleave", ".item", function() {
        $('.delete').toggleClass('delete');
        console.log('working out');
    });*/

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
