// src/js/script.js
document.addEventListener('DOMContentLoaded', function () {
  // Find all elements with the class 'my-ad'
  const adElements = document.querySelectorAll('.my-ad');

  // Loop through each element and insert the ad content
  adElements.forEach(function (adElement) {
    // Example ad content
    const adContent = `
        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
          <h4>Advertisement</h4>
          <p>Your Ad Here</p>
          <a href="https://www.google.com" target="_blank">Click here</a>
        </div>
      `;
    // Insert the ad content into the element
    adElement.innerHTML = adContent;
  });
});
