document.addEventListener('DOMContentLoaded', function () {
    // Cari semua elemen dengan kelas "my-ad"
    const adElements = document.querySelectorAll('.my-ad');

    // Loop melalui setiap elemen dan isi dengan konten iklan
    adElements.forEach((adElement, index) => {
        adElement.innerHTML = `
            <div class="ad-content" style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                <h4>Advertisement ${index + 1}</h4>
                <p>Your Ad Here</p>
                <a href="https://example.com" target="_blank">Click here</a>
            </div>
        `;
    });
});