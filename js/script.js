$(document).ready(function() {
    $("#accordian").on('click', '.accordian-control', function(e)
    {
        e.preventDefault();
        $(this).next('.accordian-panel').not(':animated').slideToggle();
    });
    console.log("hello");
});