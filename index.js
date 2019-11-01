'use strict';

//
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response => response.json()) 
    .then(responseJson => {
      let test = responseJson.message[0];
      console.log(test);
      console.log(responseJson);
    });
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

//function displayDogs(dogNumber) {





function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const number = $('.dog-img').val();
    getDogImage();
    console.log(number);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});