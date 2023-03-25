// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
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
var currentDay =$('#currentDay');

var date = dayjs().format('dddd, MMMM DD');
currentDay.text(date);

//Saves and Pulls input to and from local storage
var save9 =$('#save9');
save9.on('click', function () {
localStorage.setItem(9,$('#text9').val());
})
$('#text9').val(localStorage.getItem('9'));

var save10 =$('#save10');
save10.on('click', function () {
localStorage.setItem(10,$('#text10').val());
})
$('#text10').val(localStorage.getItem('10'));

var save11 =$('#save11');
save11.on('click', function () {
localStorage.setItem(11,$('#text11').val());
})
$('#text11').val(localStorage.getItem('11'));

var save12 =$('#save12');
save12.on('click', function () {
localStorage.setItem(12,$('#text12').val());
})
$('#text12').val(localStorage.getItem('12'));

var save13 =$('#save13');
save13.on('click', function () {
localStorage.setItem(13,$('#text13').val());
})
$('#text13').val(localStorage.getItem('13'));

var save14 =$('#save14');
save14.on('click', function () {
localStorage.setItem(14,$('#text14').val());
})
$('#text14').val(localStorage.getItem('14'));

var save15 =$('#save15');
save15.on('click', function () {
localStorage.setItem(15,$('#text15').val());
})
$('#text15').val(localStorage.getItem('15'));

var save16 =$('#save16');
save16.on('click', function () {
localStorage.setItem(16,$('#text16').val());
})
$('#text16').val(localStorage.getItem('16'));

var save17 =$('#save17');
save17.on('click', function () {
localStorage.setItem(17,$('#text17').val());
})
$('#text17').val(localStorage.getItem('17'));

});
