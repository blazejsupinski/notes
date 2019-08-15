"use strict";
const tresc = document.querySelector('.textarea');
const zapisz = document.querySelector('.button__two');
const zaladuj = document.querySelector('.button__one');

zapisz.addEventListener('click', (e) => {
       e.preventDefault();
       localStorage.setItem('tresc', tresc.value)
});

zaladuj.addEventListener('click', (e) => {
       e.preventDefault();
       tresc.value = localStorage.getItem('tresc');
})