'use strict';

//
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
 
    .then(responseJson => console.log(responseJson));
};

//generate html for the input forms

let formMaker = function () {
  let form = `
  <form class="js-dog-img">
    <input class="dog-img" type="text" placeholder="How many dogs can you handle?"/>
  </form>
  `;
  $('form').prepend(form);
};

formMaker();




function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});