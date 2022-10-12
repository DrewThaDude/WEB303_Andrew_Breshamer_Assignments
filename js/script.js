/* Andrew Breshamer
0726026
last edited: 2022-10-07 */
$(function() {
    //RetrieveData();

    RetrieveDataAJAX();
});

function RetrieveData() {
    $.getJSON("team.json", function(data) {
        $.each(data, function(i ,currentArray) {
            $(`<h2>${currentArray.name}</h2>`).appendTo("div#team");
            $(`<h5>${currentArray.position}</h5>`).appendTo("div#team");
            $(`<p>${currentArray.bio}</p>`).appendTo("div#team");
        });
    });
}
function RetrieveDataAJAX() {
    $.ajax({
        url: "team.json", 
        type: 'GET',
        dataType: 'JSON',
        data: 'data',
        beforeSend: function() {
            $('<p id="temp">currently loading...</p>').appendTo("div#team");
        },
        success: function(data) {
            //console.log(data);
            $('p#temp').remove();
            $.each(data, function(i ,currentArray) {
                $(`<h2>${currentArray.name}</h2>`).appendTo("div#team");
                $(`<h5>${currentArray.position}</h5>`).appendTo("div#team");
                $(`<p>${currentArray.bio}</p>`).appendTo("div#team");
            });
        },
        error: function() {
            $('<p>content could not be loaded</p>').appendTo("div#team");
        }
    });
}