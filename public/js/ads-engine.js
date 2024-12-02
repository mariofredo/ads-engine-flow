document.addEventListener('DOMContentLoaded', function () {
  let arr;
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
    console.log(`Importing CSS from: ${url}`); // Log the URL being imported
    // Create a new link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    // Append the link element to the head of the document
    document.head.appendChild(link);
  }
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get('search');
  const id = urlParams.get('id');
  const type = urlParams.get('type');
  // Define base URL
  const baseURL = `https://ads-engine-flow.vercel.app`;
  // const baseURL = `http://localhost:4321`;
  console.log(`Base URL: ${baseURL}`); // Log the base URL

  // Example usage
  importCSS(`${baseURL}/css/ads-engine.css`);

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
    const adElementHref = adElement.getAttribute('data-href');
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
    async function handleRenderCard() {
      switch (adElementType) {
        case 'one':
          const ratingOne = 3.4;
          // callHotelData({
          //   searches: [
          //     {
          //       collection: 'space_HK_1_PROD',
          //       page: 1,
          //       include_fields:
          //         'slug,_id,name,location.area,location.district,location.country,location.city,location.state,_geoloc,_tags,tags,images,ranking,config,id,top_comments,top_comments_average_rating,status.min_prices,frame_style,status',
          //       per_page: 10,
          //       query_by:
          //         'name,location.address,location.area.name,location.district.name,location.meta_district.name,location.city.name,location.state.name,amenities.name,tags.content',
          //       sort_by:
          //         '_text_match:desc,_eval([(ranking.is_promotion:true):10,(ranking.is_featured:true):9]):desc,ranking.normalized_score:desc',
          //       override_tags: 'deals_today-s-deal',
          //       filter_by:
          //         '_tags:=live && config.show.is_web_show:=true && (config.show.status:!=UNLISTED) && ((tags.slug:=today-s-deal))',
          //       q: adElement.getAttribute('data-search') || '*',
          //     },
          //   ],
          // });

          return (adElement.innerHTML = `
              <a href="${adElementHref}?a_aid=671f70eb411e" target="_blank" class="card-ad">
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
                  <div class="card-ad-button"><span class="card-ad-button-text">HK$ 50</span></div>
                </div>
              </a>
        `);
        case 'two':
          const ratingSecond = 4;
          return (adElement.innerHTML = `
          <a href="${adElementHref}?a_aid=671f70eb411e" target="_blank" class="card-ad card-ad-row">
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
             <div class="card-ad-button"><span class="card-ad-button-text">HK$ 50</span></div>
           </div>
         </a>
          `);
        case 'three':
          // const {results} = await callHotelData({
          //   searches: [
          //     {
          //       collection: 'space_HK_1_PROD',
          //       page: 1,
          //       include_fields:
          //         'slug,_id,name,location.area,location.district,location.country,location.city,location.state,_geoloc,_tags,tags,images,ranking,config,id,top_comments,top_comments_average_rating,status.min_prices,frame_style,status',
          //       per_page: 10,
          //       query_by:
          //         'name,location.address,location.area.name,location.district.name,location.meta_district.name,location.city.name,location.state.name,amenities.name,tags.content',
          //       sort_by:
          //         '_text_match:desc,_eval([(ranking.is_promotion:true):10,(ranking.is_featured:true):9]):desc,ranking.normalized_score:desc',
          //       override_tags: 'deals_today-s-deal',
          //       filter_by:
          //         '_tags:=live && config.show.is_web_show:=true && (config.show.status:!=UNLISTED) && ((tags.slug:=today-s-deal))',
          //       q: search || '*',
          //     },
          //   ],
          // });

          const data = await callHotelData({
            space_type_tab: 'rest',
            sort_by: 's_default',
            per_page: 6,
            page: 1,
            include_buttons: false,
            query: {
              id,
              type,
            },
          });
          console.log(data, 'data');
        //   const arr = results[0].hits;
        //   const adElementHref = adElement.getAttribute('data-href');
        //   const cards = arr.map(
        //     (
        //       item
        //     ) => `<a href="${adElementHref}?a_aid=671f70eb411e" target="_blank" class="card-ad">
        //    <img class="card-ad-img" src="${
        //      item.document.images[0]
        //    }" alt="blog-placeholder">
        //    <div class="card-ad-content">
        //      <h1 class="card-ad-title">${item.document.name.en}</h1>
        //      <div class="card-ad-location">
        //        <img class="card-ad-location-icon" src="${baseURL}/location-icon.svg" alt="location_icon">
        //        <p class="card-ad-location-text">${
        //          item.document.location.district.name.en +
        //          ', ' +
        //          item.document.location.state.name.en
        //        }</p>
        //      </div>
        //         <div class="card-ad-review">
        //             <div class="star-rating">
        //                 ${generateStarRating(
        //                   item.document.ranking.user_rating ?? 0
        //                 )}
        //             </div>
        //             <p class="card-ad-review-text"><span id="rating value">${
        //               item.document.ranking.user_rating ?? 0
        //             }</span> / 5 <span class="card-ad-review-count">(${
        //       item.document.ranking.total_comments
        //     } Reviews)</span></p>
        //           </div>
        //      <div class="card-ad-tag-list">
        //       ${item.document.tags
        //         .map(
        //           (tag) =>
        //             `<div class="card-ad-tag-bubble">${tag.content.en}</div>`
        //         )
        //         .join('')}
        //      </div>
        //      <div class="card-ad-available">
        //        <div class="card-ad-available-text">Available date</div>
        //        <p class="card-ad-available-date">10-12-2024</p>
        //      </div>
        //      <div class="card-ad-button"><span class="card-ad-button-text">HK$ 50</span></div>
        //    </div>
        //  </a>`
        //   );
        //   return (adElement.innerHTML = `
        //       <div class="card-ad-container">
        //           ${cards.join('')}
        //       </div>
        //       `);
      }
    }
    handleRenderCard();
  });
});
