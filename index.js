import { addToShell } from "./utilities/output.js"
import cmd_ls from "./commands/ls.js"
import cmd_echo from "./commands/echo.js"
import cmd_pwd from "./commands/pwd.js"
import cmd_help from "./commands/help.js"
import cmd_cat from "./commands/cat.js"
import clearShell from "./utilities/clear.js"
import variables from "./environment/variables.js"
import cmd_neofetch from "./commands/neofetch.js"
import cmd_startx from "./commands/startx.js"
import cmd_env from "./commands/env.js"
import { histDown, histUp, history } from "./utilities/commandHistory.js"

const { PWD } = variables
// Get Elements
export const terminal = document.getElementById("terminal")
export const prompt = document.getElementById("prompt")
export const input = document.querySelector(".prompt-input input")

// Handle Keyboard Keys
window.onkeydown = (e) => {
    switch (e.keyCode) {
        case 38: // Go Up On History
            input.value = histUp()
            console.log(history.selection + "/" + history.length())
            break
        case 40:  // Go Up On History
            input.value = histDown()
            console.log(history.selection + "/" + history.length())
            break
        case 13: // Run Command
            runCode(input.value) // Do not break here
            history.registerCommand(input.value) // Register to History
            history.selection = history.length()
            input.value = "" // Clear Prompt
        default:
            input.focus()
    }
}

// Handle Prompted Commands
function runCode(input) {
    switch (input.split(" ")[0]) {
        case "help": cmd_help(input, PWD); break // Help Page
        case "ls": cmd_ls(input, PWD); break // List files
        case "cat": cmd_cat(input, PWD); break // Print file contents
        case "echo": cmd_echo(input, PWD); break // Echo Command
        case "env": cmd_env(input, PWD); break // Show Environment Variables
        case "pwd": cmd_pwd(input, PWD); break // Print Working Directory
        case "neofetch": cmd_neofetch(input, PWD); break // Neofetch Clone
        case "startx": cmd_startx(input, PWD); break // Open Actual Portfolio
        case "clear": clearShell(); break // Clear Shell
        case "": addToShell("", PWD, false, ""); break // Empty prompt
        default: addToShell(
            input, PWD, false,
            `The command ${input.split(" ")[0]} not found. Try \`help\` to see list of commands.`
        ) // Command Does Not Exist
    }
}
