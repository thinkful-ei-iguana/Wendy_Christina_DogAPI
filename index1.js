function getDogImage() {
  fetch("https://dog.ceo/api/breed/hound/images/random")
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
  $(".results-img").replaceWith(
    `<img src="${responseJson.message}" class="results-img" alt="placeholder" />`
  );
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
