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
  // const baseURL = `https://ads-engine-flow.vercel.app`;
  const baseURL = `http://localhost:4321`;
  document.getElementById('flow-search').innerHTML = `<form class="search_box">
      <img class="search_logo" src="${baseURL}/flow_logo.svg" alt="">
      <div class="search_input">
        <div class="search_item">
          <img class="search_item_icon" src="${baseURL}/search_icon.svg" alt="">
          <input name="search" class="search_item_input" type="text" placeholder="Search for hotel" />
        </div>
        <div class="search_item">
          <img class="search_item_icon" src="${baseURL}/bed_icon.svg" alt=""> 
          <input name="rest" class="search_item_input" type="text" value="02-04-2024" readonly />
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
  importCSS(`${baseURL}/css/search.css`);
  document
    .querySelector('.search_box')
    .addEventListener('submit', function (e) {
      e.preventDefault();
      window.open(
        `${baseURL}/list?search=${
          document.querySelector('.search_item_input').value
        }`
      );
    });
  document.querySelector('.search_btn').addEventListener('click', function () {
    window.open(
      `${baseURL}/list?search=${
        document.querySelector('.search_item_input').value
      }`
    );
  });
});
