// setting all elements as variables
const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const submit = document.getElementById("submit");
const pause = document.getElementById("pause");
const buttons = [minus, plus, heart, submit];
let span = document.createElement("span");

// starting point for timer
let time = 0;
let isPaused = false;


