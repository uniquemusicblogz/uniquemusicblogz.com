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
{
title: "Mario Kart",
artist: "Seyi Vibez",
cover: "a11.jpg",
audio: "Seyi Vibez - Mario Kart.mp3",
biography: "Seyi Vibez’s *Mario Kart* is a standout Afrobeats track, bringing high-energy beats and catchy melodies."
},
{
title: "MMS",
artist: "Asake & Wizkid",
cover: "a11.jpg",
audio: "Asake - MMS.mp3",
biography: "Asake and Wizkid’s *MMS* is a reflective Afrobeats hit, blending smooth vocals with deep storytelling."
},
{
title: "Baby (Is it a Crime)",
artist: "Rema",
cover: "a11.jpg",
audio: "Rema - Baby.mp3",
biography: "Rema’s *Baby (Is it a Crime)* showcases his versatility, mixing Afrobeats with a nostalgic touch."
},
{
title: "Laho",
artist: "Shallipopi",
cover: "a11.jpg",
audio: "Shallipopi - Laho.mp3",
biography: "Shallipopi’s *Laho* is a chart-topping Afrobeats hit, making waves across Africa and beyond."
},
{
title: "Anxiety",
artist: "Doechii",
cover: "a11.jpg",
audio: "Doechii - Anxiety.mp3",
biography: "Doechii made waves with her breakout hit *Anxiety*, turning personal struggles into a powerful anthem."
},
{
title: "Blue",
artist: "Yung Kai",
cover: "a11.jpg",
audio: "Yung Kai - Blue.mp3",
biography: "*Blue* by Yung Kai is a soulful fusion of R&B and lo-fi, weaving raw emotion and introspective lyrics into a captivating sound."
},
{
title: "Akabwali",
artist: "Chanda na Kay",
cover: "a11.jpg",
audio: "Chanda na Kay - Akabwali.mp3",
biography: "Dynamic duo Chanda Na Kay return with *Akabwali*, an upbeat track celebrating Zambian culture and everyday life."
},
{
title: "TaTaTa",
artist: "Burna Boy ft. Travis Scott",
cover: "a11.jpg",
audio: "Burna Boy - TaTaTa.mp3",
biography: "Burna Boy teams up with Travis Scott for *TaTaTa*, a fusion of Afrobeats and hip-hop that’s dominating the charts."
},
{
title: "Rush",
artist: "Ayra Starr",
cover: "a11.jpg",
audio: "Ayra Starr - Rush.mp3",
biography: "Ayra Starr’s *Rush* is a high-energy Afrobeats anthem that’s been a global sensation."
},
{
title: "Water",
artist: "Tyla",
cover: "a11.jpg",
audio: "Tyla - Water.mp3",
biography: "Tyla’s *Water* is a smooth, infectious track that blends Afrobeats with Amapiano vibes."
},
{
title: "Soso",
artist: "Omah Lay",
cover: "a11.jpg",
audio: "Omah Lay - Soso.mp3",
biography: "Omah Lay’s *Soso* is a deeply emotional Afrobeats hit that resonates with fans worldwide."
},
{
title: "Who Is Your Guy? (Remix)",
artist: "Spyro ft. Tiwa Savage",
cover: "a11.jpg",
audio: "Spyro - Who Is Your Guy Remix.mp3",
biography: "Spyro and Tiwa Savage deliver *Who Is Your Guy? Remix*, a feel-good Afrobeats anthem."
},
{
title: "Egwu",
artist: "Chiké & Mohbad",
cover: "a11.jpg",
audio: "Chiké - Egwu.mp3",
biography: "Chiké and Mohbad’s *Egwu* is a vibrant Afrobeats track that’s lighting up playlists."
},
{
title: "Nairobi",
artist: "Marioo ft. Bien",
cover: "a11.jpg",
audio: "Marioo - Nairobi.mp3",
biography: "Marioo and Bien’s *Nairobi* is a smooth East African hit blending Afrobeats and Bongo Flava."
},
{
title: "Soweto",
artist: "Victony ft. Don Toliver, Rema & Tempoe",
cover: "a11.jpg",
audio: "Victony - Soweto.mp3",
biography: "Victony’s *Soweto* remix brings together Afrobeats heavyweights for a global hit."
},
{
title: "Ololufe Mi",
artist: "Jux ft. Diamond Platnumz",
cover: "a11.jpg",
audio: "Jux - Ololufe Mi.mp3",
biography: "Jux and Diamond Platnumz team up for *Ololufe Mi*, a romantic Afro-pop ballad."
},
{
title: "Me Too",
artist: "Abigail Chams ft. Harmonize",
cover: "a11.jpg",
audio: "Abigail Chams - Me Too.mp3",
biography: "Abigail Chams and Harmonize deliver *Me Too*, a catchy East African hit."
},
{
title: "Tshwala Bam",
artist: "TitoM & Yuppe ft. S.N.E & EeQue",
cover: "a11.jpg",
audio: "TitoM - Tshwala Bam.mp3",
biography: "TitoM & Yuppe’s *Tshwala Bam* is an Amapiano banger taking over dance floors."
},
{
title: "Buga",
artist: "Kizz Daniel ft. Tekno",
cover: "a11.jpg",
audio: "Kizz Daniel - Buga.mp3",
biography: "Kizz Daniel and Tekno’s *Buga* is an uplifting Afrobeats anthem that’s gone viral."
},
{
title: "Bandana",
artist: "Fireboy DML ft. Asake",
cover: "a11.jpg",
audio: "Fireboy DML - Bandana.mp3",
biography: "Fireboy DML and Asake’s *Bandana* is a powerful Afrobeats collaboration."
},
{
title: "Charm",
artist: "Rema",
cover: "a11.jpg",
audio: "Rema - Charm.mp3",
biography: "Rema’s *Charm* is a smooth Afrobeats track that’s been trending worldwide."
},
{
title: "Me & U",
artist: "Tems",
cover: "a11.jpg",
audio: "Tems - Me & U.mp3",
biography: "Tems’ *Me & U* is a soulful Afrobeats hit that showcases her unique sound."
},
{
title: "Update",
artist: "Burna Boy",
cover: "a11.jpg",
audio: "Burna Boy - Update.mp3",
biography: "Burna Boy’s *Update* is a high-energy Afrobeats track that’s dominating the charts."
},
{
title: "Timeless",
artist: "The Weeknd & Playboi Carti",
cover: "a11.jpg",
audio: "The Weeknd - Timeless.mp3",
biography: "The Weeknd and Playboi Carti team up for *Timeless*, a genre-blending hit that’s dominating the charts."
},
{
title: "Lose Control",
artist: "Teddy Swims",
cover: "a11.jpg",
audio: "Teddy Swims - Lose Control.mp3",
biography: "Teddy Swims delivers *Lose Control*, a heartfelt ballad that showcases his powerful vocals and emotional depth."
},
{
title: "Espresso",
artist: "Sabrina Carpenter",
cover: "a11.jpg",
audio: "Sabrina Carpenter - Espresso.mp3",
biography: "Sabrina Carpenter’s *Espresso* is a smooth, sultry track that’s been making waves in pop music."
},
{
title: "Not Like Us",
artist: "Kendrick Lamar",
cover: "a11.jpg",
audio: "Kendrick Lamar - Not Like Us.mp3",
biography: "Kendrick Lamar’s *Not Like Us* is a hard-hitting rap anthem that’s been trending worldwide."
},
{
title: "Beautiful Things",
artist: "Benson Boone",
cover: "a11.jpg",
audio: "Benson Boone - Beautiful Things.mp3",
biography: "Benson Boone’s *Beautiful Things* is a heartfelt song that’s resonating deeply with listeners."
},
{
title: "Abracadabra",
artist: "Lady Gaga",
cover: "a11.jpg",
audio: "Lady Gaga - Abracadabra.mp3",
biography: "Lady Gaga’s *Abracadabra* is a magical pop hit that’s captivating audiences everywhere."
},
    {
title: "Someday",
artist: "Someday",
cover: "a11.jpg",
audio: "Jucy Yung - Someday.mp3",
biography: "Jucy Yung’s *Someday* is a magical pop hit that’s captivating audiences everywhere."
}


    // Add more artists as needed
];
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
