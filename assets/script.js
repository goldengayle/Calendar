
var saveButton = $('.saveBtn');
var heading =$('.anchor');
var nowHour = dayjs().hour();
var numID 
var pnum
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
dayAnchor.text(dayjs().format('dddd, MMMM D YYYY '));
heading.append (dayAnchor);
console.log(nowHour);


  
  

