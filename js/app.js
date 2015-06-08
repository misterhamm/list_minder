$(document).ready(function() {

function playHadouken() {
    $('#hadouken-sound')[0].volume=1;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });

    $('.ryu').mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    });

    $('.ryu').mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1072px'},
            300,
            function() {
                $(this).hide()
                $(this).css('left', '572px');
            }
            );
    });

    $('.ryu').mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    $(document).keydown(function(e) {
        if(e.which == 88){
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-pose').show();
        }
    });
    $(document).keyup(function(e) {
            $('.ryu-still').show();
            $('.ryu-pose').hide();
    });
});
