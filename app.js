const audioElement = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const forwardButton = document.getElementById('forward');
const rewindButton = document.getElementById('rewind');
const stopButton = document.getElementById('stop');
const artistDisplay = document.querySelector('.player__artist');
const songDisplay = document.querySelector('.player__song');
const albumCover = document.querySelector('.player__img');

let activeSongIndex = 0;

const songs = [
    {
        title: 'A.C.A.B',
        artist: 'Pirlo',
        img: 'https://res.cloudinary.com/darwtkncs/image/upload/v1729634717/fqhl50cswesxrtu7htva.jpg',
        song: 'music/y2mate.com - ACAB  Pirlo Audio Oficial STRAWBERRY MOUSE.mp3'
    },
    {
        title: 'Obsesion',
        artist: 'Romeo Santos',
        img: 'https://res.cloudinary.com/darwtkncs/image/upload/v1729634717/okhypriwzkckqzpycxgn.jpg',
        song: 'music/y2mate.com - Aventura  Obsesión ft Judy Santos.mp3'
    },
    {
        title: 'El Malo',
        artist: 'Romeo Santos (Aventura)',
        img: 'https://res.cloudinary.com/darwtkncs/image/upload/v1729634728/pdlm0swfsyegie5jvrg2.jpg',
        song: 'music/y2mate.com - Aventura  El Malo.mp3'
    },
    {
        title: 'Una',
        artist: 'Blessd',
        img: 'https://res.cloudinary.com/darwtkncs/image/upload/v1729634723/hhmrnhdixlv0znlnvn1s.jpg',
        song: 'music/y2mate.com - BLESSD   UNA Official Video.mp3'
    },
    {
        title: 'P.O box',
        artist: 'Ele A El Dominio',
        img: 'https://res.cloudinary.com/darwtkncs/image/upload/v1729634728/n05d0z8tmlmuugevjijo.jpg',
        song: 'music/y2mate.com - Ele A El Dominio  Yecko  PO BOX  Spanish Version  Audio Cover.mp3'
    }
];

function setSong(index) {
    const selectedSong = songs[index];
    audioElement.src = selectedSong.song;  
    artistDisplay.textContent = selectedSong.artist;
    songDisplay.textContent = selectedSong.title;
    albumCover.src = selectedSong.img; 
}

function startPlayback() {
    audioElement.play();
}

function pausePlayback() {
    audioElement.pause();
}

function resetSong() {
    audioElement.pause();
    audioElement.currentTime = 0;
}

function nextTrack() {
    activeSongIndex = (activeSongIndex + 1) % songs.length;
    setSong(activeSongIndex);
    startPlayback();
}

function previousTrack() {
    activeSongIndex = (activeSongIndex - 1 + songs.length) % songs.length;
    setSong(activeSongIndex);
    startPlayback();
}

setSong(activeSongIndex);

playButton.addEventListener('click', startPlayback);
pauseButton.addEventListener('click', pausePlayback);
stopButton.addEventListener('click', resetSong);
forwardButton.addEventListener('click', nextTrack);
rewindButton.addEventListener('click', previousTrack);
