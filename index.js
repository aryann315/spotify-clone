let songListEnglish = [
  {
    songName: "Until I Found You",
    artistName: "Stephen Sanchez",
    coverPath: "images/songimg/English/song1.jpg",
    songPath: "sounds/songs/English/song1.mp3",
  },
  {
    songName: "Sunroof",
    artistName: "Nicky Youre",
    coverPath: "images/songimg/English/song2.jpg",
    songPath: "sounds/songs/English/song2.mp3",
  },
  {
    songName: "As it was",
    artistName: "Harry Styles",
    coverPath: "images/songimg/English/song3.jpg",
    songPath: "sounds/songs/English/song3.mp3",
  },
  {
    songName: "Glimpse of Us",
    artistName: "Joji",
    coverPath: "images/songimg/English/song4.jpg",
    songPath: "sounds/songs/English/song4.mp3",
  },
  {
    songName: "Get you to the moon",
    artistName: "Kina",
    coverPath: "images/songimg/English/song5.jpg",
    songPath: "sounds/songs/English/song5.mp3",
  },
  {
    songName: "Believer",
    artistName: "Imagine Dragons",
    coverPath: "images/songimg/English/song6.jpg",
    songPath: "sounds/songs/English/song6.mp3",
  },
  {
    songName: "Night Changes",
    artistName: "One Direction",
    coverPath: "images/songimg/English/song7.jpg",
    songPath: "sounds/songs/English/song7.mp3",
  },
  {
    songName: "Heat Waves",
    artistName: "Glass Animals",
    coverPath: "images/songimg/English/song8.jpg",
    songPath: "sounds/songs/English/song8.mp3",
  },
  {
    songName: "Faded",
    artistName: "Alan Walker",
    coverPath: "images/songimg/English/song9.jpg",
    songPath: "sounds/songs/English/song9.mp3",
  },
  {
    songName: "Runaway",
    artistName: "Aurora",
    coverPath: "images/songimg/English/song10.jpg",
    songPath: "sounds/songs/English/song10.mp3",
  },
  {
    songName: "Hymn For the Weekend",
    artistName: "Coldplay",
    coverPath: "images/songimg/English/song11.jpg",
    songPath: "sounds/songs/English/song11.mp3",
  },
  {
    songName: "Perfect",
    artistName: "Ed Sheeran",
    coverPath: "images/songimg/English/song12.jpg",
    songPath: "sounds/songs/English/song12.mp3",
  },
  {
    songName: "Dandelions",
    artistName: "Ruth B.",
    coverPath: "images/songimg/English/song13.jpg",
    songPath: "sounds/songs/English/song13.mp3",
  },
  {
    songName: "Unstoppable",
    artistName: "Sia",
    coverPath: "images/songimg/English/song14.jpg",
    songPath: "sounds/songs/English/song14.mp3",
  },
  {
    songName: "See You Again",
    artistName: "Wiz Khalifa, Charlie Puth",
    coverPath: "images/songimg/English/song15.jpg",
    songPath: "sounds/songs/English/song15.mp3",
  },
];

let songListHindi = [
  {
    songName: "Kasoor",
    artistName: "Prateek Kuhad",
    coverPath: "images/songimg/Hindi/song16.jpg",
    songPath: "sounds/songs/Hindi/song16.mp3",
  },
  {
    songName: "Chand Baliyan",
    artistName: "Aditya A.",
    coverPath: "images/songimg/Hindi/song17.jpg",
    songPath: "sounds/songs/Hindi/song17.mp3",
  },
  {
    songName: "Rangisari",
    artistName: "Kanishk & Kavita",
    coverPath: "images/songimg/Hindi/song18.jpg",
    songPath: "sounds/songs/Hindi/song18.mp3",
  },
  {
    songName: "Shayad",
    artistName: "Arijit Singh",
    coverPath: "images/songimg/Hindi/song19.jpg",
    songPath: "sounds/songs/Hindi/song19.mp3",
  },
  {
    songName: "Kabira Lofi",
    artistName: "Tochi Raina, Rekha Bhardwaj",
    coverPath: "images/songimg/Hindi/song20.jpg",
    songPath: "sounds/songs/Hindi/song20.mp3",
  },
  {
    songName: "Pasoori",
    artistName: "Ali Sethi, Shae Gill",
    coverPath: "images/songimg/Hindi/song21.jpg",
    songPath: "sounds/songs/Hindi/song21.mp3",
  },
  {
    songName: "Dil Diyan Gallan",
    artistName: "Atif Aslam",
    coverPath: "images/songimg/Hindi/song22.jpg",
    songPath: "sounds/songs/Hindi/song22.mp3",
  },
  {
    songName: "Kho Gaye Hum Kahan",
    artistName: "Jasleen Royal, Prateek Kuhad",
    coverPath: "images/songimg/Hindi/song23.jpg",
    songPath: "sounds/songs/Hindi/song23.mp3",
  },
  {
    songName: "Kesariya",
    artistName: "Arijit Singh",
    coverPath: "images/songimg/Hindi/song24.jpg",
    songPath: "sounds/songs/Hindi/song24.mp3",
  },
  {
    songName: "Teri Mitti",
    artistName: "B Praak",
    coverPath: "images/songimg/Hindi/song25.jpg",
    songPath: "sounds/songs/Hindi/song25.mp3",
  },
  {
    songName: "Zindagi Kuch Toh Bata",
    artistName: "Jubin Nautiyal",
    coverPath: "images/songimg/Hindi/song26.jpg",
    songPath: "sounds/songs/Hindi/song26.mp3",
  },
  {
    songName: "Chitta",
    artistName: "Manan Bhardwaj",
    coverPath: "images/songimg/Hindi/song27.jpg",
    songPath: "sounds/songs/Hindi/song27.mp3",
  },
  {
    songName: "Mitwa",
    artistName: "Shankar Mahadevan",
    coverPath: "images/songimg/Hindi/song28.jpg",
    songPath: "sounds/songs/Hindi/song28.mp3",
  },
  {
    songName: "Kun Faya Kun",
    artistName: "AR Rahman, Mohit Chauhan",
    coverPath: "images/songimg/Hindi/song29.jpg",
    songPath: "sounds/songs/Hindi/song29.mp3",
  },
  {
    songName: "Ranjha",
    artistName: "B Praak, Jasleen Royal",
    coverPath: "images/songimg/Hindi/song30.jpg",
    songPath: "sounds/songs/Hindi/song30.mp3",
  },
];

let songArray = [];
let currentSong = new Audio();
let currentlyPlaying = -1;
document.querySelector(".progress-slider input").disabled = true;

mediaButtons();
randomizeSongList("Hindi", songListHindi);
randomizeSongList("English", songListEnglish);

function randomizeSongList(s, songList) {
  var songContainer = document.querySelectorAll(
    ".Top-" + s + " .song-container"
  );

  var totalLength = songContainer.length;
  let checkArray = Array(totalLength).fill(0);
  var i = 0;

  while (i < totalLength) {
    var songImageContainer = songContainer[i].querySelector(
      ".song-img-container"
    );
    var songNameContainer = songContainer[i].querySelector(
      ".song-details .songName"
    );
    var artistNameContainer = songContainer[i].querySelector(
      ".song-details .artistName"
    );

    let randomNumber = generateRandomNumber();
    if (checkArray[randomNumber] !== 1) {
      var coverPath = songList[randomNumber].coverPath;
      songImageContainer.style.backgroundImage = "url(" + coverPath + ")"; //CoverImage

      var songPath = songList[randomNumber].songPath; //Song

      var songName = songList[randomNumber].songName; //SongName
      songNameContainer.textContent = songName;

      var artistName = songList[randomNumber].artistName; //ArtistName
      artistNameContainer.textContent = artistName;

      var isFav = 0;
      songArray.push({
        songName,
        artistName,
        songPath,
        coverPath,
        isFav,
      });

      songContainer[i].addEventListener("click", function () {
        var index = this.id - 1;
        playSong(index);
      });

      checkArray[randomNumber] = 1;
      i++;
    }
  }
}

function generateRandomNumber() {
  var randomNumber = Math.round(Math.random() * 14);
  return randomNumber;
}

function playSong(index) {
  document.querySelector(".progress-slider input").disabled = false;
  if (currentlyPlaying === -1) {
    currentSong.src = songArray[index].songPath;
    currentSong.play();
    isPlaying(index);
  } else if (index >= songArray.length) {
    index = 0;
    currentSong.src = songArray[index].songPath;
    currentSong.play();
    isPlaying(index);
  } else if (index === currentlyPlaying) {
    if (currentSong.paused || currentSong.currentTime <= 0) {
      currentSong.play();
      isPlaying(index);
    } else {
      currentSong.pause();
      isPaused();
    }
  } else {
    currentSong.pause();
    currentSong.src = songArray[index].songPath;
    currentSong.play();
    isPlaying(index);
  }

  currentlyPlaying = index;
  updateTime();

  currentSong.addEventListener("ended", function () {
    playSong(index + 1);
  });
}

function mediaButtons() {
  $("#play-btn").on("click", function () {
    if (currentlyPlaying !== -1) {
      if (currentSong.paused || currentSong.currentTime <= 0) {
        currentSong.play();
        isPlaying(currentlyPlaying, false);
      } else {
        currentSong.pause();
        isPaused();
      }
    }
  });

  $("#forward-btn").on("click", function () {
    if (currentlyPlaying !== -1) {
      currentlyPlaying++;

      if (currentlyPlaying >= songArray.length) {
        currentSong.src = songArray[0].songPath;
        currentlyPlaying = 0;
      } else {
        currentSong.src = songArray[currentlyPlaying].songPath;
      }

      currentSong.play();
      isPlaying(currentlyPlaying, true);
    }
  });

  $("#backward-btn").on("click", function () {
    if (currentlyPlaying !== -1) {
      currentlyPlaying--;

      if (currentlyPlaying < 0) {
        currentlyPlaying = songArray.length - 1;
        currentSong.src = songArray[currentlyPlaying].songPath;
      } else {
        currentSong.src = songArray[currentlyPlaying].songPath;
      }

      currentSong.play();
      isPlaying(currentlyPlaying, true);
    }
  });
}

function isPlaying(index) {
  var songPic = document.querySelector(".songDetails .songPic");
  var songInfo = document.querySelector(".songDetails .songInfo");
  var artistInfo = document.querySelector(".songDetails .artistInfo");
  var favSong = document.querySelector(".songDetails .fav-song");

  songPic.style.backgroundImage = "url(" + songArray[index].coverPath + ")";
  songInfo.textContent = songArray[index].songName;
  artistInfo.textContent = songArray[index].artistName;
  favSong.style.visibility = "visible";
  favSongChange(index);

  $("#play-btn").removeClass("fa-circle-play");
  $("#play-btn").addClass("fa-circle-pause");
}

$(".songDetails .fav-song i").on("click", function () {
  if (songArray[currentlyPlaying].isFav === 0) {
    $(".songDetails .fav-song i").removeClass("fa-regular fa-heart");
    $(".songDetails .fav-song i").addClass("fa-solid fa-heart green-heart");
    songArray[currentlyPlaying].isFav = 1;
  } else {
    $(".songDetails .fav-song i").removeClass("fa-solid fa-heart green-heart");
    $(".songDetails .fav-song i").addClass("fa-regular fa-heart");
    songArray[currentlyPlaying].isFav = 0;
  }
});

function isPaused() {
  $("#play-btn").removeClass("fa-circle-pause");
  $("#play-btn").addClass("fa-circle-play");
}

function favSongChange(index) {
  if (songArray[index].isFav === 0) {
    $(".songDetails .fav-song i").removeClass("fa-solid fa-heart green-heart");
    $(".songDetails .fav-song i").addClass("fa-regular fa-heart");
  } else {
    $(".songDetails .fav-song i").removeClass("fa-regular fa-heart");
    $(".songDetails .fav-song i").addClass("fa-solid fa-heart green-heart");
  }
}

let progressSlider = document.querySelector(".progress-slider");
let progressSliderInput = document.querySelector(".progress-slider input");
let progressSliderProgress = document.querySelector(
  ".progress-slider progress"
);

function updateTime() {
  currentSong.addEventListener("timeupdate", function () {
    var progress = parseInt(
      (currentSong.currentTime / currentSong.duration) * 100
    );
    progressSliderInput.value = progress;
    progressSliderProgress.value = progress;
  });
}

progressSliderInput.addEventListener("click", function (e) {
  var x = e.pageX - progressSlider.offsetLeft;
  var clickedValue = Math.round((x / progressSlider.offsetWidth) * 100);
  currentSong.currentTime = (clickedValue / 100) * currentSong.duration;
});

let volumeSlider = document.querySelector(".volume-slider");
let volumeSliderInput = document.querySelector(".volume-slider input");
let volumeSliderProgress = document.querySelector(".volume-slider progress");

volumeSliderInput.addEventListener("click", function (e) {
  var x = e.pageX - volumeSlider.offsetLeft;
  var clickedValue = Math.round((x / volumeSlider.offsetWidth) * 100);

  volumeSliderInput.value = clickedValue;
  volumeSliderProgress.value = clickedValue;

  if (clickedValue <= 0) {
    $(".volume-btn i").removeClass("fa-volume-low fa-volume fa-volume-high");
    $(".volume-btn i").addClass("fa-volume-xmark");
    clickedValue = 0;
  } else if (clickedValue > 0 && clickedValue <= 50) {
    $(".volume-btn i").removeClass("fa-volume-xmark fa-volume fa-volume-high");
    $(".volume-btn i").addClass("fa-volume-low");
  } else if (clickedValue > 50) {
    $(".volume-btn i").removeClass("fa-volume-xmark fa-volume-low fa-volume");
    $(".volume-btn i").addClass("fa-volume-high");

    if (clickedValue >= 100) clickedValue = 100;
  }
  currentSong.volume = clickedValue / 100;
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  responsive: {
    0: {
      items: 8,
    },
  },
});
