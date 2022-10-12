/* Andrew Breshamer
0726026
last edited: 2022-10-07 */
$(function() {
    RetrieveData();
});

function RetrieveData() {
    $.getJSON("team.json", function(data) { //why not "..//team.json"?
        //console.log(data);
        $.each(data, function(i, currentArray) {//loop through each object for JSON data
            console.log(i);
            $.each(currentArray, function() { //loop through each child object for tag insertion
                console.log(currentArray);
                /* $(`<h2>${currentArray.name}</h2>`).appendTo("div#team");
                $(`<h5>${currentArray.position}</h5>`).appendTo("div#team");
                $(`<p>${currentArray.bio}</p>`).appendTo("div#team"); */
            });
        });
    });
}