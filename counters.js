var count = document.getElementById("count");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

var counts = 0;

btn1.addEventListener('click', function () {
    counts--;
    count.textContent = counts;





});

btn2.addEventListener('click', function () {

    counts = 0;
    count.textContent = counts;
});

btn3.addEventListener('click', function () {
    counts++;
    count.textContent = counts;
});









