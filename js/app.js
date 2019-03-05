let personajes = [
  'Player1', 'Player2', 'Player3',
  'Player4', 'Player5', 'Player6',
  'Player7', 'Player8', 'Player9',
  'Player10', 'Player11', 'Player12',
  'Player13', 'Player14', 'Player15',
  'Player16', 'Player17', 'Player18',
  'Player19', 'Player20', 'Player21',
  'Player22','Player23','Player24',
  'Player25','Player26','Player1', 
  'Player2', 'Player3','Player4',
  'Player5', 'Player6','Player7', 
  'Player8', 'Player9','Player10',
  'Player11', 'Player12', 'Player13',
  'Player14','Player15','Player16',
  'Player17','Player18','Player19',
  'Player20','Player21','Player22',
  'Player23','Player24','Player25',
  'Player26'
];

let jugada = 0;
let nombrePersonaje1 = '';
let nombrePersonaje2 = '';
let SelectorIMG1;
let SelectorIMG2;
let altIMG1;
let altIMG2;
let objetoIMG1;

function iniciar() {
  personajes.sort(function() {
    return Math.random() - 0.5;
  });

  for (i = 0; i < personajes.length; i++) {
    let personaje = personajes[i];
    let imagen = document.getElementById(i.toString());
    imagen.alt = i;
    imagen.id = personaje;
  }
}
iniciar();
function clickImagen(imagen) {

  validarDatos('Player1', 'img/Gon.jpg');
  validarDatos('Player2', 'img/Hisoka.jpg');
  validarDatos('Player3', 'img/Illumi.jpg');
  validarDatos('Player4', 'img/Kilua.jpg');
  validarDatos('Player5', 'img/Kurapika.jpg');
  validarDatos('Player6', 'img/Leorio.jpg');
  validarDatos('Player7', 'img/Wing.jpg');
  validarDatos('Player8', 'img/Pokkle.jpg');
  validarDatos('Player9', 'img/Kalluto.jpg');
  validarDatos('Player10', 'img/Netero.jpg');
  validarDatos('Player11', 'img/Ging.jpg');
  validarDatos('Player12', 'img/Zushi.jpg');
  validarDatos('Player13', 'img/Biscuit.jpg');
  validarDatos('Player14', 'img/Franklin.jpg');
  validarDatos('Player15', 'img/Kuroro.jpg');
  validarDatos('Player16', 'img/Neon.jpg');
  validarDatos('Player17', 'img/Nobunaga.jpg');
  validarDatos('Player18', 'img/Phinks.jpg');
  validarDatos('Player19', 'img/Satotz.jpg');
  validarDatos('Player20', 'img/Shalnark.jpg');
  validarDatos('Player21', 'img/Shizuku.jpg');
  validarDatos('Player22', 'img/Ubo.jpg');
  validarDatos('Player23', 'img/Baise.jpg');
  validarDatos('Player24', 'img/Beans.jpg');
  validarDatos('Player25', 'img/Genthru.jpg');
  validarDatos('Player26', 'img/Bonolenov.jpg');

  function validarDatos(nombrePersonaje, urlX) {
    if (imagen.id === nombrePersonaje && imagen.alt !== 'win') {
      imagen.src = urlX;
      jugada++;
      const EsImpar = jugada % 2 !== 0;

      if (EsImpar) {
        efectosDeSonido.src = 'sound/WR_beep.wav';
        objetoIMG1 = imagen;
        nombrePersonaje1 = nombrePersonaje;
        altIMG1 = imagen.alt;
        SelectorIMG1 = imagen;
        return;
      }
      mirarSisoniguales(nombrePersonaje);
    }
  }
  
  function mirarSisoniguales(nombrePersonaje_Parametro2) {
    altIMG2 = imagen.alt;
    SelectorIMG2 = imagen;
    nombrePersonaje2 = nombrePersonaje_Parametro2;
    const SonIguales =
      nombrePersonaje2 === nombrePersonaje1 && altIMG1 !== altIMG2;

    if (SonIguales) {
      efectosDeSonido.src = 'sound/elevbell1.wav';
      imagen.alt = 'win';
      objetoIMG1.alt = 'win';
      winner();
      return;
    }
    efectosDeSonido.src = 'sound/WR_warn.wav';
    function ocultar() {
      SelectorIMG1.src = 'img/darkNoise.jpg';
      SelectorIMG2.src = 'img/darkNoise.jpg';
    }
    setTimeout(ocultar, 500);
  }
}
