//Youtube Clips lists
var theswimming = ['VhIJZX7mp-U', 'Be8nlANtFik', 'g8_IGQ8XTK0', 'xlGbPh4oFE8', 'noStPO2MVSo', 'AgMQIRuunxo', 'G1iBQUxGVqE', 'zC3ypWBbEcM', 'xUmMUHpxysY', 'WgCw1g1Gzoc', 'RJ6EHEsg6gc'];
var thevapor = ['9UNBiqK_xtQ', 'cU8HrO7XuiE', '_nHiH4VihOc', '2SEI5rpB3xE', 'rrSCBBZeNTY', 'YdGmrpeeC-U', 'flw9qs80Tcg', 'CrgTB88aafM', '7UsX7_TJhgQ', 'HxgONXaLXNE', 'qs7kjvhwHlw', 'AHJYY3l8ZoQ'];

//Youtube APi
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Swim Video and Vape Video
var player;
var player1;

//Run once the API is ready
function onYouTubeIframeAPIReady() {
    var swimplay = Math.floor(Math.random() * theswimming.length);
    var vapeplay = Math.floor(Math.random() * thevapor.length);
    player = new YT.Player('player', {
        height: '1080',
        width: '1920',
        videoId: theswimming[swimplay],
        playerVars: { 'controls': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player1 = new YT.Player('player1', {
        height: '390',
        width: '640',
        videoId: thevapor[vapeplay],
        suggestedQuality: 'large',
        playerVars: { 'controls': 0 },
        events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange1
        }
    });

}

//Play and mute the swim video when it loads
function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
}

//play the vape video when it loads
function onPlayerReady2(event) {
    event.target.playVideo();
}

//playAnother Swim Video
function onPlayerStateChange(event) {
    if (event.data == 0) {
        var swimplay = Math.floor(Math.random() * theswimming.length);
        player.loadVideoById(theswimming[swimplay]);
    }
}

//playAnother Swim Video
function onPlayerStateChange1(event) {
    console.log("statechange");
    if (event.data == 0) {
        var vapeplay = Math.floor(Math.random() * thevapor.length);
        player1.loadVideoById(thevapor[vapeplay]);
    }
}
//prevent people from clicking on the video
$(".cover").on('click', function() { event.preventDefault(); });
