window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        console.log("jQuery is loaded! and music-functionality.js is recognized!");
    } else {
        // jQuery is not loaded
        alert("jQuery Doesn't Work");
    }
}

var audio = $("#mySoundClip")[0];
$(".inner").mouseenter(function() {
  alert("hover registered")
  audio.play();
});
