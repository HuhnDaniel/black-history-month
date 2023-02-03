var artistsContainer = document.getElementById("artists-container");
import artists from './artists.json' assert { type: 'json' };

for(var i = 0; i < artists.length; i++) {
    var thisArtist = document.createElement("article");

    var artistName = document.createElement("h2");
    artistName.textContent = artists[i].name;

    var artistLink = document.createElement("a");
    artistLink.textContent = artists[i].link;
    artistLink.setAttribute("href", artists[i].link);
    artistLink.setAttribute("rel", "noopener noreferrer");
    artistLink.setAttribute("target", "_blank");

    var artistImages = document.createElement("section");
    var artistPhoto = document.createElement("img");
    artistPhoto.setAttribute("src", "./assets/" + artists[i].images[0]);
    artistImages.appendChild(artistPhoto);

    var artistWorks = document.createElement("div")

    for(var j = 1; j < artists[i].images.length; j++) {
        var thisImage = document.createElement("img");
        thisImage.setAttribute("src", "./assets/" + artists[i].images[j]);
        artistWorks.appendChild(thisImage);
    }

    artistImages.appendChild(artistWorks);

    thisArtist.appendChild(artistName);
    thisArtist.appendChild(artistLink);
    thisArtist.appendChild(artistImages);

    artistsContainer.appendChild(thisArtist);
}