// Sample data representing available music and videos
        const mediaData = [
            { title: "JUCY IV", genre: "Hip Hop", type: "audio", file: "path/to/jucy_iv.mp3" },
            { title: "Juice Wrld", genre: "Rap", type: "audio", file: "path/to/juice_wrld.mp3" },
            { title: "Eminem - Lose Yourself", genre: "Rap", type: "audio", file: "path/to/eminem_lose_yourself.mp3" },
            { title: "Chef 187", genre: "Zambian", type: "video", file: "path/to/chef_187.mp4" },
            { title: "Dax - To Be A Man", genre: "Rap", type: "video", file: "path/to/dax_to_be_a_man.mp4" },
            { title: "Natasha Chansa", genre: "Pop", type: "audio", file: "path/to/natasha_chansa.mp3" },
            { title: "Nasty C - Crazy", genre: "Hip Hop", type: "audio", file:  "file:///D:/brian/website/Nasty%20C%20-%20Crazy.mp3" }
        ];

        function performSearch(event) {
            event.preventDefault(); // Prevents the default form submission
            const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
            const resultsContainer = document.getElementById('results-container');
            resultsContainer.innerHTML = ''; // Clear previous results

            // Filtering the media data based on the search term
            const results = mediaData.filter(item => 
                item.title.toLowerCase().includes(searchTerm) || 
                item.title.toLowerCase().split(' ').some(word => word.startsWith(searchTerm))
            );

            // Display results
            if (results.length > 0) {
                results.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';

                    const title = document.createElement('p');
                    title.textContent = `${item.title} - Genre: ${item.genre}`;

                    const mediaElement = document.createElement(item.type === 'audio' ? 'audio' : 'video');
                    mediaElement.controls = true; // Show controls for play, pause, etc.
                    mediaElement.src = item.file; // Link to the audio or video file
                    mediaElement.width = 350; // Set width for video
                    mediaElement.preload = "auto"; // Preload the media
                    mediaElement.loop = false; // Set to true if you want it to loop
                    mediaElement.autoplay = false; // Set to true if you want it to autoplay

                    resultItem.appendChild(title);
                    resultItem.appendChild(mediaElement);
                    resultsContainer.appendChild(resultItem);
                });
            } else {
                resultsContainer.textContent = 'No results found.';
            }
        }