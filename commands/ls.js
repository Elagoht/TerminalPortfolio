import { addToShell } from "../utilities/output.js"
import { filesystem } from "../environment/files.js"

export default function cmd_ls(input, pwd) {
    let output
    const directory = input.split(" ")[1] !== undefined
        ? input.split(" ")[1]
        : "~"
    if (pwd.includes(directory)) {
        output = filesystem[directory].join("\n")
    } else {
        output = `Directory '${directory}' not found`
    }
    addToShell(input, pwd, true, output)
}