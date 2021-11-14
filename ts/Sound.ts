import Path from './Paths.js'

namespace Sound {
    let muted = 0
    const audioBackgroundElement = document.querySelector('#music') as HTMLAudioElement
    const audioEffectsElement = document.querySelector('#effect') as HTMLAudioElement
    const soundIcon = document.querySelector('#soundIcon') as HTMLImageElement

    audioBackgroundElement.src = Path.Audio.background;

    function offAudio(audio: HTMLAudioElement): void {
        soundIcon.src = Path.Image.offSpeaker
        audio.volume = 0
    }

    function onAudio(audio: HTMLAudioElement): void {
        soundIcon.src = Path.Image.onSpeaker
        audio.volume = 1
    }

    function changeSound(audio: HTMLAudioElement): void {

        if (muted % 2 === 0)
            offAudio(audio)
        else
            onAudio(audio)

        muted++;
    }

    export function playClickSound(): void {
        audioEffectsElement.src = Path.Audio.click
    }

    export function playSuccessSound(): void {
        audioEffectsElement.src = Path.Audio.success
    }

    export function playErrorSound(): void {
        audioEffectsElement.src = Path.Audio.error
    }

    export function triggerEvents(): void {
        soundIcon.onclick = () => {
            changeSound(audioBackgroundElement)
        }
    }
}

export default Sound