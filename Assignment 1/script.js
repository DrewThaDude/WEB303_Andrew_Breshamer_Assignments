/*
	WEB 303 Assignment 1 - jQuery
	author: Andrew Breshamer 
	date: 2022-09-20
	id: 0726026
*/
$(document).ready(function() {
	$('input').on('blur', function() {
		var $spanValue = $('span');
		//console.log($spanValue);
		var $yearSal = parseInt($('#yearly-salary').val());
		//console.log($yearSal);
		var $percent = parseFloat($('#percent').val());
		//console.log($percent);
		var result;
		if($.isNumeric($yearSal) && $.isNumeric($percent)) {
			result = ($yearSal * $percent) / 100;
			result.toFixed(2);
			console.log(result);
			$($spanValue).text('$' + result);
		}
	});
});