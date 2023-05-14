import { addToShell } from "../utilities/output.js"

export default function cmd_echo(input, pwd) {
    let output
    output = input.substring(input.split(" ")[0].length, input.length)
    output = output
        .replace("$PWD", pwd)
        .replace("$USER", "furkan")
        .replace("$HOST", "Elagoht")
    addToShell(input, pwd, false, output)
}