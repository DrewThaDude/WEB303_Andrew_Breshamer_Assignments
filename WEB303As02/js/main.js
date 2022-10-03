// WEB303 Assignment 2
/* Andrew Breshamer
0726026
2022-10-03 */
$(document).ready(function() {
    var xhr = new XMLHttpRequest;
    $('#prospect').on('click', function() {
        //console.log("click event works");
        /* console.log(xhr);
        xhr.open('GET','convert.html',true);
        console.log(xhr.responseText);
        xhr.onload = function() {
            if(this.status === 200) {
                let selectedElement = document.getElementById('#content');
                selectedElement.innerHTML = xhr.responseText;
            }
        }
        xhr.send(); */
    });
});