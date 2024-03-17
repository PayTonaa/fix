document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('myAudio');
    const volumeBar = document.getElementById('volume-bar');
    const volumeThumb = document.getElementById('volume-thumb');
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');

    // Set initial volume to 0.5 (50%)
    audio.volume = 0.5;
    // Set the thumb position to 50% of the volume bar's width
    volumeThumb.style.left = (volumeBar.offsetWidth / 2) - (volumeThumb.offsetWidth / 2) + 'px';

    volumeBar.addEventListener('click', handleVolumeChange);

    volumeThumb.addEventListener('mousedown', function (e) {
        handleVolumeChange(e);
        document.addEventListener('mousemove', handleVolumeChange);
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', handleVolumeChange);
        });
    });

    function handleVolumeChange(e) {
        // Calculate the new volume based on the click position
        const newVolume = (e.clientX - volumeBar.getBoundingClientRect().left) / volumeBar.offsetWidth;
        audio.volume = newVolume;

        // Update the thumb position
        volumeThumb.style.left = (newVolume * volumeBar.offsetWidth) - (volumeThumb.offsetWidth / 2) + 'px';
    }

    // Add event listeners for the control buttons
    playButton.addEventListener('click', () => audio.play());
    stopButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});