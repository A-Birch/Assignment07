/*eslint-env browser*/

// HELPER FUNCTION TO GET ELEMENT FROM THE DOM
var $ = function (id) {
	"use strict";
	return window.document.getElementById(id);
};

//GLOBAL VARIABLES
var albums = [["David Bowie", "Let's Dance"],
			  ["The Prodigy", "Music For The Jilted Generation"],
			  ["Marilyn Manson", "Mechanical Animals"],
			  ["Madonna", "Confessions on a Dance Floor"],
			  ["Unkle", "War Stories"]];

var select = $('albums');
var albumInstance, albumCollection = [];

//CREATE A JUKEBOX CLASS
var Jukebox = function () {
    "use strict";
    var self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

//CREATE AN ALBUM CLASS
var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + ' "' + title + '". The album has been played ' + this.played + ' times.';
        }
    };
    return self;
};

//CREATE JUKEBOX
var jbox = new Jukebox();

//CREATE DROPDOWN MENU AND ALBUMS COLLECTION FROM ARRAY
function createMenu() {
	"use strict";
	var option, i;
	for (i in albums) {
		option = document.createElement("option");
		option.textContent = albums[i][0] + ' "' + albums[i][1] + '"';
		option.value = i;
		select.appendChild(option);

		//CREATE INSTANCES OF ALBUMS FROM ARRAY
		albumInstance = new Album(albums[i][0], albums[i][1]);
		jbox.addAlbum(albumInstance);
		albumCollection.push(albumInstance);
	}
}

function main() {
	"use strict";
	createMenu();
	window.addEventListener("load", function () {

		$('play').addEventListener("click", function () {
			var optValue = select.value;
			if (isNaN(optValue)) {
				window.alert("Please select an album!");
			} else {
				window.console.log(albumCollection[optValue]);
				albumCollection[optValue].play();
			}
		});

		//DISPLAY FAVORITE ALBUM BASED ON PLAYS
		$('show').addEventListener("click", function () {
			$("favoriteAlbum").innerHTML = "You favorite album is: " + jbox.favoriteAlbum();
		});
	});
}

main();
