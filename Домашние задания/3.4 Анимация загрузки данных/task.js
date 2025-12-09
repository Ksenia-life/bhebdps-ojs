const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.addEventListener('readystatechange', function() {

    if (xhr.readyState === 4) {

        loader.classList.remove('loader_active');

        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const valutes = data.response.Valute;
            items.innerHTML = '';

            for (let code in valutes) {
                const valute = valutes[code];

                items.innerHTML += `
            <div class="item">
              <div class="item__code">${valute.CharCode}</div>
              <div class="item__value">${valute.Value}</div>
              <div class="item__currency">руб.</div>
            </div>
        `;
            }
        }
    }
});

xhr.send();