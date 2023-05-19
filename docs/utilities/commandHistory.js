class History {
    hist = []
    registerCommand(command) {
        this.hist.push(command)
    }
    selection = 0
    bringCommand(index) {
        return this.hist[index]
    }
    length() {
        return this.hist.length
    }
}
export const history = new History()
export function histUp() {
    if (history.selection > 0)
        history.selection--
    return history.bringCommand(history.selection) ?? ""
}
export function histDown() {
    if (history.selection < history.length() - 1) {
        history.selection++
        return history.bringCommand(history.selection)
    }
    return ""
}