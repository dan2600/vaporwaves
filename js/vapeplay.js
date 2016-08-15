var theswimming = ['VhIJZX7mp-U','Be8nlANtFik','g8_IGQ8XTK0','xlGbPh4oFE8','noStPO2MVSo','AgMQIRuunxo','G1iBQUxGVqE','zC3ypWBbEcM','xUmMUHpxysY','WgCw1g1Gzoc','RJ6EHEsg6gc'];
var thevapor = ['9UNBiqK_xtQ','cU8HrO7XuiE','_nHiH4VihOc','2SEI5rpB3xE','rrSCBBZeNTY','YdGmrpeeC-U','flw9qs80Tcg','CrgTB88aafM','7UsX7_TJhgQ','HxgONXaLXNE','qs7kjvhwHlw','AHJYY3l8ZoQ'];



      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      var player1;
      function onYouTubeIframeAPIReady() {
        var swimplay = Math.floor(Math.random()* theswimming.length);
        var vapeplay = Math.floor(Math.random()* thevapor.length);
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


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        player.mute();
      }
            function onPlayerReady2(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
       if(event.data == 0)
       {
        var swimplay = Math.floor(Math.random()* theswimming.length);
        player.loadVideoById(theswimming[swimplay]);
       }
      }
       function onPlayerStateChange1(event) {
        console.log("statechange");
            if(event.data == 0)
       {
        var vapeplay = Math.floor(Math.random()* thevapor.length);
        player1.loadVideoById(thevapor[vapeplay]);
       }
      }
      $(".cover").on('click', function(){event.preventDefault();});
