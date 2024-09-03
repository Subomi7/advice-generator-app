'use strict';

let btn = document.querySelector('button');
let h5tag = document.querySelector('h5');
let pTag = document.querySelector('p');

async function getAdvice() {
  let url = 'https://api.adviceslip.com/advice';
  try {
    let req = await fetch(url);
    let res = await req.json();
    console.log(res.slip.id);
    h5tag.innerText = `ADVICE #${res.slip.id}`;
    pTag.innerText = `" ${res.slip.advice}"`;
  } catch (error) {
    console.log('loading error');
  }
}

btn.addEventListener('click', getAdvice);
window.addEventListener('load', getAdvice);
