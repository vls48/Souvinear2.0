//var mainContainer = document.getElementById('js-main-container'),
//    loginContainer = document.getElementById('js-login-container'),
//    loginButton = document.getElementById('js-btn-login'),
//    background = document.getElementById('js-background');
//
//var spotifyPlayer = new SpotifyPlayer();
//
//// In template function data you can pass ${data.item._____} in ___ put spotify key in API guide can look up many things to grab 
//// 
//
//var template = function (data) {
//  return `
//    <div class="main-wrapper">       
//      <div class="now-playing__img">
//        <img src="${data.item.album.images[0].url}">
//      </div>
//      <div class="now-playing__side">
//        <div class="now-playing__name">${data.item.name}</div>
//        <div class="now-playing__artist">${data.item.artists[0].name}</div>
//        <div class="now-playing__status">${data.is_playing ? 'Playing' : 'Paused'}</div>
//        <div class="progress">
//        <div class="progress">
//          <div class="progress__bar" style="width:${data.progress_ms * 100 / data.item.duration_ms}%"></div>
//        </div>
//      </div>
//    </div>
//    <div class="background" style="background-image:url(${data.item.album.images[0].url})"></div>
//  `;
//};
//
//spotifyPlayer.on('update', response => {
//  mainContainer.innerHTML = template(response);
//});
//
//spotifyPlayer.on('login', user => {
//  if (user === null) {
//    loginContainer.style.display = 'flex';
//    mainContainer.style.display = 'none';
//  } else {
//    loginContainer.style.display = 'none';
//    mainContainer.style.display = 'block';
//  }
//});
//
//loginButton.addEventListener('click', () => {
//    spotifyPlayer.login();
//});
//
//spotifyPlayer.init();
   var templateSource = document.getElementById('results-template').innerHTML
   var resultsPlaceholder = document.getElementById('results');
   var template = Handlebars.compile(templateSource);
   var playingCssClass = 'playing';
   var audioObject = null;

//Search Events
var searchform = document.getElementById('query');


function saveinput(searchText){
        console.log(searchText);
}

var fetchTracks = function(albumId,callback) {
    $.ajax({
        url:'https://api.spotify.com/v1/albums' + albumId, 
        headers: {
          'Authorization': 'Bearer' + access  
        },
        success: function(response) {
            callback(response);
        }
    });
};

var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        headers: {
          'Authorization': 'Bearer' + access  
        },
        data: {
            query: query,
            offset: 0,
            limit: 20,
            type: 'artist'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};


results.addEventListener('click', function (e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            fetchTracks(target.getAttribute('data-album-id'), function (data) {
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function () {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function () {
                    target.classList.remove(playingCssClass);
                });
            });
        }
    }
});

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
}, false);

