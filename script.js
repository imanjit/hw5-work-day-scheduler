var timeNow = parseInt(moment().format('HH'));
var todaysDate = moment().format("[Today is] LLLL");
$("#currentDay").append(todaysDate);

$(document).ready(function() {
    $("input").each(function() {
        var timeName = parseInt($(this).attr("name"));
        if (timeName === timeNow) {
            $(this).addClass("present");
        }
        else if (timeName < timeNow) {
            $(this).removeClass('present')
            $(this).addClass("past");
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass("future");
        }
    })
});