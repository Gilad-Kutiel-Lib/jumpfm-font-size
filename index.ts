import { JumpFm } from 'jumpfm-api'

export const load = (jumpFm: JumpFm) => {
    const html = document.querySelector('html')
    let fontSize = 14

    html.style.fontSize = `${fontSize}px`

    jumpFm.bind('fontSizeInc', ['ctrl+0'], () => {
        html.style.fontSize = `${fontSize = 14}px`
    })

    jumpFm.bind('fontSizeInc', ['ctrl+='], () => {
        html.style.fontSize = `${++fontSize}px`
    })

    jumpFm.bind('fontSizeDec', ['ctrl+-'], () => {
        html.style.fontSize = `${--fontSize}px`
    })
}