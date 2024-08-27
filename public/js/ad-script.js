document.addEventListener('DOMContentLoaded', function () {
    const adElement = document.querySelector('.my-ad');
    if (adElement) {
        adElement.innerHTML = `
            <div class="ad-content" style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                <h4>Advertisement</h4>
                <p>Your Ad Here</p>
                <a href="https://example.com" target="_blank">Click here</a>
            </div>
        `;
    }
});