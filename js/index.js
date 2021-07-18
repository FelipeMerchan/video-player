const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
}

function handlePause() {
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
}

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)