"use strict"
let game=document.getElementById('game');
let cells=document.getElementsByClassName('cell');
let start=document.getElementById('start');
start.addEventListener('click',getStarted)
let arrOfColours=['maroon', 'chocolate', 'navy','aquamarine' ,'lime', 'fuchsia', 'teal', 'khaki'];
let arrOfSizes=[30, 40,26,20,12,35,15];
let counter=1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

function getStarted(){

let arrOfDataId=[];
let firstArr=[];
let secondArr=[];
for (let i=0;i<=24;i++) {arrOfDataId[i]=i;}
for (let i=1;i<=25;i++){
let randomPickedIndex=getRandomInt(0,arrOfDataId.length);
fillingCellsWithNumbers(arrOfDataId[randomPickedIndex],i);
secondArr=arrOfDataId.slice(randomPickedIndex+1);
firstArr=arrOfDataId.slice(0,randomPickedIndex);
arrOfDataId=[];
arrOfDataId=firstArr.concat(secondArr);
randomCellsFill();

}}


function fillingCellsWithNumbers(index,number) {
    for (let i=0;i<cells.length;i++) {
        if (cells[i].getAttribute('data-id') == index) {
            cells[i].innerText=number;}}
}

function findMaxNumberInArray(arr){
    let max=arr[0];
    for (let i=0;i<arr.length;i++) if (arr[i]>max) max=arr[i]
    return +max;
}


function findMinNumberInArray(arr){
    let min=arr[0];
    for (let i=0;i<arr.length;i++) if (arr[i]<min) min=arr[i];
    return +min;
}

function returnRandomShitFromArray(arr){
    let index=getRandomInt(0,arr.length);
    return arr[index];
}


function randomCellsFill(){
    for (let i=0;i<cells.length;i++){
        cells[i].style.fontSize =returnRandomShitFromArray(arrOfSizes) +'px';
        cells[i].style.color=returnRandomShitFromArray(arrOfColours);
        cells[i].addEventListener('click', getPicked);
    }
}


function getPicked(){
if (this.innerText==counter) {
    this.style.background='red';
    counter++;
    if (counter>25) win();}}





function timer(){

}

function lose(){

}
function win(){

}


function restart(){

}



function click(){
    game.style.visibility='visible';
}