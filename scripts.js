const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ vide: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMeidaStream);
      video.src = window.URL.createURL(localMediaStream);
      video.play();
    });
}

getVideo();
