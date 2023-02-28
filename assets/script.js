// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = $('.saveBtn');
var heading =$('.anchor');
var nowHour = dayjs().hour();
var numID 
var pnumID
var hourBlocks = $(".time-block");


$(document).ready(function() {
hourBlocks.each (function(){
  var hours = $(this).attr('id');
  var taskItem = localStorage.getItem(hours);
  $(this).children("textarea").val(taskItem);
})
})

for (i=0 ; i < saveButton.length; i++) {
  saveButton[i].addEventListener('click', function(){

 var info= $(this).siblings("textarea").val();
 var hour= $(this).parent().attr('id');
  console.log(info)
  localStorage.setItem(hour, info);
})}




hourBlocks.each (function () {
  var numID = $(this).attr('id');
  var pnum = parseInt(numID)
  console.log(pnum)
  if(pnum > nowHour ){
    $(this).addClass('future');
  } else if 
    (pnum === nowHour){
      $(this).addClass('present');
    } else{
      $(this).addClass('past');
    }
  }
)
  



var dayAnchor = $('<p>');
dayAnchor.text(dayjs().format('dddd'));
heading.append (dayAnchor);
console.log(nowHour);
//$(function () {


  
  

//if (now )


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page*/