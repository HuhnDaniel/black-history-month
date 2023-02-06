const artists = [
    {
        "name": "Adriene Cruz",
        "link": "https://www.adrienecruz.com/",
        "images": [
            "Adriene_Cruz1.jpeg",
            "Adriene_Cruz2.jpg",
            "Adriene_Cruz3.jpg"
        ]
    },
    {
        "name": "Arvie Smith",
        "link": "https://www.arviesmith.com/",
        "images": [
            "Arvie_Smith1.jpg",
            "Arvie_Smith2.jpg",
            "Arvie_Smith3.jpg"
        ]
    },
    {
        "name": "Augusta Savage",
        "link": "https://www.biography.com/artists/augusta-savage",
        "images": [
            "Augusta_Savage1.jpg",
            "Augusta_Savage2.jpg",
            "Augusta_Savage3.jpg"
        ]
    },
    {
        "name": "Bianca Xunise",
        "link": "https://www.biancaxunise.com/",
        "images": [
            "Bianca_Xunise1.jpg",
            "Bianca_Xunise2.jpg",
            "Bianca_Xunise3.jpg"
        ]
    },
    {
        "name": "Carrie Mae Weems",
        "link": "http://carriemaeweems.net/",
        "images": [
            "Carrie_Mae_Weems1.jpg",
            "Carrie_Mae_Weems2.jpg",
            "Carrie_Mae_Weems3.jpg"
        ]
    },
    {
        "name": "Charlotte Lewis",
        "link": "https://afriendlyletter.com/charlotte-lewis-a-fine-african-american-artist/",
        "images": [
            "Charlotte_Lewis1.jpg",
            "Charlotte_Lewis2.jpg",
            "Charlotte_Lewis3.jpg"
        ]
    },
    {
        "name": "Faith Ringgold",
        "link": "https://www.faithringgold.com/",
        "images": [
            "Faith_Ringgold1.jpg",
            "Faith_Ringgold2.jpg",
            "Faith_Ringgold3.jpg"
        ]
    },
    {
        "name": "Isaka Shamsud-Din",
        "link": "https://shamsud-din-studio.square.site/",
        "images": [
            "Isaka_Shamsud-Din1.jpg",
            "Isaka_Shamsud-Din2.jpg",
            "Isaka_Shamsud-Din3.jpg"
        ]
    },
    {
        "name": "Jacob Lawrence",
        "link": "https://lawrencemigration.phillipscollection.org/artist/about-jacob-lawrence",
        "images": [
            "Jacob_Lawrence1.jpg",
            "Jacob_Lawrence2.jpg",
            "Jacob_Lawrence3.jpg"
        ]
    },
    {
        "name": "Jean-Michel Basquiat",
        "link": "https://www.basquiat.com/",
        "images": [
            "Jean-Michel_Basquiat1.jpeg",
            "Jean-Michel_Basquiat2.jpeg",
            "Jean-Michel_Basquiat3.jpg"
        ]
    },
    {
        "name": "Kara Walker",
        "link": "http://www.karawalkerstudio.com/",
        "images": [
            "Kara_Walker1.jpg",
            "Kara_Walker2.jpg",
            "Kara_Walker3.jpg"
        ]
    },
    {
        "name": "Kehinde Wiley",
        "link": "https://kehindewiley.com/",
        "images": [
            "Kehinde_Wiley1.jpg",
            "Kehinde_Wiley2.jpg",
            "Kehinde_Wiley3.jpg"
        ]
    },
    {
        "name": "Kenturah Davis",
        "link": "http://www.kenturah.com/",
        "images": [
            "Kenturah_Davis1.jpeg",
            "Kenturah_Davis2.jpg",
            "Kenturah_Davis3.jpg"
        ]
    },
    {
        "name": "Ralph Chessé",
        "link": "https://pffcollection.com/artists/ralph-chesse/",
        "images": [
            "Ralph_Chessé1.jpg",
            "Ralph_Chessé2.jpg",
            "Ralph_Chessé3.jpg"
        ]
    },
    {
        "name": "Robert Colescott",
        "link": "https://portlandartmuseum.org/online-exhibitions/colescott/",
        "images": [
            "Robert_Colescott1.jpg",
            "Robert_Colescott2.jpg",
            "Robert_Colescott3.png"
        ]
    },
    {
        "name": "Shedrich Williames",
        "link": "http://innerlightphotographicsociety.org/members/shedrich-williames/",
        "images": [
            "Shedrich_Williames1.jpg",
            "Shedrich_Williames2.jpeg",
            "Shedrich_Williames3.jpeg"
        ]
    },
    {
        "name": "Thelma Johnson Streat",
        "link": "https://www.oregonencyclopedia.org/articles/streat_thelma_johnson/#.Y9tMFfVKiAw",
        "images": [
            "Thelma_Johnson_Streat1.jpg",
            "Thelma_Johnson_Streat2.jpg",
            "Thelma_Johnson_Streat3.jpg"
        ]
    },
    {
        "name": "Tiffany Ford",
        "link": "http://www.tiffanyford.net/about",
        "images": [
            "Tiffany_Ford1.png",
            "Tiffany_Ford2.jpg",
            "Tiffany_Ford3.jpeg"
        ]
    },
    {
        "name": "Vashti Harrison",
        "link": "https://www.vashtiharrison.com/",
        "images": [
            "Vashti_Harrison1.jpg",
            "Vashti_Harrison2.jpg",
            "Vashti_Harrison3.jpg"
        ]
    }
]

var artistsContainer = document.getElementById("artists-container");
// import artists from './artists.json' assert { type: 'json' };
// import artists from './artists.json';
// artists = require('./artists.json');

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
