// Load the JSON data and populate narrative cards
fetch('items.json')
    .then(response => response.json())
    .then(items => {
        // For Narrative Page: Populate cards dynamically
        const cardsContainer = document.querySelector('#cards-container'); // Assuming container ID

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.shortDescription}</p>
      `;
            card.addEventListener('click', () => {
                window.location.href = `item.html?id=${index}`;
            });
            cardsContainer.appendChild(card);
        });
    });

// Handle the Item Page Logic
if (window.location.pathname.includes('item.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));

    fetch('items.json')
        .then(response => response.json())
        .then(items => {
            const item = items[itemId];

            if (!item) {
                document.body.innerHTML = '<h1>Item not found</h1>';
                return;
            }

            // Populate item page details
            const titleEl = document.querySelector('#item-title');
            const descEl = document.querySelector('#item-description');

            titleEl.textContent = item.title;
            descEl.textContent = item.shortDescription;

            // "Tell Me More" functionality
            const tellMeMoreBtn = document.querySelector('#tell-me-more');
            let showFullDescription = false;

            tellMeMoreBtn.addEventListener('click', () => {
                showFullDescription = !showFullDescription;
                descEl.textContent = showFullDescription ? item.longDescription : item.shortDescription;
                tellMeMoreBtn.textContent = showFullDescription ? 'Show Less' : 'Tell Me More';
            });

            // Next/Previous Navigation
            const prevBtn = document.querySelector('#prev-item');
            const nextBtn = document.querySelector('#next-item');

            prevBtn.addEventListener('click', () => {
                const prevId = (itemId - 1 + items.length) % items.length;
                window.location.href = `item.html?id=${prevId}`;
            });

            nextBtn.addEventListener('click', () => {
                const nextId = (itemId + 1) % items.length;
                window.location.href = `item.html?id=${nextId}`;
            });
        });
}