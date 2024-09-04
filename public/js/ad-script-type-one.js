document.addEventListener('DOMContentLoaded', function () {
  function importCSS(url) {
    console.log(`Importing CSS from: ${url}`); // Log the URL being imported
    // Create a new link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    // Append the link element to the head of the document
    document.head.appendChild(link);
  }

  // Define base URL
  const baseURL = `https://astro-ad-engine.vercel.app`;
  console.log(`Base URL: ${baseURL}`); // Log the base URL

  // Example usage
  importCSS(`${baseURL}/css/ad-type-one.css`);

  // Create and append the Font Awesome CDN link dynamically
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href =
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  document.head.appendChild(fontAwesomeLink);

  // Find all elements with class "ad-flow"
  const adElements = document.querySelectorAll('.ad-flow');
  console.log(`Found ${adElements.length} ad elements.`); // Log the number of ad elements

  adElements.forEach((adElement) => {
    const adElementType = adElement.getAttribute('data-type');
    console.log(`Processing ad element of type: ${adElementType}`); // Log the type of each ad element

    // Helper function to generate star rating HTML
    function generateStarRating(rating) {
      let starHTML = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
          starHTML += '<i class="fa fa-star full"></i>'; // Full star
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
          starHTML += '<i class="fa fa-star half"></i>'; // Half star
        } else {
          starHTML += '<i class="fa fa-star"></i>'; // Empty star
        }
      }
      return starHTML;
    }

    // Loop melalui setiap elemen dan isi dengan konten iklan
    switch (adElementType) {
      case 'one':
        const ratingOne = 3.4;
        return (adElement.innerHTML = `
            <div class="card-ad">
              <img class="card-ad-img" src="${baseURL}/blog-placeholder-1.jpg" alt="blog-placeholder">
              <div class="card-ad-content">
                <h1 class="card-ad-title">Hotel Purple</h1>
                <div class="card-ad-location">
                  <img class="card-ad-location-icon" src="${baseURL}/location-icon.svg" alt="location_icon">
                  <p class="card-ad-location-text">Grand Slipi Tower</p>
                </div>
                <div class="card-ad-review">
                  <div class="star-rating">
                      ${generateStarRating(ratingOne)}
                  </div>
                  <p class="card-ad-review-text"><span id="rating value">${ratingOne}</span> / 5 <span class="card-ad-review-count">(243 Reviews)</span></p>
                </div>
                <div class="card-ad-tag-list">
                  <div class="card-ad-tag-bubble">Bathrooms</div>
                  <div class="card-ad-tag-bubble">Bedrooms</div>
                  <div class="card-ad-tag-bubble">Parking</div>
                </div>
                <div class="card-ad-available">
                  <div class="card-ad-available-text">Available date</div>
                  <p class="card-ad-available-date">10-12-2024</p>
                </div>
                <a href="#" class="card-ad-button"><span class="card-ad-button-text">HK$ 50</span></a>
              </div>
            </div>
      `);
      case 'two':
        const ratingSecond = 4;
        return (adElement.innerHTML = `
        <div class="card-ad card-ad-row">
         <img class="card-ad-img" src="${baseURL}/blog-placeholder-1.jpg" alt="blog-placeholder">
         <div class="card-ad-content">
           <h1 class="card-ad-title">Hotel Purple</h1>
           <div class="card-ad-location">
             <img class="card-ad-location-icon" src="${baseURL}/location-icon.svg" alt="location_icon">
             <p class="card-ad-location-text">Grand Slipi Tower</p>
           </div>
           <div class="card-ad-review">
              <div class="star-rating">
                ${generateStarRating(ratingSecond)}
              </div>
             <p class="card-ad-review-text"><span id="rating value">${ratingSecond}</span> / 5 <span class="card-ad-review-count">(243 Reviews)</span></p>
           </div>
           <div class="card-ad-tag-list">
             <div class="card-ad-tag-bubble">Bathrooms</div>
             <div class="card-ad-tag-bubble">Bedrooms</div>
             <div class="card-ad-tag-bubble">Parking</div>
           </div>
           <div class="card-ad-available">
             <div class="card-ad-available-text">Available date</div>
             <p class="card-ad-available-date">10-12-2024</p>
           </div>
           <a href="#" class="card-ad-button"><span class="card-ad-button-text">HK$ 50</span></a>
         </div>
       </div>
        `);
      case 'three':
        const arr = Array.from({length: 6}, (_, i) => i + 1);
        const cards = arr.map(
          (_) => `<div class="card-ad">
         <img class="card-ad-img" src="${baseURL}/blog-placeholder-1.jpg" alt="blog-placeholder">
         <div class="card-ad-content">
           <h1 class="card-ad-title">Hotel Purple</h1>
           <div class="card-ad-location">
             <img class="card-ad-location-icon" src="${baseURL}/location-icon.svg" alt="location_icon">
             <p class="card-ad-location-text">Grand Slipi Tower</p>
           </div>
           <div class="card-ad-review">
             <img class="card-ad-review-icon" src="${baseURL}/star-icon.svg" alt="star_icon">
             <p class="card-ad-review-text">4.5 / 5 <span class="card-ad-review-count">(243 Reviews)</span></p>
           </div>
           <div class="card-ad-tag-list">
             <div class="card-ad-tag-bubble">Bathrooms</div>
             <div class="card-ad-tag-bubble">Bedrooms</div>
             <div class="card-ad-tag-bubble">Parking</div>
           </div>
           <div class="card-ad-available">
             <div class="card-ad-available-text">Available date</div>
             <p class="card-ad-available-date">10-12-2024</p>
           </div>
           <a href="#" class="card-ad-button"><span class="card-ad-button-text">HK$ 50</span></a>
         </div>
       </div>`
        );
        return (adElement.innerHTML = `
            <div class="card-ad-container">
                ${cards.join('')}
            </div>
            `);
    }
  });
});
