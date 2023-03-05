//Global variables
var saveButton = $('.saveBtn');
var heading =$('.anchor');
var nowHour = dayjs().hour();
var numID 
var pnum
var test = 11
var hourBlocks = $(".time-block");

// loads previous saved items in the correct timeslot
$(document).ready(function() {
hourBlocks.each (function(){
  var hours = $(this).attr('id');
  var taskItem = localStorage.getItem(hours);
  $(this).children("textarea").val(taskItem);
})
})

//for each save button, it will save the item with an attribute associated with the day
for (i=0 ; i < saveButton.length; i++) {
  saveButton[i].addEventListener('click', function(){

 var info= $(this).siblings("textarea").val();
 var hour= $(this).parent().attr('id');
  console.log(info)
  localStorage.setItem(hour, info);
})}

//For each hour on the calendar, the class is set based on the current day
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

//Pulls current day from dayjs
var dayAnchor = $('<p>');
dayAnchor.text(dayjs().format('dddd, MMMM D YYYY '));
heading.append (dayAnchor);
console.log(nowHour);


  
  

