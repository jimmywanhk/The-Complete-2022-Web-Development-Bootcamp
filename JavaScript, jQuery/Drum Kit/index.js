var buttonList = document.querySelectorAll(".drum");
for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function() {
        makeSound(this.textContent);
        buttonAnimation(this.textContent);
    });
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

function makeSound(key) {
    var audioPath = "";
    switch (key) {
        case "w":
            audioPath = "sounds/tom-1.mp3";
            break;

        case "a":
            audioPath = "sounds/tom-2.mp3";
            break;

        case "s":
            audioPath = "sounds/tom-3.mp3";
            break;

        case "d":
            audioPath = "sounds/tom-4.mp3";
            break;

        case "j":
            audioPath = "sounds/snare.mp3";
            break;

        case "k":
            audioPath = "sounds/crash.mp3";
            break;

        case "l":
            audioPath = "sounds/kick-bass.mp3";
            break;

        default:
            console.log(this);
            break;
    }

    if (audioPath !== "") {
        var audio = new Audio(audioPath);
        audio.play();
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    if (activeButton !== null) {
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);

    }
}