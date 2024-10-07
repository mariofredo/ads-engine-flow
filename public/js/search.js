document.addEventListener('DOMContentLoaded', function () {
  const baseURL = `https://astro-ad-engine.vercel.app`;
  // const baseURL = `http://localhost:4321`;
  document.getElementById('flow-search').innerHTML = `<form class="search_box">
      <img class="search_logo" src="../../../public/flow_logo.svg" alt="">
      <div class="search_input">
        <div class="search_item">
          <img class="search_item_icon" src="../../../public/search_icon.svg" alt="">
          <input name="search" class="search_item_input" type="text" placeholder="Search for hotel" />
        </div>
        <div class="search_item">
          <!-- <img class="search_item_icon" src="../../../public/calendar_icon.svg" alt=""> -->
          <input name="search" class="search_item_input" type="date" />
        </div>
        <button class="search_btn"><img src="../../../public/search_icon_black.svg"  alt=""></button>
      </div>
    </form>
  `;
  document
    .querySelector('.search_item_input')
    .addEventListener('input', function (e) {
      console.log(e.target.value);
    });
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
