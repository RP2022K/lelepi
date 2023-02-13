/*
* File: app.js
* Author: Gyüre Árpád
* Copyright: 2023, Gyüre Árpád
* Group: Szoft I-1-E
* Date: 2023-02-10
* Github: https://github.com/rp2022k/webdoga3
* Licenc: GNU GPL
*/

const aElem = document.querySelector('#a');
const bElem = document.querySelector('#b');
const cElem = document.querySelector('#c');
const calcButton = document.querySelector('#calcButton');
const areaElem = document.querySelector('#area');

calcButton.addEventListener('click', () => {
    let a = Number(aElem.value);
    let b = Number(bElem.value);
    let c = Number(cElem.value);
    let area = calcArea(a, b, c);
    areaElem.value = area;
    cleanField();
});

function calcArea(a, b, c){
    let area = a * b * c;
    if (Number.isInteger(area)) return area;
    area = area.toFixed(3);
    return area;
}

function cleanField(){
    a = '';
    b = '';
    c = '';
}