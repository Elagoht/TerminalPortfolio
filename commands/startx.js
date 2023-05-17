import { addToShell } from "../utilities/output.js"

export default function cmd_startx(input, pwd) {
    window.open("https://elagoht.github.io", "TTY2")
    addToShell(input, pwd, false, "X server started on TTY2.")
}