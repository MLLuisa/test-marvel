"use strict";

const button = document.querySelector('.js-button');

function handleClickButton(ev) {
    ev.preventDefault();
    button.classList.toggle("change-styles-click");
}

button.addEventListener("click", handleClickButton)