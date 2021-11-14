import Paths from './Paths.js'
import Sound from './Sound.js'

namespace Gameboard {
    type Item = {
        img: HTMLImageElement,
        src: string
    }

    let nMove = 1
    let pause = false
    let itemToCompare: Item
    let boardItems: Item[] = []
    const div = document.querySelector('#board') as HTMLDivElement

    export function createGameBoard(rows: number, cols: number): void {

        const board = document.createElement('table')

        let paths = getArrayPaths(rows * cols)
        let counterPaths = 0

        for (let i = 0; i < rows; i++) {
            const tr = document.createElement('tr')

            for (let j = 0; j < cols; j++) {

                const td = document.createElement('td')
                const img = document.createElement('img')

                td.appendChild(img)
                tr.appendChild(td)
                img.id = `(${i},${j})`
                img.src = Paths.Image.blackBackground

                const item = {
                    img: img,
                    src: paths[counterPaths]
                }

                boardItems.push(item)
                counterPaths += 1
            }
            board.appendChild(tr)
        }
        div.appendChild(board);
    }

    function getArrayPaths(nElements: number): string[] {

        let array: string[] = []

        for (let i = 0; i < nElements / 2; i++) {

            let randomPath

            do {
                randomPath = Paths.Image.characters[
                    Math.floor(Math.random() * Paths.Image.characters.length)
                ];
            } while (array.includes(randomPath))

            array.push(randomPath)
            array.push(randomPath)
        }

        return array.sort(() => {
            return Math.random() - 0.5
        })
    }

    function getItemById(id: string): Item | null {

        for (let i = 0; i < boardItems.length; i++) {
            if (boardItems[i].img.id === id)
                return boardItems[i]
        }
        return null
    }

    function getItemIndexByImgPath(path: string): number {

        for (let i = 0; i < boardItems.length; i++) {

            if (boardItems[i].src === path)
                return i
        }

        return -1
    }

    function play(item: Item): void {
        item.img.src = item.src

        if (nMove % 2 === 1) {
            Sound.playClickSound()
            itemToCompare = item
        } else {
            if (item.src === itemToCompare.src && item.img.id !== itemToCompare.img.id) {
                Sound.playSuccessSound()
                let firstIndex = getItemIndexByImgPath(item.src)
                boardItems.splice(firstIndex, 1)

                let secondIndex = getItemIndexByImgPath(item.src)
                boardItems.splice(secondIndex, 1)

            } else {
                Sound.playErrorSound()
                setTimeout(() => {
                    item.img.src = Paths.Image.blackBackground
                    itemToCompare.img.src = Paths.Image.blackBackground
                }, 500)
            }
        }

        if (boardItems.length === 0) {
            alert("Felicidades, ¡ha ganado el juego!")
        }
        nMove += 1
    }

    export function triggerEvents(): void {
        div.addEventListener('click', (event) => {

            const target: HTMLElement = event.target as HTMLElement
            const item = getItemById(target.id);

            if (item === null || !boardItems.includes(item))
                return

            if (pause)
                return
            pause = true
            setTimeout(() => {
                pause = false
            }, 500)
            play(item)
        })
    }
}

export default Gameboard