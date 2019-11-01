'use strict';

//allows user to input number of images to display

let formMaker = function () {
  let form = `
  <form class="js-dog-img">
    <input class="dog-img" type="text" placeholder="How many dogs can you handle?"/>
  </form>
  `;
  $('form').prepend(form);
};

//user input

function numberOfImages() {
  $('form').submit(event => {
    event.preventDefault();
    const number = $('.dog-img').val();
    getDogImage(number);
  });
}

//renders the dog images on screen
//displays each item in array until the index of the number passed through
function getDogImage(index) {
  fetch('https://dog.ceo/api/breeds/image/random/10')
    .then(response => response.json()) 
    .then(responseJson => {
      extractData(responseJson);
      let userInput = $('.dog-img').val();

      
    });
};

//render images on screen
function imageHtml() {
  let imagesToDisplay = `
  <img src="https://images.dog.ceo/breeds/mastiff-english/1.jpg">
  `;
  $('.images').html(imagesToDisplay);
};

//display the images
function displayImages(number) {
  $('form').submit(event => {
    event.preventDefault();
    imageHtml();
  });
}

let extractData = function(data) {
  data.message.forEach(url => console.log(url));
};

$(function() {
  console.log('App loaded! Waiting for submit!');
  numberOfImages();
  formMaker();
  displayImages();
});