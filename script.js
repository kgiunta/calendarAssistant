$("#currentDay").text(moment().format("dddd, MMM Do"));

var nine = moment(9);
var ten = moment(10);
var eleven = moment(11);
var twelve = moment(12);
var one = moment(13);
var two = moment(14);
var three = moment(15);
var four = moment(16);
var five = moment(17);
var totalDay = [];
var currentTime = moment().format("H");
var endTime = moment(17);
console.log(currentTime);

if (nine < currentTime) {
  document.getElementById("nine").style.background = "gray";
} else if (nine > currentTime) {
  document.getElementById("nine").style.background = "green";
} else {
  document.getElementById("nine").style.background = "red";
}
if (ten < currentTime) {
  document.getElementById("ten").style.background = "gray";
} else if (ten > currentTime) {
  document.getElementById("ten").style.background = "green";
} else {
  document.getElementById("ten").style.background = "red";
}
if (eleven < currentTime) {
  document.getElementById("eleven").style.background = "gray";
} else if (eleven > currentTime) {
  document.getElementById("eleven").style.background = "green";
} else {
  document.getElementById("eleven").style.background = "red";
}
if (twelve < currentTime) {
  document.getElementById("twelve").style.background = "gray";
} else if ((twelve = currentTime)) {
  document.getElementById("twelve").style.background = "green";
} else {
  document.getElementById("twelve").style.background = "red";
}
if (one < currentTime) {
  document.getElementById("one").style.background = "gray";
} else if (one > currentTime) {
  document.getElementById("one").style.background = "green";
} else {
  document.getElementById("one").style.background = "red";
}
if (two < currentTime) {
  document.getElementById("two").style.background = "gray";
} else if (two > currentTime) {
  document.getElementById("two").style.background = "green";
} else {
  document.getElementById("two").style.background = "red";
}
if (three < currentTime) {
  document.getElementById("three").style.background = "gray";
} else if (three > currentTime) {
  document.getElementById("three").style.background = "green";
} else {
  document.getElementById("three").style.background = "red";
}
if (four < currentTime) {
  document.getElementById("four").style.background = "gray";
} else if (four > currentTime) {
  document.getElementById("four").style.background = "green";
} else {
  document.getElementById("four").style.background = "red";
}
if (five < currentTime) {
  document.getElementById("five").style.background = "gray";
} else if (five > currentTime) {
  document.getElementById("five").style.background = "green";
} else {
  document.getElementById("five").style.background = "red";
}

// if class $(".form-control")>moment()
// change style of

// .past .present .future

// function myFunction() {
//   // Gets input value
//   var name = document.getElementById("myInput").value;

//   // Saves data to retrieve later
//   localStorage.setItem("userName", name);
// }

// help needed
$(".saveBtn").on("click", function (event) {
  var input = $(event.target).parent().siblings(".form-control").val();
  var time = $(event.target).parent().siblings(".times").text();
  console.log(time);
  localStorage.setItem(time, input);
});

function displayValue() {
  $(".times").each(function (index) {
    //console.log(index + ": " + $(this).text());
    let currentValue = localStorage.getItem($(this).text());
    // console.log($(this).siblings(".form-control"));
    $(this).siblings(".form-control").val(currentValue);
  });
}
displayValue();
// add id to comment areas
// nineblock.val(localstorage.getItem(hour-nineam))

// select text areas with jquery
// target val
// assign localstorage.getitem to that val

//   var time = $("form-control").val();
//   console.log(time);
// });

// $(".saveBtn").click(function (currentTime) {
//   event.preventDefault();
//   localStorage.setItem("activity",JSON.stringify({time: todayHor}))
