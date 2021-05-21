var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven");
var twelve = $("#twelve");
var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");

var timeNow = parseInt(moment().format("HH"));

var todaysDate = moment().format("[Today is] LLLL");
$("#currentDay").append(todaysDate);

$(document).ready(function() {
    $("textarea").each(function() {
        var timeName = parseInt($(this).attr("name"));
        if (timeName === timeNow) {
            $(this).addClass("present");
        }
        else if (timeName < timeNow) {
            $(this).removeClass('present')
            $(this).addClass("past");
        }
        else if (timeName > timeNow) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass("future");
        }
    });

    $("button").on("click", function() {
        localStorage.setItem("hour9", (nine.val()))
        localStorage.setItem("hour10", (ten.val()))
        localStorage.setItem("hour11", (eleven.val()))
        localStorage.setItem("hour12", (twelve.val()))
        localStorage.setItem("hour13", (one.val()))
        localStorage.setItem("hour14", (two.val()))
        localStorage.setItem("hour15", (three.val()))
        localStorage.setItem("hour16", (four.val()))
        localStorage.setItem("hour17", (five.val()))
    });

    $("#nine").append(localStorage.getItem("hour9"));
    $("#ten").append(localStorage.getItem("hour10"));
    $("#eleven").append(localStorage.getItem("hour11"));
    $("#twelve").append(localStorage.getItem("hour12"));
    $("#one").append(localStorage.getItem("hour13"));
    $("#two").append(localStorage.getItem("hour14"));
    $("#three").append(localStorage.getItem("hour15"));
    $("#four").append(localStorage.getItem("hour16"));
    $("#five").append(localStorage.getItem("hour17"));
});