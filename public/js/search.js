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

  async function handleSearch() {
    // e.preventDefault();
    const search = document.querySelector('.search_item_input').value;
    const region = 'hk';
    // const baseURL = `https://ads-engine-flow.vercel.app`;
    const url = `https://typesense.flowtheroom.com/multi_search?region=${region}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-typesense-api-key': '8juFWVOoEDP5Pm1UlpQEFP42rvBdKu5l',
        'x-typesense-cluster-id': 'm2wlnapq6ue95y3zp',
        Accept: 'application/json',
        origin: 'https://app.flowtheroom.com',
        referer: 'https://app.flowtheroom.com',
      },
      body: JSON.stringify({
        searches: [
          {
            collection: 'space_external_query_suggestions_HK_1_PROD',
            q: search,
            filter_by: 'location_groups:=[ALL] && category:!=AMENITY',
            per_page: 5,
            query_by: 'query',
            sort_by: '_text_match:desc,count:desc',
            include_fields:
              '_id,category,category_text,lang,location_groups,query',
          },
        ],
      }),
    });
    const data = await response.json();
    console.log(data, 'data');
    const resultList =
      data.results[0].hits.map(
        (item) =>
          `<a href="${baseURL}/list?id=${item.document._id}&type=${item.document.category}" class="search_result_item">
        <img class="search_result_icon" src="${baseURL}/bed_icon.svg" alt="">
        <p class="search_result_item_title">${item.document.query}</p>
      </a>`
      ) || `<p>No results found.</p>`;
    const searchBox = document.querySelector('.search_box');
    const searchResult = document.createElement('div');
    searchResult.classList.add('search_result');
    searchResult.innerHTML = resultList.join('');

    searchBox.appendChild(searchResult); // Appending the new results
  }

  const baseURL = `https://ads-engine-flow.vercel.app`;
  // const baseURL = `http://localhost:4321`;
  document.getElementById('flow-search').innerHTML = `<form class="search_box">
      <img class="search_logo" src="${baseURL}/flow_logo.svg" alt="">
      <div class="search_input">
        <div class="search_item">
          <img class="search_item_icon" src="${baseURL}/search_icon.svg" alt="">
          <input name="search" class="search_item_input" type="text" placeholder="Search for hotel" />
        </div>
        <div class="search_item">
          <img class="search_item_icon" src="${baseURL}/bed_icon.svg" alt=""> 
          <input name="rest" class="search_item_input" type="text" value="Rest" readonly />
        </div>
        <div class="search_item">
          <img class="search_item_icon" src="${baseURL}/calendar_icon.svg" alt=""> 
          <input name="rest" class="search_item_input" type="text" value="02-04-2024" readonly />
        </div>
        <div class="search_item">
          <img class="search_item_icon" src="${baseURL}/time_icon.svg" alt=""> 
          <input name="rest" class="search_item_input" type="text" value="Check-in Anytime" readonly />
        </div>
        <button class="search_btn"><img src="${baseURL}/search_icon_black.svg"  alt=""></button>
      </div>
    </form>
  `;
  importCSS(`/css/search.scss`);
  document
    .querySelector('.search_box')
    .addEventListener('submit', async function (e) {
      e.preventDefault();
      await handleSearch();
    });
  document
    .querySelector('.search_btn')
    .addEventListener('click', async function (e) {
      e.preventDefault();
      await handleSearch(e);
    });
});
