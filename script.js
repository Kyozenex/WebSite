
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playlist = document.getElementById('playlist');


const tracks = [
    {
        title: "Трек 1",
        artist: "Исполнитель 1",
        cover: "cover1.jpg",
        src: "music1.mp3"
    },
    {
        title: "Трек 2",
        artist: "Исполнитель 2",
        cover: "cover2.jpg",
        src: "music2.mp3"
    }
];


function loadPlaylist() {
    playlist.innerHTML = '';
    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = `${track.title} - ${track.artist}`;
        li.onclick = () => playTrack(index);
        playlist.appendChild(li);
    });
}


function playTrack(index) {
    const track = tracks[index];
    title.textContent = track.title;
    artist.textContent = track.artist;
    cover.src = track.cover;
    audio.src = track.src;
    audio.play();
    playBtn.textContent = '⏸';
}


playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
});

prevBtn.addEventListener('click', () => {

});

nextBtn.addEventListener('click', () => {

});


loadPlaylist();