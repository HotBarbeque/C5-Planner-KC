
$(document).ready(function () {

var currentDay =$('#currentDay');

//Displays the day and date
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


var time = dayjs().hour();
var hour9 =$('#hour-9');
var hour10 =$('#hour-10');
var hour11 =$('#hour-11');
var hour12 =$('#hour-12');
var hour13 =$('#hour-13');
var hour14 =$('#hour-14');
var hour15 =$('#hour-15');
var hour16 =$('#hour-16');
var hour17 =$('#hour-17');

//Changes the class color as time proceeds in day
if (time < 9) {

    hour9.addClass('future');
    hour10.addClass('future');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 9) {

    hour9.addClass('present');
    hour10.addClass('future');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 10) {

    hour9.addClass('past');
    hour10.addClass('present');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 11) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('present');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 12) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('present');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 13) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('present');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 14) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('present');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 15) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('present');
    hour16.addClass('future');
    hour17.addClass('future');

} else if (time === 16) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.addClass('present');
    hour17.addClass('future');

} else if (time === 17) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.addClass('past');
    hour17.addClass('present');

} else if (time > 17) {

    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.addClass('past');
    hour17.addClass('past');

}
});
