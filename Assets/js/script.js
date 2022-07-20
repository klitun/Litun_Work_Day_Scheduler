  
//Getting the time for today from moment and setting text to reflect date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


//Setting up time table checker for past, present and future and applying class to color the text area

$(".description").each(function () {
    var tableTime = parseInt($(this).attr("id"));
    var hour = moment().hours();
if (tableTime == hour) {
    $(this).addClass("present");
    } else if (tableTime > hour) {
       $(this).addClass("future");
  } else if (tableTime < hour) {
    $(this).addClass("past");
  }
})


//Save Button, and stores data in local storage

$(".saveBtn").on("click", function (){

// console.log($this)
  
  var time = $(this).data("hour");
  var value = $("#"+time).text();
 
  localStorage.setItem(time, value);
})

//calls local storage each time page is loaded

$().ready(function(){
  for (let index = 9; index <= 17; index++) {
  $("#"+index).text(localStorage.getItem(index));
    
  }
})
