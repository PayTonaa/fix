// script.js
const audio = document.getElementById('myAudio');
const volumeRange = document.getElementById('volumeRange');

// Ustaw początkową głośność na 100%
audio.volume = 1;

// Obsługa zmiany głośności
volumeRange.addEventListener('input', () => {
    audio.volume = volumeRange.value;
});
