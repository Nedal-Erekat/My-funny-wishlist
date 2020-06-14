"use strict"

function Wish(title, date) {
    this.title = title;
    this.date = date;
    Wish.all.push(this);
}
Wish.all = [];


var tableEl = document.getElementById('table')
Wish.prototype.creatRow = function () {
    var wishRow = document.createElement('tr');
    tableEl.appendChild(wishRow);

    var tdEl = document.createElement('td');
    wishRow.appendChild(tdEl);
    tdEl.textContent = this.title;

    var tdEl2 = document.createElement('td');
    wishRow.appendChild(tdEl2);
    tdEl2.textContent = this.date;

    var tdEl3 = document.createElement('td');
    wishRow.appendChild(tdEl3);
    tdEl3.textContent = randomDate(1, 99);
    console.log(Wish.all);

}
var form = document.getElementById('form');
form.addEventListener('submit', addWish);
function addWish(event) {
    event.preventDefault();
    var newWish = event.target.wish.value;
    var newDate = event.target.date.value;
    var creat = new Wish(newWish, newDate);
    creat.creatRow();
    saveWishes();

}

function randomDate(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function saveWishes() {
    localStorage.setItem('wishes', JSON.stringify(Wish.all))
}

function getWishes() {
    if (localStorage.getItem('wishes')) {
        Wish.all = JSON.parse(localStorage.getItem('wishes'));
        for (let index = 0; index < Wish.all.length; index++) {
            console.log(Wish.all);
            var wish=Wish.all[index];
            wish.creatRow();

        };
    };
};


getWishes();
