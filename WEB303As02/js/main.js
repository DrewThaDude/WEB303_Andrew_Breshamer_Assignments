// WEB303 Assignment 2
/* Andrew Breshamer
0726026
2022-10-03 */
$(function() {
    var xhr = new XMLHttpRequest; //browser object that doesn't depend on jquery
    let selectedElement = document.getElementById('content'); //select div for insertion
    selectedElementJ = $('div#content');
    $('#prospect').on('click', function() {
        //OG javascript
        //console.log(xhr);
        xhr.open('GET','prospect.html',true); //sends HTTP request to server
        //console.log(xhr.responseText);
        xhr.onload = function() {
            if(this.status === 200) {
                //console.log(selectedElement);
                selectedElement.innerHTML = xhr.responseText; //insert html
            }
        }
        xhr.send();

        /* selectedElementJ.load("prospect.html", function(responseTxt, statusTxt, xhr) {
            //jquery
            if(statusTxt == "success") {
                console.log(".load() request was succesfully executed");
                console.log(xhr);
            }
            if(statusTxt == "error") {
                console.log(".load() request was not executed: " + xhr.status + ": " + xhr.statusText);
            }
        }); */

        selectedElement.style.cssText  = "display: block; position: relative";
        selectedElementJ.animate({
            left: '0px',
            opacity: '1'
        });
    });

    $('#convert').on('click', function() {
        //console.log(xhr);
        xhr.open('GET','convert.html',true); //sends HTTP request to server
        //console.log(xhr.responseText);
        xhr.onload = function() {
            if(this.status === 200) {
                //console.log(selectedElement);
                selectedElement.innerHTML = xhr.responseText; //insert html
            }
        }
        xhr.send();

        selectedElement.style.cssText  = "display: block; position: relative";
        selectedElementJ.animate({
            left: '0px',
            opacity: '1'
        });
    });

    $('#retain').on('click', function() {
        //console.log(xhr);
        xhr.open('GET','retain.html',true); //sends HTTP request to server
        //console.log(xhr.responseText);
        xhr.onload = function() {
            if(this.status === 200) {
                //console.log(selectedElement);
                selectedElement.innerHTML = xhr.responseText; //insert html
            }
        }
        xhr.send();

        selectedElement.style.cssText  = "display: block; position: relative";
        selectedElementJ.animate({
            left: '0px',
            opacity: '1'
        });
    });
});