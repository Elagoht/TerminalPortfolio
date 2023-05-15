import { addToShell } from "./utilities/output.js"
import cmd_ls from "./commands/ls.js"
import cmd_echo from "./commands/echo.js"
import cmd_pwd from "./commands/pwd.js"
import cmd_help from "./commands/help.js"
import cmd_cat from "./commands/cat.js"
import clearShell from "./utilities/clear.js"
import variables from "./environment/variables.js"

const { PWD } = variables
// Get Elements
export const terminal = document.getElementById("terminal")
export const prompt = document.getElementById("prompt")
export const input = document.querySelector(".prompt-input input")

// Handle Keyboard Keys
window.onkeydown = (e) => {
    switch (e.keyCode) {
        case 13:
            runCode(input.value) // Do not break here
            // Clear Prompt
            input.value = ""
        default:
            input.focus()
    }
}

// Handle Prompted Commands
function runCode(input) {
    let output
    switch (input.split(" ")[0]) {
        // Help Page
        case "help":
            cmd_help(input, PWD)
            break
        // List files
        case "ls":
            cmd_ls(input, PWD, output)
            break
        // Print file contents
        case "cat":
            cmd_cat(input, PWD)
            break
        // Echo Command
        case "echo":
            cmd_echo(input, PWD)
            break
        // Print Working Directory
        case "pwd":
            cmd_pwd(input, PWD)
            break
        // Clear Shell
        case "clear":
            clearShell()
            break
        // Empty prompt
        case "":
            addToShell("", PWD, false, "")
            break
        // Command Does Not Exist
        default:
            addToShell(input, PWD, false, `The command ${input.split(" ")[0]} not found. Try \`help\` to see list of commands.`)
    }
}
