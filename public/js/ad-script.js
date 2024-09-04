document.addEventListener('DOMContentLoaded', function () {
  // Cari semua elemen dengan kelas "my-ad"
  const adElements = document.querySelectorAll('.my-ad');

  // Loop melalui setiap elemen dan isi dengan konten iklan
  adElements.forEach((adElement, index) => {
    // Get the city and country from data attributes
    const city = adElement.getAttribute('data-city') || 'Default City';
    const country = adElement.getAttribute('data-country') || 'Default Country';

    adElement.innerHTML = `
            <div class="ad-content" style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                <h4>Advertisement ${index + 1}</h4>
                <p>Your Ad Here</p>
                <p>City: ${city}, Country: ${country}</p>
                <a href="https://example.com" target="_blank">Click here</a>
            </div>
        `;
  });
});
