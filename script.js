// Function to fetch NASA image of the day
function fetchNasaImage() {
    const apiKey ='eTtCSirDb0tjDLLvyxnkbeLUAodY9vQKKsOrQmmT';  // Replace with your NASA API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('nasa-image').src = data.url;
            document.getElementById('nasa-loading').style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching NASA image:', error);
        });
}



fetchNasaImage();
