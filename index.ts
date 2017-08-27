import { JumpFm } from 'jumpfm-api'

const html = document.querySelector('html')

let fontSize = 14

const set = () => {
    html.style.fontSize = `${fontSize}px`
}

export const load = (jumpFm: JumpFm) => {
    jumpFm.bind('fontSizeReset', ['ctrl+0'], () => {
        fontSize = 14
        console.log('fontSize', fontSize)
        set()
    })

    jumpFm.bind('fontSizeInc', ['ctrl+='], () => {
        fontSize += 1
        console.log('fontSize', fontSize)
        set()
    })

    jumpFm.bind('fontSizeDec', ['ctrl+-'], () => {
        fontSize -= 1
        console.log('fontSize', fontSize)
        set()
    })

    set()
}