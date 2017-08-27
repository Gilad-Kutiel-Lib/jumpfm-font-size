import { JumpFm } from 'jumpfm-api'

export const load = (jumpFm: JumpFm) => {
    const html = document.querySelector('html')
    let fontSize = 14

    jumpFm.bind('fontSizeInc', ['ctrl+='], () => {
        html.style.fontSize = `${fontSize++}px`
    })

    jumpFm.bind('fontSizeDec', ['ctrl+-'], () => {
        html.style.fontSize = `${fontSize--}px`
    })
}