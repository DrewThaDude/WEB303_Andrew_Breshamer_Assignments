/* Andrew Breshamer
0726026
last edited: 2022-10-07 */
$(function() {
    RetrieveData();
});

function RetrieveData() {
    $.getJSON("team.json", function(data) { //why not "..//team.json"?
        //console.log(data);
        $.each(data, function(i) {//loop through each object for JSON data
            //console.log(data[i]);
            $.each(data[i], function() { //loop through each child object for tag insertion
                console.log(data);
                //$(`<h2>${}</h2>`).appendTo("div#team");
            });
        });
    });
}