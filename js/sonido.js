let silenciar = 0;
let efectosDeSonido = document.getElementById('efectos');
let MusicaDeFondo = document.getElementById('músicaDeFondo');
let botonVolumen = document.getElementById('volumen');
let iconVolumen = document.getElementById('iconVolumen');
MusicaDeFondo.src = 'sound/audio.mp3';

function sonido() {
  if (silenciar % 2 === 0) {
    MusicaDeFondo.muted = 10;
    iconVolumen.src = 'img/silenciar.png';
    silenciar++;
    return;
  }
  MusicaDeFondo.muted = 0;
  iconVolumen.src = 'img/altavoz.png';
  silenciar++;
}
