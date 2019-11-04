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

//function numberOfImages() {
//  $('form').submit(event => {
//    event.preventDefault();
//    const number = $('.dog-img').val();
//    getDogImage(number);
//  });
//}

//renders the dog images on screen
//displays each item in array until the index of the number passed through
function getDogImage(number) {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json()) 
    .then(jsonData => displayImages(jsonData));
      
      
      
  
}

//render images on screen
function imageHtml() {
 $('.js-numberEntrySumbit').on('sumbit', e => {
  e.preventDefault();
  $('.js-dogGallery').html('');
  const number = $('.numberOfDogs').val();
  if (number > 50 || number < 1) {
    alert('Only a number between 1 and 50 please');    
  }else {
    getDogImage(number);
  }
 })
}

//display the images
function displayImages(number) {
  data.message.forEach(link => {
    console.log(link);
    $('.js-dogGallery').append(`<img src='${link}' alt="dog"></img>`);

  });
   
}

function(main) {
  imageHtml();

};



//$(function() {
//  console.log('App loaded! Waiting for submit!');
//  numberOfImages();
//  formMaker();
//  displayImages();
//});