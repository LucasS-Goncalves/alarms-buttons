function playAlarm (audioId) {
    document.getElementById(audioId).play()
};

const buttons = document.querySelectorAll("button");

for( i = 0; i < buttons.length; i++ ){
    const button = buttons[i].classList[0];
    buttons[i].addEventListener("click", () => {
        playAlarm(`sound_${button}`);
    })
}
