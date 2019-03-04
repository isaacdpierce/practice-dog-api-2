'use strict';

function userNum() {
  const num = $('.js-number').val();

  if (num > 50) {
    alert('Number must be between 1 and 50');
    return -1;
  }
  return num;
}

function getDogImages() {
  fetch(`https://dog.ceo/api/breeds/image/random/${userNum()}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
  // .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  const images = responseJson.message;

  if (images.length === 0) {
    console.log('No results to display');
  }

  $('.js-results').empty();

  images.map(imgSrc => {
    console.log(imgSrc);
    return $('.js-results').append(`
      <img src="${imgSrc}" alt="dog" class="results-img"/>
    `);
  });
  // for (let imgSrc in images) {
  //   console.log(imgSrc);
  //   return $('.js-results').replaceWith(`
  //     <img src="${imgSrc}" alt="dog" class="results-img"/>
  //   `);
  // }
  // //replace the existing images with the new ones
  // $('.results').replaceWith(
  //   `<img src="${responseJson.message}" class="results-img">`
  // );
  // //display the results section
  // $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
