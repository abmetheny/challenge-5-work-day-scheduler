// Lists the current date in the header of the page
var currentDay = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDay);

// Populates working hours in the left-hand column
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

// Variables for saving events in local storage and adding/removing classes based on current time
var timeArray = [time9, time10, time11, time12, time1, time2, time3, time4, time5]
var currentHour = dayjs().format('H');
var textClass = $('.text');
var buttonClass = $('.saveBtn');
var timeKeys = "";
var textValues = "";

// Creates an array of time/event key value pairs
var newItems = loadItems();

function loadItems() {
  var storedPairs = {...localStorage};
  return storedPairs;
}

// Stores the time as a key and the event as a value, and does not allow blank entries to be saved
for (let i = 0; i < timeArray.length; i++) {

  buttonClass[i].addEventListener("click", function(){
    // save textarea to local storage
    var storedKey = (i);
    var storedValue = $(textClass[i]).val();

    if (storedValue == "") {
      alert("Text area cannot be blank.")
    }
    else {
      localStorage.setItem(storedKey, storedValue);
      // populate textarea with local storage
      var storedPairs = {...localStorage};
      var timeKeys = Object.keys(storedPairs);
      var textValues = Object.values(storedPairs);
    }

  })

  // Populates the calendar at the respective key with the saved value
  textClass[i].textContent = newItems[i];
  
  // Adds and removes classes to color-code and enable/disable the save button depending on the current time    
  if ((i+9) < currentHour) {
    $(textClass[i]).addClass('past');
    $(textClass[i]).removeClass('future');
    $(textClass[i]).removeClass('present');
    $(buttonClass[i]).addClass('disable');
  }

  if ((i+9) > currentHour) {
    $(textClass[i]).addClass('future');
    $(textClass[i]).removeClass('past');
    $(textClass[i]).removeClass('present');
    $(buttonClass[i]).removeClass('disable');
  }

  if ((i+9) == currentHour) {
    $(textClass[i]).addClass('present');
    $(textClass[i]).removeClass('past');
    $(textClass[i]).removeClass('future');
    $(buttonClass[i]).removeClass('disable');
  }

}