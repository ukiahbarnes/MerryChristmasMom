var playAll = new Audio('./audio/all.mp3');
var playUkiah = new Audio('./audio/ukiah.mp3')
var playAnthony = new Audio('./audio/anthony.mp3')
var playMyah = new Audio('./audio/myah2.mp3')

function playAudio(sound) {

    if (sound == 'playAll') {
        playAll.play();
        document.getElementById("withLove").innerHTML = "With love, <br/> your kids"
        document.getElementById("ukiahFace").style.display = "inline-block";
        document.getElementById("ukiahFace").style.width = "30vw";
        document.getElementById("anthonyFace").style.display = "inline-block";
        document.getElementById("anthonyFace").style.width = "30vw";
        document.getElementById("myahFace").style.display = "inline-block";
        document.getElementById("myahFace").style.width = "30vw";
    } 
    if (sound == 'playUkiah') {
        playUkiah.play()
        document.getElementById("withLove").innerHTML = "With love, <br/> Ukiah"
        document.getElementById("ukiahFace").style.display = "inline-block";
        document.getElementById("ukiahFace").style.width = "30vw";
        document.getElementById("anthonyFace").style.display = "none";
        document.getElementById("myahFace").style.display = "none";
    }
    if (sound == 'playAnthony') {
        playAnthony.play()
        document.getElementById("withLove").innerHTML = "With love, <br/> Anthony"
        document.getElementById("anthonyFace").style.display = "inline-block";
        document.getElementById("anthonyFace").style.width = "30vw";
        document.getElementById("ukiahFace").style.display = "none";
        document.getElementById("myahFace").style.display = "none";
    }
     if (sound == 'playMyah') {
        playMyah.play()
        document.getElementById("withLove").innerHTML = "With love, <br/> Myah"
        document.getElementById("myahFace").style.display = "inline-block";
        document.getElementById("myahFace").style.width = "30vw";
        document.getElementById("ukiahFace").style.display = "none";
        document.getElementById("anthonyFace").style.display = "none";
    }
  }

  function myTest() {
    document.getElementById("test").innerHTML = "It works!";
  }