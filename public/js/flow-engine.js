document.addEventListener('DOMContentLoaded', function () {
  async function callHotelData(payload) {
    console.log('call hotel data');
    const response = await fetch(
      'https://api-v6.flowtheroom.com/core/search?region=hk&platform=web&lang=zh-hk',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-typesense-api-key': '8juFWVOoEDP5Pm1UlpQEFP42rvBdKu5l',
          'x-typesense-cluster-id': 'm2wlnapq6ue95y3zp',
          Accept: 'application/json',
          origin: 'https://app.flowtheroom.com',
          referer: 'https://app.flowtheroom.com',
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }

  function importCSS(url) {
    console.log(`Importing CSS from: ${url}`);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const type = urlParams.get('type');
  // Define base URL
  const baseURL = `https://ads-engine-flow.vercel.app`;
  // const baseURL = `http://localhost:4321`;
  console.log(`Base URL: ${baseURL}`); // Log the base URL
  // Example usage
  importCSS(`/css/flow-engine.css`);

  // Create and append the Font Awesome CDN link dynamically
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href =
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  document.head.appendChild(fontAwesomeLink);

  const adElements = document.querySelectorAll('.flow-box');
  adElements.forEach((adElement) => {
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
    function convertTimestampToDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString(); // Adjust options if you need a specific format
    }
    async function handleRenderCard() {
      adElement.querySelector('.flow-loading').style.display = 'block';
      const data = await callHotelData({
        space_type_tab: 'rest',
        sort_by: 's_default',
        per_page: 6,
        page: 1,
        include_buttons: false,
        query: {
          id,
          type: type === 'NAME' ? 'SPACE' : type,
        },
      });
      const {spaces} = data;
      const cards = spaces.map(
        (item) => `<a href="https://app.flowtheroom.com/hk/en/${
          item.slug
        }/hotel" target="_blank" class="card-flow">
       <img class="card-flow-img" src="${
         item.images[0]
       }" alt="blog-placeholder">
       <div class="card-flow-content">
         <h1 class="card-flow-title">${item.name.en}</h1>
         <div class="card-flow-location">
           <img class="card-flow-location-icon" src="${baseURL}/location-icon.svg" alt="location_icon">
           <p class="card-flow-location-text">${
             item.location.district.name.en + ', ' + item.location.state.name.en
           }</p>
         </div>
            <div class="card-flow-review">
                <div class="star-rating">
                    ${generateStarRating(item.ranking.user_rating ?? 0)}
                </div>
                <p class="card-flow-review-text"><span id="rating value">${
                  item.ranking.user_rating ?? 0
                }</span> / 5 <span class="card-flow-review-count">(${
          item.ranking.total_comments
        } Reviews)</span></p>
              </div>
         <div class="card-flow-tag-list">
          ${item.tags
            .map(
              (tag) =>
                `<div class="card-flow-tag-bubble">${tag.content.en}</div>`
            )
            .join('')}
         </div>
         <div class="card-flow-available">
           <div class="card-flow-available-text">Available date</div>
           <p class="card-flow-available-date">${convertTimestampToDate(
             item.next_available
           )}</p>
         </div>
         <div class="card-flow-button"><span class="card-flow-button-text">HK$ 50</span></div>
       </div>
     </a>`
      );
      adElement.querySelector('.flow-loading').style.display = 'none';
      return (adElement.innerHTML = `
          <div class="card-flow-container">
              ${cards.join('')}
          </div>
          `);
    }
    handleRenderCard();
  });
});
