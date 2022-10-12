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
            let valueArray = data[i];
            $.each(valueArray, function() { //loop through each child object for tag insertion
                $(`<h2>${valueArray.name}</h2>`).appendTo("div#team");
                $(`<h5>${valueArray.position}</h5>`).appendTo("div#team");
                $(`<p>${valueArray.bio}</p>`).appendTo("div#team");
            });
        });
    });
}