const mediaData = [
    {
        title: "Crazy",
        artist: "Nasty C",
        cover: "a11.jpg",
        audio: "https://raw.githubusercontent.com/uniquemusicblogz/uniquemusicblogz.com/main/Nasty%20C%20-%20Crazy.mp3",
        biography: "Nasty C is a talented South African rapper known for his unique sound and powerful lyrics."
    },
    {
        title: "Abracadabra",
        artist: "Lady Gaga",
        cover: "a11.jpg",
        audio: "Lady Gaga - Abracadabra.mp3",
        biography: "Lady Gaga’s *Abracadabra* is a magical pop hit that’s captivating audiences everywhere."
    }
    // Add other artists here using raw GitHub URLs
];

const itemsPerPage = 12;
let currentPage = 1;
let filteredData = mediaData;

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
    const artistDetails = document.getElementById('artist-details');
    artistDetails.innerHTML = ''; // Clear previous content

    // Create elements
    const titleElement = document.createElement("h1");
    titleElement.textContent = `${artist.title} - ${artist.artist}`;

    const coverElement = document.createElement("img");
    coverElement.src = artist.cover;
    coverElement.alt = `${artist.title} Cover`;
    coverElement.classList.add("artist-cover");

    const audioElement = document.createElement("audio");
    audioElement.controls = true;
    const sourceElement = document.createElement("source");
    sourceElement.src = artist.audio;
    sourceElement.type = "audio/mpeg";
    audioElement.appendChild(sourceElement);

    const downloadButton = document.createElement("button");
    downloadButton.classList.add("download-btn");
    downloadButton.textContent = "Download";
    downloadButton.onclick = () => window.location.href = artist.audio;

    const biographyElement = document.createElement("div");
    biographyElement.classList.add("biography");
    biographyElement.innerHTML = `<strong>Biography:</strong> ${artist.biography}`;

    // Create share buttons container
    const shareContainer = document.createElement("div");
    shareContainer.classList.add("share-buttons");

    const shareFacebook = document.createElement("button");
    shareFacebook.textContent = "Share on Facebook";
    shareFacebook.onclick = () => shareOnFacebook(artist.title, artist.artist, window.location.href);

    const shareTwitter = document.createElement("button");
    shareTwitter.textContent = "Share on Twitter";
    shareTwitter.onclick = () => shareOnTwitter(artist.title, artist.artist, window.location.href);

    const shareWhatsApp = document.createElement("button");
    shareWhatsApp.textContent = "Share on WhatsApp";
    shareWhatsApp.onclick = () => shareOnWhatsApp(artist.title, window.location.href);

    shareContainer.appendChild(shareFacebook);
    shareContainer.appendChild(shareTwitter);
    shareContainer.appendChild(shareWhatsApp);

    // Create back button
    const backButton = document.createElement("button");
    backButton.classList.add("back-btn");
    backButton.textContent = "Back to List";
    backButton.onclick = goBack;

    // Append elements
    artistDetails.appendChild(titleElement);
    artistDetails.appendChild(coverElement);
    artistDetails.appendChild(audioElement);
    artistDetails.appendChild(downloadButton);
    artistDetails.appendChild(biographyElement);
    artistDetails.appendChild(shareContainer);
    artistDetails.appendChild(backButton);

    // Show artist details and hide media container
    artistDetails.style.display = 'block';
    document.getElementById('media-container').style.display = 'none';

    // Update Open Graph Meta Tags dynamically (if present)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) { ogTitle.setAttribute("content", `${artist.title} - ${artist.artist}`); }
    if (ogImage) { ogImage.setAttribute("content", artist.cover); }
    if (ogUrl) { ogUrl.setAttribute("content", window.location.href); }
}

function goBack() {
    document.getElementById('artist-details').style.display = 'none';
    document.getElementById('media-container').style.display = 'block';
}

// Share functions
function shareOnFacebook(title, artist, url) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&quote=${encodeURIComponent(artist)}`;
    window.open(facebookUrl, '_blank');
}

function shareOnTwitter(title, artist, url) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title + " by " + artist)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
}

function shareOnWhatsApp(title, url) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Listen to " + title + " here: " + url)}`;
    window.open(whatsappUrl, '_blank');
}

document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().replace(/\s+/g, '');
    filteredData = mediaData.filter(item =>
        item.title.toLowerCase().replace(/\s+/g, '').includes(searchTerm) ||
        item.artist.toLowerCase().replace(/\s+/g, '').includes(searchTerm)
    );
    currentPage = 1;
    renderMedia(filteredData);
});

// Initial render call
renderMedia(mediaData);
