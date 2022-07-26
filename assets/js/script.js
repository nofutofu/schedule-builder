var rowAdd = $('#row');
var timeCount = [0,0,0,0,0,0,0,0,0,'9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
clearBtn = $('#clear-button');

var currentTime = moment().format('H');

// ensures the timer is loaded on the page at startup
var timeLog = moment().format("h:mm:ss A MMMM Do YYYY");
$("#currentDay").text(timeLog);

timeDisplay() 

// constant clock running for the time at top
function timeDisplay() {
var timeInterval = setInterval(function () {
var timeLog = moment().format("h:mm:ss A MMMM Do YYYY");
$("#currentDay").text(timeLog);
}, 1000
)}

function getState(i) {
if (Number(currentTime) === i) {
    var state = "present";
} else if (Number(currentTime) > i) {
    var state = "past";
} else {
    var state = "future";
}
return state;
}

makeRow()

// a loop that outputs each hour row with incrementing i variable  
function makeRow() {
for (var i = 9; i < timeCount.length; i++) {
rowAdd.append('<div class="hour time-block col-2 col-md-1"><p>' + timeCount[i] + '</p></div>');
rowAdd.append('<input type="text" name="time' + [i] + '" id="time' + [i] + '" class="col-9 col-md-10 input-time time' + [i] + ' ' + getState(i) + '">');
rowAdd.append('<button class="btn saveBtn col-1 btn' + [i] + ' ' + getState(i) + '"><i class="fas fa-save"></i></button>')
}
}

timeCheck()

// check to see if the hour has changed and re-build the page to match the current time
function timeCheck() {
var timeInterval = setInterval(function () {
if (Number(currentTime) != moment().format('H')) {
    currentTime = moment().format('H')
        rowAdd.children().remove();
    for (var i = 9; i < timeCount.length; i++) {       
        rowAdd.append('<div class="hour time-block col-2 col-md-1"><p>' + timeCount[i] + '</p></div>');
        rowAdd.append('<input type="text" name="time' + [i] + '" id="time' + [i] + '" class="col-9 col-md-10 input-time time' + [i] + ' ' + getState(i) + '">');
        rowAdd.append('<button class="btn saveBtn col-1 btn' + [i] + ' ' + getState(i) + '"><i class="fas fa-save"></i></button>')
    }
    applyTasks()
}
}, 1000
)}

initBtn()

// set up save buttons for each individual hour
function initBtn() {
var btn9 = $('.btn9');
btn9.on('click', saveTask9);
var btn10 = $('.btn10');
btn10.on('click', saveTask10);
var btn11 = $('.btn11');
btn11.on('click', saveTask11);
var btn12 = $('.btn12');
btn12.on('click', saveTask12);
var btn13 = $('.btn13');
btn13.on('click', saveTask13);
var btn14 = $('.btn14');
btn14.on('click', saveTask14);
var btn15 = $('.btn15');
btn15.on('click', saveTask15);
var btn16 = $('.btn16');
btn16.on('click', saveTask16);
var btn17 = $('.btn17');
btn17.on('click', saveTask17);
}

// multiple saveTask functions to save each individual hour
function saveTask9() {
    var time9 = $('#time9').val();
    localStorage.setItem("task9", time9);
}
function saveTask10() {
    var time10 = $('#time10').val();
    localStorage.setItem("task10", time10);
}
function saveTask11() {
    var time11 = $('#time11').val();
    localStorage.setItem("task11", time11);
}
function saveTask12() {
    var time12 = $('#time12').val();
    localStorage.setItem("task12", time12);
}
function saveTask13() {
    var time13 = $('#time13').val();
    localStorage.setItem("task13", time13);
}
function saveTask14() {
    var time14 = $('#time14').val();
    localStorage.setItem("task14", time14);
}
function saveTask15() {
    var time15 = $('#time15').val();
    localStorage.setItem("task15", time15);
}
function saveTask16() {
    var time16 = $('#time16').val();
    localStorage.setItem("task16", time16);
}
function saveTask17() {
    var time17 = $('#time17').val();
    localStorage.setItem("task17", time17);
}

// assigns a variable to a local storage item
const task9Fill = localStorage.getItem('task9');
const task10Fill = localStorage.getItem('task10');
const task11Fill = localStorage.getItem('task11');
const task12Fill = localStorage.getItem('task12');
const task13Fill = localStorage.getItem('task13');
const task14Fill = localStorage.getItem('task14');
const task15Fill = localStorage.getItem('task15');
const task16Fill = localStorage.getItem('task16');
const task17Fill = localStorage.getItem('task17');

// ensures that if there is no local storage, the schedule simply displays empty
if(!task9Fill) localStorage.setItem("task9", " ");
if(!task10Fill) localStorage.setItem("task10", " ");
if(!task11Fill) localStorage.setItem("task11", " ");
if(!task12Fill) localStorage.setItem("task12", " ");
if(!task13Fill) localStorage.setItem("task13", " ");
if(!task14Fill) localStorage.setItem("task14", " ");
if(!task15Fill) localStorage.setItem("task15", " ");
if(!task16Fill) localStorage.setItem("task16", " ");
if(!task17Fill) localStorage.setItem("task17", " ");

applyTasks()

// sets input values to the local storage
function applyTasks() {
document.getElementById("time9").setAttribute('value', localStorage.getItem('task9'));
document.getElementById("time10").setAttribute('value', localStorage.getItem('task10'));
document.getElementById("time11").setAttribute('value', localStorage.getItem('task11'));
document.getElementById("time12").setAttribute('value', localStorage.getItem('task12'));
document.getElementById("time13").setAttribute('value', localStorage.getItem('task13'));
document.getElementById("time14").setAttribute('value', localStorage.getItem('task14'));
document.getElementById("time15").setAttribute('value', localStorage.getItem('task15'));
document.getElementById("time16").setAttribute('value', localStorage.getItem('task16'));
document.getElementById("time17").setAttribute('value', localStorage.getItem('task17'));
}

// sets all local storage inputs to " " and then sets the input values to the new " "
clearBtn.on('click', function() { 
  if (confirm("Are you sure you want to delete your schedule?") == true) {
    localStorage.setItem("task9", " ");
    localStorage.setItem("task10", " ");
    localStorage.setItem("task11", " ");
    localStorage.setItem("task12", " ");
    localStorage.setItem("task13", " ");
    localStorage.setItem("task14", " ");
    localStorage.setItem("task15", " ");
    localStorage.setItem("task16", " ");
    localStorage.setItem("task17", " ");
    document.getElementById("time9").setAttribute('value', localStorage.getItem('task9'));
    document.getElementById("time10").setAttribute('value', localStorage.getItem('task10'));
    document.getElementById("time11").setAttribute('value', localStorage.getItem('task11'));
    document.getElementById("time12").setAttribute('value', localStorage.getItem('task12'));
    document.getElementById("time13").setAttribute('value', localStorage.getItem('task13'));
    document.getElementById("time14").setAttribute('value', localStorage.getItem('task14'));
    document.getElementById("time15").setAttribute('value', localStorage.getItem('task15'));
    document.getElementById("time16").setAttribute('value', localStorage.getItem('task16'));
    document.getElementById("time17").setAttribute('value', localStorage.getItem('task17'));
  }
})

