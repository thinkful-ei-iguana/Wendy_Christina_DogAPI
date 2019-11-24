function getDogImage() {
  let dogImagesDisplayed = $("#number-images").val();
  console.log(dogImagesDisplayed);
  fetch(`https://dog.ceo/api/breeds/image/random/${dogImagesDisplayed}`)
    .then(response => response.json())
    .then(jsonData => displayImages(jsonData))
    .catch(error => alert("Try again."));
}

function createImageDisplay(responseJson) {
  ///take array response and create a string that creates elements to insert into dom
  let urlArray = responseJson.message.map(
    url => `<div class="img-container">
              <img src="${url}" class="results-img">
            </div>`
  );
  return urlArray.join("");
}

// returns an array, need to map over the array
function displayImages(responseJson) {
  console.log(responseJson);
  let imageDisplay = createImageDisplay(responseJson);

  $(".results-img").replaceWith(`${imageDisplay}`);
  $(".results").removeClass("hidden");
}

// let extractData = function(data) {
//   data.message.forEach(url => console.log(url));
// };

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
