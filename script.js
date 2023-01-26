$(function () {
  
var currentDay = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDay);

var time9 = dayjs().hour(9).format('ha');
$('#time9').text(time9);
var time10 = dayjs().hour(10).format('ha');
$('#time10').text(time10);
var time11 = dayjs().hour(11).format('ha');
$('#time11').text(time11);
var time12 = dayjs().hour(12).format('ha');
$('#time12').text(time12);
var time1 = dayjs().hour(13).format('ha');
$('#time1').text(time1);
var time2 = dayjs().hour(14).format('ha');
$('#time2').text(time2);
var time3 = dayjs().hour(15).format('ha');
$('#time3').text(time3);
var time4 = dayjs().hour(16).format('ha');
$('#time4').text(time4);
var time5 = dayjs().hour(17).format('ha');
$('#time5').text(time5);

var timeArray = [time9, time10, time11, time12, time1, time2, time3, time4, time5]
var currentHour = dayjs().format('H');
var textClass = $('.text');



$(function () {
  console.log(currentHour);
  console.log(timeArray);

  for (let i = 0; i < timeArray.length; i++) {
    if (timeArray[i] == currentHour) {
      $(textClass[i]).addClass('present');
      $(textClass[i]).removeClass('past');
      $(textClass[i]).removeClass('future');
    }
    else {
      if (timeArray[i] < currentHour) {
        $(textClass[i]).addClass('past');
        $(textClass[i]).removeClass('future');
        $(textClass[i]).removeClass('present');
      }
      if (timeArray[i] > currentHour) {
        $(textClass[i]).addClass('future');
        $(textClass[i]).removeClass('past');
        $(textClass[i]).removeClass('present');
      }
    }
  }

})




});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  // TODO: Add code to display the current date in the header of the page.
});
