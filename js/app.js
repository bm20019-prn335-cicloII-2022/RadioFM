$(document).ready(function(){
    getSong();
});

var audio = document.getElementById('player');
var music;

function getSong() {
    $.getJSON("js/app.json",function(mjson){
        music =mjson;
        console.log(music)
        genList(music);
    });
}

function playSong(id) {
    console.log("Id: " +id);
    $('#img-album').attr('src',music.songs[id].image);
    $('#player').attr('src',music.songs[id].song_url);
    audio.play();
}

function genList(music){
    $.each(music.songs,function(i,song){
        $('#playlist').append('<button class="list-group-item" style="position:relative; height="50px"" id="'+i+'">'+song.name+'</button>')

    });

    $('#playlist button').click(function(){
        var selectSong = $(this).attr('id');
        console.log(selectSong);
        playSong(selectSong)
    })
}