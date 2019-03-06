let segs = 0;
const topeIMG = personajes.length / 2;
function winner()
{
const contenedorCal = document.getElementById('contenedorCalificación');    

        for (let i = 1; i <= topeIMG; i++)
        {
            let imagen = document.getElementById(`Player${i}`);
            if (imagen.alt !== 'win')
            {
                return
            }
        }
        contenedorCal.removeAttribute('class');
        MusicaDeFondo.muted = 10;
        efectosDeSonido.src = 'sound/victory.mp3';
        let restablecer = function()
        {
            MusicaDeFondo.muted = 0;
        }
        setTimeout(restablecer,5000);

    const starONE = document.getElementById('starONE');
    const starTWO = document.getElementById('starTWO');
    const starTHREE = document.getElementById('starTHREE');

    if (segs > 180 && segs < 270)
    {
        starTHREE.className = 'None';
    } 
    else if (segs > 270 && segs < 420)
    {
        starTHREE.className = 'None';
        starTWO.className = 'None';
    }  
    else if (segs > 420)
    {
        starTHREE.className = 'None';
        starTWO.className = 'None';
        starONE.src = 'img/tenor.gif';
        starONE.className = 'ajustar';
    }
}
function time()
{
    segs++
}
