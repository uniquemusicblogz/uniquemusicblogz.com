const mediaData = [
    {
        title: "Crazy",
        artist: "Nasty C",
        cover: "a11.jpg",
        audio: "https://raw.githubusercontent.com/uniquemusicblogz/uniquemusicblogz.com/main/Nasty%20C%20-%20Crazy.mp3",
        biography: "Nasty C is a talented South African rapper known for his unique sound and powerful lyrics."
    },
    {
        title: "Mr and Mrs",
        artist: "Yo Maps",
        cover: "a11.jpg",
        audio: "https://raw.githubusercontent.com/uniquemusicblogz/uniquemusicblogz.com/main/Yo%20Maps%20-%20Ngate%20ba%20Yaweh.mp3",

        biography: "Yo Maps is a popular Zambian musician celebrated for his catchy tunes and engaging performances."
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
} // << **Added missing closing bracket!**

function changePage(page) {
    currentPage = page;
    renderMedia(filteredData);
}
