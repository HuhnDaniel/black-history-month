let artistsContainer = document.getElementById("artists-container");
import artists from './artists.json' assert { type: 'json' };

for(let i = 0; i < artists.length; i++) {
    let thisArtist = document.createElement("article");

    let artistName = document.createElement("h2");
    artistName.textContent = artists[i].name;

    let artistLink = document.createElement("a");
    artistLink.textContent = artists[i].link;
    artistLink.setAttribute("href", artists[i].link);
    artistLink.setAttribute("rel", "noopener noreferrer");
    artistLink.setAttribute("target", "_blank");

    let artistImages = document.createElement("section");
    let artistPhoto = document.createElement("img");
    artistPhoto.setAttribute("src", "./assets/" + artists[i].images[0]);
    artistImages.appendChild(artistPhoto);

    let artistWorks = document.createElement("div")

    for(let j = 1; j < artists[i].images.length; j++) {
        let thisImage = document.createElement("img");
        thisImage.setAttribute("src", "./assets/" + artists[i].images[j]);
        artistWorks.appendChild(thisImage);
    }

    artistImages.appendChild(artistWorks);

    thisArtist.appendChild(artistName);
    thisArtist.appendChild(artistLink);
    thisArtist.appendChild(artistImages);

    artistsContainer.appendChild(thisArtist);
}