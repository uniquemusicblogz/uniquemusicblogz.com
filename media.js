const mediaData = [
    {
        title: "Crazy",
        artist: "Nasty C",
        cover: "a11.jpg",
        audio: "Nasty C - Crazy.mp3",
        biography: "Nasty C is a talented South African rapper known for his unique sound and powerful lyrics."
    },
    {
        title: "Mr and Mrs",
        artist: "Yo Maps",
        cover: "a11.jpg",
        audio: "Yo Maps - Ngate ba Yaweh.mp3",
        biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
    },
    {
        title: "Fat Juicy & Wet",
        artist: "Sexyy Red & Bruno Mars",
        cover: "a11.jpg",
        audio: "Sexyy Red - Fat Juicy & Wet.mp3",
        biography: "Sexyy Red and Bruno Mars team up for *Fat Juicy & Wet*, a bold and infectious hit that’s taking over playlists."
    },
    {
        title: "Venus",
        artist: "Faceless ft. Serøtonin",
        cover: "a11.jpg",
        audio: "Faceless - Venus.mp3",
        biography: "Faceless and Serøtonin’s *Venus* is a viral sensation, blending Afrobeats with electronic vibes for a unique sound."
    },
    // Add more songs as needed
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
                <button onclick="shareSong('${item.title}', '${item.audio}')">Share</button>
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

// Universal Share Functionality
function shareSong(title, audio) {
    const shareText = `Check out this song: ${title}\nListen here: ${audio}`;
    const encodedText = encodeURIComponent(shareText);
    
    const shareUrl = `https://github.com/uniquemusicblogz/uniquemusicblogz.com/raw/main/.github/${encodeURIComponent(title)}.mp3`;

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${shareUrl}`;
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

    const shareWindow = window.open('', '_blank');
    shareWindow.document.write(`
        <h3>Share this song:</h3>
        <a href="${facebookShareUrl}" target="_blank">Facebook</a><br>
        <a href="${twitterShareUrl}" target="_blank">Twitter</a><br>
        <a href="${linkedinShareUrl}" target="_blank">LinkedIn</a><br>
        <button onclick="window.close()">Close</button>
    `);
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
