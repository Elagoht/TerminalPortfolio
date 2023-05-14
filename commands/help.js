import { addToShell } from "../utilities/output.js"

export default function cmd_help(input, pwd) {
    const output = `List of available commands:
help       : Shows this help page
clear      : Clears shell
ls [DIR]   : List files in this directory
cat [FILE] : See file content`
    addToShell(input, pwd, true, output)
}