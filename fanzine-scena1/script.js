const dialogue = document.getElementById('dialogue');
const devil = document.getElementById('devil');
const title = document.getElementById('title');
const torchAudio = document.getElementById('torch-audio');
const music = document.getElementById('music');

const lines = [
  "Sicuro di voler addentrarti in un posto simile?",
  "Beh, peggio per te mio caro avventuriero."
];

let currentLine = 0;

function showDialogue() {
  dialogue.style.opacity = 1;
  devil.style.opacity = 1;
  dialogue.textContent = lines[currentLine];
}

function hideDialogue() {
  dialogue.style.opacity = 0;
  devil.style.opacity = 0;
}

function showTitle() {
  const titleVideo = document.getElementById('title-video');
  titleVideo.style.display = 'block';
  titleVideo.play();
}

showDialogue();

document.addEventListener('click', () => {
  currentLine++;
  if (currentLine < lines.length) {
    dialogue.textContent = lines[currentLine];
  } else {
    hideDialogue();
    music.play();
    showTitle();
  }
});