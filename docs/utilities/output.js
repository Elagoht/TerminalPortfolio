import { terminal, prompt } from "../index.js"

export function Output(input, pwd, pre, output) {
    // Create Prompt
    const element = document.createElement("div")
    element.innerHTML = `<div id="prompt" class="prompt">
        <div>┬[<span class="prompt-user">furkan</span>]─[<span class="prompt-host">Elagoht</span>]─[<span
                class="prompt-directory">${pwd}</span>]</div>
        <div class="prompt-input">
            └[<span class="prompt-return true">$</span>]&nbsp;
            <div>${input}</div>
        </div>
        </div >
        <${pre ? "pre" : "div"}>${output}</${pre ? "pre" : "div"}>`
    return element
}

export function addToShell(input, pwd, pre, output) {
    terminal.insertBefore(Output(input, pwd, pre, output), terminal.lastElementChild)
}