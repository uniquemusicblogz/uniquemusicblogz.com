const mediaData = [
{
title: "Crazy",
artist: "Nasty C",
cover: "b3.jpg",
audio: "Nasty C - Crazy.mp3",
biography: "Nasty C is a talented South African rapper known for his unique sound and powerful lyrics."
},
{
title: "Mr and Mrs",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Anxiety",
artist: "Doechii",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: " Doechii made waves with her breakout hit Anxiety, turning personal struggles into a powerful anthem. <br> Stay ahead of rising artists and fresh music trends with <b>Unique Music Blog </b>your go-to source for exclusive insights 🎶🔥"
},
{
title: "Blue",
artist: "Yung Kai",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "<b>Blue by <i>Yung Kai</i></b> is a soulful fusion of R&B and lo-fi, weaving raw emotion and introspective lyrics into a captivating sound.<b> Stay tuned to <b>Unique Music Blog </b> for more deep cuts and fresh music updates! 🎶🔥"
},
{
title: "Akabwali",
artist: "Chanda na Kay",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Akabwali” by Chanda Na Kay** Dynamic duo Chanda Na Kay return with “<b>Akabwali,</b>” an upbeat track celebrating Zambian culture and everyday life. <br> Their energetic delivery and infectious rhythm have made this song a dancefloor staple."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},

{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
},
{
title: "Ngate ba yaweh",
artist: "Yo maps",
cover: "Yo-Maps-Nga-Te-Ba-Yahweh.webp",
audio: "Yo maps - Ngate ba Yaweh.mp3",
biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
}
    // Add more artists as needed
];

const itemsPerPage = 12; // Number of artists per page
let currentPage = 1;
let filteredData = mediaData; // Data to be displayed

function renderMedia(items) {
    const container = document.getElementById('media-container');
    container.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'media-card';
        card.onclick = () => showArtist(item);
        card.innerHTML = `
            <img src="${item.cover}" class="media-cover" alt="${item.title} Cover">
            <div class="media-info">
                <div class="media-title">${item.title}</div>
                <div class="media-artist">${item.artist}</div>
            </div>
        `;
        container.appendChild(card);
    });

    renderPaginationControls(items.length);
}

function renderPaginationControls(totalItems) {
    const pagination = document.getElementById('pagination-controls');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.onclick = () => changePage(currentPage - 1);
        pagination.appendChild(prevButton);
    }

    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.onclick = () => changePage(currentPage + 1);
        pagination.appendChild(nextButton);
    }
}

function changePage(page) {
    currentPage = page;
    renderMedia(filteredData);
}

function showArtist(artist) {
    const artistDetails = `
        <h1>${artist.title} - ${artist.artist}</h1>
        <img src="${artist.cover}" alt="${artist.title} Cover" class="artist-cover">
        <audio controls>
            <source src="${artist.audio}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button class="download-btn" onclick="window.location.href='${artist.audio}'">Download</button>
        <div class="biography">
            <strong>Biography:</strong> ${artist.biography}
        </div>
    `;
    document.getElementById('artist-details').innerHTML = artistDetails;
    document.getElementById('artist-details').style.display = 'block';
    document.getElementById('media-container').style.display = 'none';
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().replace(/\s+/g, ''); // Normalize input
    filteredData = mediaData.filter(item => 
        item.title.toLowerCase().replace(/\s+/g, '').includes(searchTerm) || 
        item.artist.toLowerCase().replace(/\s+/g, '').includes(searchTerm)
    );
    currentPage = 1; // Reset to first page on search
    renderMedia(filteredData);
});

// Initial render call
renderMedia(mediaData);
