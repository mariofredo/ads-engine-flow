document.addEventListener('DOMContentLoaded', function () {
  // Cari semua elemen dengan kelas "my-ad"
  const adElements = document.querySelectorAll('.ad-flow');
  console.log(adElements, 'test');
  adElements.forEach((adElement) => {
    const adElementType = adElement.getAttribute('type');
    // Loop melalui setiap elemen dan isi dengan konten iklan
    switch (adElementType) {
      case 'one':
        return (adElement.innerHTML = `
          <div class="card-ad">
       <img class="card-ad-img" src="http://localhost:4321/blog-placeholder-1.jpg" alt="blog-placeholder">
       <div class="card-ad-content">
         <h1 class="card-ad-title">Hotel Purple</h1>
         <div class="card-ad-location">
           <img class="card-ad-location-icon" src="http://localhost:4321/location-icon.svg" alt="location_icon">
           <p class="card-ad-location-text">Grand Slipi Tower</p>
         </div>
         <div class="card-ad-review">
           <img class="card-ad-review-icon" src="http://localhost:4321/star-icon.svg" alt="star_icon">
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
     </div>
    `);
      case 'two':
        return (adElement.innerHTML = `
      <div class="card-ad card-ad-row">
       <img class="card-ad-img" src="http://localhost:4321/blog-placeholder-1.jpg" alt="blog-placeholder">
       <div class="card-ad-content">
         <h1 class="card-ad-title">Hotel Purple</h1>
         <div class="card-ad-location">
           <img class="card-ad-location-icon" src="http://localhost:4321/location-icon.svg" alt="location_icon">
           <p class="card-ad-location-text">Grand Slipi Tower</p>
         </div>
         <div class="card-ad-review">
           <img class="card-ad-review-icon" src="http://localhost:4321/star-icon.svg" alt="star_icon">
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
     </div>
      `);
      case 'three':
        const arr = Array.from({length: 6}, (_, i) => i + 1);
        const cards = arr.map(
          (_) => `<div class="card-ad">
       <img class="card-ad-img" src="http://localhost:4321/blog-placeholder-1.jpg" alt="blog-placeholder">
       <div class="card-ad-content">
         <h1 class="card-ad-title">Hotel Purple</h1>
         <div class="card-ad-location">
           <img class="card-ad-location-icon" src="http://localhost:4321/location-icon.svg" alt="location_icon">
           <p class="card-ad-location-text">Grand Slipi Tower</p>
         </div>
         <div class="card-ad-review">
           <img class="card-ad-review-icon" src="http://localhost:4321/star-icon.svg" alt="star_icon">
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
