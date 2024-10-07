document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.search_item_input')
    .addEventListener('input', function (e) {
      console.log(e.target.value);
    });
  document.querySelector('.search_btn').addEventListener('click', function () {
    window.open(
      `http://localhost:4321?search=${
        document.querySelector('.search_item_input').value
      }`
    );
  });
});
