var audio = $("#mySoundClip")[0];
$(".item thumb").mouseenter(function() {
  console.log("hover registered")
  audio.play();
});
