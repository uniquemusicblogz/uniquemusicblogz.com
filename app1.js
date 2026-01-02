// --- Data Definitions ---
const contentData = [
    {
        id: 101,
        type: 'song',
        title: 'Jucy Yung - Someday (MP3 Download)',
        slug: 'jucy-yung-someday-mp3-download',
        artist: 'Jucy Yung',
        category: 'DOWNLOADS',
        date: 'Nov 15, 2025',
        excerpt: 'A soulful, melancholic track capturing the raw ache of heartbreak and the desperate wish to turn back time.',
        imageUrl: 'https://picsum.photos/seed/snoopjay1/600/300', 
        downloadLink: 'https://od.lk/d/NTBfMzQ2OTY4OTJf/Jucy%20Yung%20-%20Someday.mp3', 
        audioUrl: 'https://od.lk/s/NTBfMzQ2OTY4OTJf/Jucy%20Yung%20-%20Someday.mp3', 
        artistBio: 'Released on September 8, 2023, "Someday" showcases Jucy young’s signature sentimental style. The track blends soulful, emotive vocals with a poignant narrative focused on the lingering pain of a breakup, the struggle of loneliness, and the deep-seated longing to return to a relationship’s happiest moments.'
    },
    {
        id: 102,
        type: 'song',
        title: 'Phyzo the Producer - Final Selection Cypher 2022',
        slug: 'phyzo-the-producer-final-selection-cypher-2022-mp3-download',
        artist: 'Phyzo The Producer',
        category: 'DOWNLOADS',
        date: 'Nov 12, 2022',
        excerpt: 'A fresh new instrumental track perfect for late-night cruising.',
        imageUrl: 'https://picsum.photos/seed/djken/600/300',
        downloadLink: 'https://od.lk/d/NTBfMzQ1NzA0MDZf/Phyzo%20the%20Producer%20-%20Final%20Selection%20Cypher%20Mp3.mp3', 
        audioUrl: 'https://od.lk/s/NTBfMzQ1NzA0MDZf/Phyzo%20the%20Producer%20-%20Final%20Selection%20Cypher%20Mp3.mp3', 
        artistBio: '"Phyzo the producer" is a veteran producer and mixer based in Accra. His signature sound is heavily influenced by 90s West Coast hip-hop.'
    },
    {
        id: 2,
        type: 'album', 
        title: 'Florence + The Machine - "Celestial Ground" (Full Album)',
        slug: 'album-florence-and-the-machine-celestial-ground',
        category: 'ALBUMS', 
        date: 'Nov 12, 2025',
        excerpt: 'Florence Welch returns with a sprawling, ambitious, and deeply personal album.',
        imageUrl: 'https://picsum.photos/seed/florence/600/300',
        content: '<p>Florence Welch has never been one for subtlety. On "Celestial Ground," her fifth studio album, she leans into her maximalist tendencies more than ever.</p>',
        tracks: [ 
            { title: "Heaven is Waiting", duration: "4:05" },
            { title: "Cosmic Wonder", duration: "3:30" },
            { title: "Lighthouse Keeper", duration: "5:12" }
        ],
        zipDownloadLink: '#'
    },
    {
        id: 3,
        type: 'video',
        title: 'Lyrics: Someday by Jucy Yung',
        slug: 'Lyrics-someday-Jucy-yung',
        category: 'VIDEOS',
        date: 'Nov 10, 2025',
        excerpt: 'A Catchy song.',
        imageUrl: 'https://picsum.photos/seed/visualizer/600/300', 
        videoUrl: 'https://www.youtube.com/embed/O_5Nixm0dIU',
        content: '<p>Astra\'s new remix of "Neon City" demands a visual experience, and this 4K visualizer delivers.</p>',
    },
    {
        id: 4,
        type: 'song',
        title: 'Jucy Yung - Dreams',
        slug: 'jucy-yung-dreams',
        artist: 'Jucy Yung',
        category: 'DOWNLOADS',
        date: 'Oct 25, 2025',
        excerpt: 'A soulful track about chasing your dreams in a big city.',
        imageUrl: 'https://picsum.photos/seed/dreams/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        artistBio: 'Jucy Yung is an emerging artist with a unique blend of R&B and Soul.'
    },
    {
        id: 5,
        type: 'album',
        title: 'Vibe Masters - "Night Owl" (EP)',
        slug: 'vibe-masters-night-owl-ep',
        category: 'ALBUMS',
        date: 'Sep 15, 2025',
        excerpt: 'The perfect companion for late-night study sessions or chill evenings.',
        imageUrl: 'https://picsum.photos/seed/nightowl/600/300',
        content: '<p>Vibe Masters brings a collection of lo-fi beats that are sure to help you focus or relax.</p>',
        tracks: [
            { title: "Quiet Reflection", duration: "2:45" },
            { title: "Midnight Tea", duration: "3:10" },
            { title: "City Lights", duration: "2:55" }
        ],
        zipDownloadLink: '#'
    },
    {
        id: 103,
        type: 'song',
        title: 'King Blaze - Zambian Nights',
        slug: 'king-blaze-zambian-nights',
        artist: 'King Blaze',
        category: 'DOWNLOADS',
        date: 'Dec 01, 2025',
        excerpt: 'Experience the rhythm of the night with this energetic Zambian hit.',
        imageUrl: 'https://picsum.photos/seed/zambia/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        artistBio: 'King Blaze is a multi-award winning artist known for his high-energy performances and traditional Zambian fusion.'
    },
    {
        id: 104,
        type: 'song',
        title: 'Melody Queen - Soul Serenade',
        slug: 'melody-queen-soul-serenade',
        artist: 'Melody Queen',
        category: 'DOWNLOADS',
        date: 'Dec 05, 2025',
        excerpt: 'A beautiful vocal masterpiece that touches the heart.',
        imageUrl: 'https://picsum.photos/seed/soul/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        artistBio: 'Melody Queen is the leading voice in modern soul, bringing emotions to life through her powerful range.'
    },
    {
        id: 105,
        type: 'song',
        title: 'Afro Beat King - Dance Floor',
        slug: 'afro-beat-king-dance-floor',
        artist: 'Afro Beat King',
        category: 'DOWNLOADS',
        date: 'Dec 10, 2025',
        excerpt: 'The ultimate party anthem for every dance floor.',
        imageUrl: 'https://picsum.photos/seed/dance/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        artistBio: 'Afro Beat King is a producer and DJ based in Lagos, bringing the best of Afrobeats to the global stage.'
    },
    {
        id: 106,
        type: 'song',
        title: 'Yo Maps - Nga Pano',
        slug: 'yo-maps-nga-pano',
        artist: 'Yo Maps',
        category: 'DOWNLOADS',
        date: 'Dec 15, 2025',
        excerpt: 'A chart-topping emotional ballad from Zambias biggest star.',
        imageUrl: 'https://picsum.photos/seed/yomaps/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
        artistBio: 'Yo Maps is a Zambian singer, songwriter, and producer who has dominated the local music scene with hits like "Finally".'
    },
    {
        id: 107,
        type: 'song',
        title: 'Chef 187 - Pettition',
        slug: 'chef-187-pettition',
        artist: 'Chef 187',
        category: 'DOWNLOADS',
        date: 'Dec 18, 2025',
        excerpt: 'The lyrical master returns with another conscious rap banger.',
        imageUrl: 'https://picsum.photos/seed/chef187/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
        artistBio: 'Chef 187 is a legendary Zambian hip-hop artist known for his complex wordplay and street-smart lyrics.'
    },
    {
        id: 108,
        type: 'song',
        title: 'Slapdee - Mother Tongue',
        slug: 'slapdee-mother-tongue',
        artist: 'Slapdee',
        category: 'DOWNLOADS',
        date: 'Dec 20, 2025',
        excerpt: 'A powerful celebration of Zambian culture and identity.',
        imageUrl: 'https://picsum.photos/seed/slapdee/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
        artistBio: 'Slapdee is an icon of Zambian music, widely considered one of the pioneers of modern Zambian hip-hop.'
    },
    {
        id: 109,
        type: 'song',
        title: 'Burna Boy - Last Last',
        slug: 'burna-boy-last-last',
        artist: 'Burna Boy',
        category: 'DOWNLOADS',
        date: 'Dec 22, 2025',
        excerpt: 'The global Afrobeats anthem that has taken the world by storm.',
        imageUrl: 'https://picsum.photos/seed/burnaboy/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
        artistBio: 'Burna Boy is a Grammy-winning Nigerian singer and songwriter, a leading figure in the global Afrobeats movement.'
    },
    {
        id: 110,
        type: 'song',
        title: 'Tems - Free Mind',
        slug: 'tems-free-mind',
        artist: 'Tems',
        category: 'DOWNLOADS',
        date: 'Dec 24, 2025',
        excerpt: 'Soulful, ethereal, and deeply moving music from Tems.',
        imageUrl: 'https://picsum.photos/seed/tems/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
        artistBio: 'Tems is a Nigerian singer and producer whose unique vocal style has earned her international acclaim and collaborations with global superstars.'
    },
    {
        id: 111,
        type: 'song',
        title: 'Roberto - Amarulah',
        slug: 'roberto-amarulah',
        artist: 'Roberto',
        category: 'DOWNLOADS',
        date: 'Dec 26, 2025',
        excerpt: 'The dancehall classic that cemented Roberto as a continental star.',
        imageUrl: 'https://picsum.photos/seed/roberto/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
        artistBio: 'Roberto is a Zambian singer, songwriter, and producer known for his smooth R&B and dancehall fusions.'
    },
    {
        id: 112,
        type: 'song',
        title: 'Pompi - Simanjemanje',
        slug: 'pompi-simanjemanje',
        artist: 'Pompi',
        category: 'DOWNLOADS',
        date: 'Dec 28, 2025',
        excerpt: 'Gospel music with a modern, jazzy twist from the Lota House leader.',
        imageUrl: 'https://picsum.photos/seed/pompi/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
        artistBio: 'Pompi is a Zambian gospel artist who has revolutionized the genre with his unique sound and message-driven lyrics.'
    },
    {
        id: 113,
        type: 'song',
        title: 'Wizkid - Essence',
        slug: 'wizkid-essence',
        artist: 'Wizkid',
        category: 'DOWNLOADS',
        date: 'Dec 30, 2025',
        excerpt: 'The "song of the summer" that made history on international charts.',
        imageUrl: 'https://picsum.photos/seed/wizkid/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
        artistBio: 'Wizkid is one of Nigeria\'s biggest musical exports, known for his infectious melodies and global chart dominance.'
    },
    {
        id: 114,
        type: 'song',
        title: 'Cleo Ice Queen - Soldier',
        slug: 'cleo-ice-queen-soldier',
        artist: 'Cleo Ice Queen',
        category: 'DOWNLOADS',
        date: 'Jan 01, 2026',
        excerpt: 'A powerful anthem of strength and resilience from Zambia\'s hip-hop royalty.',
        imageUrl: 'https://picsum.photos/seed/cleo/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        artistBio: 'Cleo Ice Queen is an award-winning Zambian rapper and singer, known for her fierce flow and stylish branding.'
    },
    {
        id: 115,
        type: 'song',
        title: 'Macky 2 - Alabalansa',
        slug: 'macky-2-alabalansa',
        artist: 'Macky 2',
        category: 'DOWNLOADS',
        date: 'Jan 02, 2026',
        excerpt: 'The king of the streets returns with a message for his fans.',
        imageUrl: 'https://picsum.photos/seed/macky2/600/300',
        downloadLink: '#',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        artistBio: 'Macky 2 is a Zambian hip hop artist, singer, and producer, widely recognized as one of the most influential figures in the Zambian music industry.'
    }
];

// --- Favorites Manager ---
const Favorites = {
    get() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    },
    toggle(id) {
        let favs = this.get();
        if (favs.includes(id)) {
            favs = favs.filter(fid => fid !== id);
        } else {
            favs.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(favs));
        return favs.includes(id);
    },
    has(id) {
        return this.get().includes(id);
    }
};

// --- Disqus Helper ---
function loadDisqus(pageIdentifier, pageUrl, pageTitle) {
    // Reset the div
    const container = document.getElementById('disqus_thread');
    if (!container) return;
    container.innerHTML = ''; 

    // If Disqus is already loaded, just reset it
    if (window.DISQUS) {
        window.DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = pageIdentifier;
                this.page.url = pageUrl;
                this.page.title = pageTitle;
            }
        });
    } else {
        // Initial Load
        window.disqus_config = function () {
            this.page.url = pageUrl; 
            this.page.identifier = pageIdentifier; 
            this.page.title = pageTitle;
        };
        (function() { 
            var d = document, s = d.createElement('script');
            // Updated with your specific Disqus shortname
            s.src = 'https://https-uniquemusicblogz-github-io.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }
}

// --- Helper Functions ---
function generateSocialShareButtons(title) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    
    return `
        <div class="mt-8 pt-8 border-t border-gray-700">
            <h3 class="text-xl font-bold mb-4">Share this</h3>
            <div class="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" class="social-btn bg-blue-600 hover:bg-blue-700">
                    <i class="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="https://twitter.com/intent/tweet?url=${url}&text=${text}" target="_blank" class="social-btn bg-gray-700 hover:bg-black">
                    <i class="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://wa.me/?text=${text}%20${url}" target="_blank" class="social-btn bg-green-500 hover:bg-green-600">
                    <i class="fab fa-whatsapp text-xl"></i>
                </a>
                <button onclick="copyLink()" class="social-btn bg-gray-600 hover:bg-gray-500" title="Copy Link">
                    <i class="fas fa-link text-xl"></i>
                </button>
            </div>
        </div>
    `;
}

window.copyLink = function() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link copied to clipboard!");
    });
}

// --- DOM Elements ---
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');
const searchBar = document.getElementById('search-bar');
const searchIconBtn = document.getElementById('search-icon-btn');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const backButton = document.getElementById('back-button');
const contentDisplayContainer = document.getElementById('content-display-container');
const miniPlayer = document.getElementById('mini-player');
const mainAudio = document.getElementById('main-audio');
const footerSocialLinks = document.querySelectorAll('.footer-social-link');
const mobileMenuIcons = mobileMenuButton.querySelectorAll('svg');

// --- Routing ---
function showView(viewId) {
    views.forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');

    navLinks.forEach(link => {
        if (link.dataset.view === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    window.scrollTo(0, 0);
}

function routeToPath() {
    // Mobile Menu Fix
    if (mobileMenu) mobileMenu.classList.add('hidden');
    if (mobileMenuIcons.length >= 2) {
        mobileMenuIcons[0].classList.remove('hidden');
        mobileMenuIcons[1].classList.add('hidden');
    }

    const hash = window.location.hash || '#/';
    const path = hash.slice(2); 

    if (!path || path === '/') {
        showView('home-view');
        renderGrid(contentData, 'home-content-grid');
    } else if (path === 'albums/') {
        showView('albums-view');
        renderGrid(contentData.filter(i => i.type === 'album'), 'albums-content-grid');
    } else if (path === 'videos/') {
        showView('videos-view');
        renderGrid(contentData.filter(i => i.type === 'video'), 'videos-content-grid');
    } else if (path === 'downloads/') {
        showView('downloads-view');
        renderGrid(contentData.filter(i => i.type === 'song'), 'downloads-content-grid');
    } else if (path === 'favorites/') {
        showView('favorites-view');
        const favs = Favorites.get();
        const favItems = contentData.filter(i => favs.includes(i.id));
        renderGrid(favItems, 'favorites-content-grid');
    } else if (path === 'about/') {
        showView('about-view');
    } else if (path.startsWith('search/')) {
        const query = decodeURIComponent(path.split('/')[1]);
        searchBar.value = query;
        performSearch(query);
    } else {
        const parts = path.split('/').filter(p => p);
        if (parts.length >= 2) {
            const slug = parts[parts.length - 1];
            const item = contentData.find(i => i.slug === slug);
            if (item) {
                renderDetail(item);
                showView('detail-view');
            }
        }
    }
}

// --- Grid Rendering ---
function renderGrid(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">No content found.</div>';
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="content-card bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 relative" onclick="navigateTo('${item.type}s/${item.slug}')">
            <img src="${item.imageUrl}" class="w-full h-48 object-cover">
            <div class="p-5">
                <div class="flex justify-between items-start">
                    <span class="text-red-500 text-xs font-bold uppercase tracking-wider">${item.category}</span>
                    <button onclick="event.stopPropagation(); toggleFavorite(${item.id}, true)" class="text-xl ${Favorites.has(item.id) ? 'text-red-500' : 'text-gray-500'}">
                        <i class="${Favorites.has(item.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <h3 class="text-xl font-bold mt-2 mb-2 line-clamp-1">${item.title}</h3>
                <p class="text-gray-400 text-sm line-clamp-2">${item.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// --- Detail View Rendering ---
function renderDetail(item) {
    let content = '';
    const isFav = Favorites.has(item.id);
    const socialButtons = generateSocialShareButtons(item.title);

    if (item.type === 'song') {
        const downloadAction = item.downloadLink === '#' ? 'onclick="simulateDownload(event)"' : '';
        content = `
            <div class="p-6 md:p-10">
                <div class="flex flex-col md:flex-row gap-8">
                    <img src="${item.imageUrl}" class="w-full md:w-1/3 rounded-2xl shadow-xl object-cover">
                    <div class="flex-grow">
                        <div class="flex justify-between items-start">
                            <span class="text-red-500 font-bold uppercase tracking-widest">${item.category}</span>
                            <button onclick="toggleFavorite(${item.id}, true)" class="text-3xl ${isFav ? 'text-red-500' : 'text-gray-500'}">
                                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                        </div>
                        <h1 class="text-4xl font-black mt-2 mb-4">${item.title}</h1>
                        <p class="text-gray-400 mb-6">Released: ${item.date}</p>
                        
                        <div class="bg-gray-900 p-6 rounded-2xl border border-gray-700 mb-8">
                            <h3 class="text-xl font-bold mb-4 flex items-center"><i class="fas fa-play-circle mr-2 text-red-500"></i> Listen Now</h3>
                            <button onclick="playSong(${item.id})" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <i class="fas fa-play"></i> Play Preview
                            </button>
                            <a href="${item.downloadLink}" ${downloadAction} class="w-full mt-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                                <i class="fas fa-download"></i> Download MP3
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-10 prose prose-invert max-w-none">
                    <h2 class="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">About the Artist</h2>
                    <p class="text-gray-300 leading-relaxed text-lg">${item.artistBio}</p>
                </div>

                <!-- Disqus Comments Section -->
                <div class="mt-12 pt-10 border-t border-gray-700">
                    <h3 class="text-2xl font-bold mb-6">Comments</h3>
                    <div id="disqus_thread" class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg min-h-[200px]"></div>
                    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                </div>

                ${socialButtons}
            </div>
        `;
        
        // Initialize/Reload Disqus
        // We use the item.slug as the unique identifier
        setTimeout(() => {
            loadDisqus(item.slug, `https://uniquemusicblogz.github.io/#/downloads/${item.slug}`, item.title);
        }, 100);

    } else if (item.type === 'video') {
        content = `
            <div class="p-6 md:p-10">
                <h1 class="text-4xl font-black mb-6">${item.title}</h1>
                <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black mb-8">
                    <iframe class="w-full h-full" src="${item.videoUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="prose prose-invert max-w-none">
                    ${item.content}
                </div>
                ${socialButtons}
            </div>
        `;
    } else if (item.type === 'album') {
        const downloadAction = item.zipDownloadLink === '#' ? 'onclick="simulateDownload(event)"' : '';
        content = `
            <div class="relative h-64 md:h-96">
                <img src="${item.imageUrl}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                    <h1 class="text-4xl md:text-6xl font-black">${item.title}</h1>
                </div>
            </div>
            <div class="p-6 md:p-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div class="md:col-span-2">
                        <div class="prose prose-invert max-w-none mb-8">
                            ${item.content}
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Tracklist</h3>
                        <div class="space-y-2">
                            ${item.tracks.map((t, idx) => `
                                <div class="flex justify-between p-4 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-750 transition-colors">
                                    <span class="font-medium">${idx + 1}. ${t.title}</span>
                                    <span class="text-gray-500">${t.duration}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-red-600 p-6 rounded-2xl shadow-xl text-center">
                            <h4 class="text-xl font-bold mb-2">Get Full Album</h4>
                            <p class="text-sm mb-6 opacity-90">Download all tracks in a single ZIP file.</p>
                            <a href="${item.zipDownloadLink}" ${downloadAction} class="block bg-gray-900 text-white font-black py-4 rounded-xl hover:scale-105 transition-transform">
                                <i class="fas fa-file-archive mr-2"></i> DOWNLOAD ZIP
                            </a>
                        </div>
                    </div>
                </div>
                ${socialButtons}
            </div>
        `;
    }

    contentDisplayContainer.innerHTML = content;
}

// --- Actions ---
window.navigateTo = function(path) {
    window.location.hash = '#/' + path;
};

window.toggleFavorite = function(id, refreshDetail = false) {
    Favorites.toggle(id);
    routeToPath(); 
};

window.playSong = function(id) {
    const item = contentData.find(i => i.id === id);
    if (!item) return;

    const miniPlayerImg = document.getElementById('mini-player-img');
    const miniPlayerTitle = document.getElementById('mini-player-title');
    const miniPlayerArtist = document.getElementById('mini-player-artist');
    const playPauseBtn = document.getElementById('audio-play-pause');

    miniPlayerImg.src = item.imageUrl;
    miniPlayerTitle.textContent = item.title;
    miniPlayerArtist.textContent = item.artist;
    mainAudio.src = item.audioUrl;
    
    miniPlayer.classList.remove('translate-y-full');
    mainAudio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
};

window.simulateDownload = function(e) {
    e.preventDefault();
    alert("This is a demo! In a real app, the download would start now.");
};

// --- Player Logic ---
document.getElementById('audio-play-pause').addEventListener('click', () => {
    const btn = document.getElementById('audio-play-pause');
    if (mainAudio.paused) {
        mainAudio.play();
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        mainAudio.pause();
        btn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

mainAudio.addEventListener('timeupdate', () => {
    const progress = (mainAudio.currentTime / mainAudio.duration) * 100;
    document.getElementById('audio-progress').style.width = progress + '%';
});

document.getElementById('close-mini-player').addEventListener('click', () => {
    miniPlayer.classList.add('translate-y-full');
    mainAudio.pause();
});

// --- Search ---
function performSearch(query) {
    if(!query) return;
    showView('search-results-view');
    const results = contentData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.artist?.toLowerCase().includes(query.toLowerCase())
    );
    
    document.getElementById('search-query-display').textContent = query;
    document.getElementById('search-count-display').textContent = `Found ${results.length} results.`;
    renderGrid(results, 'search-content-grid');
}

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchBar.value.trim();
        if (query) window.location.hash = `#/search/${encodeURIComponent(query)}`;
    }
});

searchIconBtn.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) window.location.hash = `#/search/${encodeURIComponent(query)}`;
});

// --- Initialization ---
window.addEventListener('hashchange', routeToPath);
backButton.addEventListener('click', () => history.back());

mobileMenuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuIcons[0].classList.toggle('hidden', !isHidden);
    mobileMenuIcons[1].classList.toggle('hidden', isHidden);
});

// Initial setup
renderGrid(contentData, 'home-content-grid');
routeToPath();
