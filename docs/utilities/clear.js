export default function clearShell() {
    while (true) {
        if (terminal.childElementCount > 1) {
            terminal.removeChild(terminal.firstChild)
        } else {
            break
        }
    }
}