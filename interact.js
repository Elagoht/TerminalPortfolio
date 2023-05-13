"use strict"

// Get Elements
const terminal = document.getElementById("terminal")
const prompt = document.getElementById("prompt")
const input = document.querySelector(".prompt-input input")

// Create States
let PWD = "~"

// Handle Keyboard Keys
window.onkeydown = (e) => {
    switch (e.keyCode) {
        case 13:
            runCode(input.value) // Do not break here
        default:
            input.focus()
    }
}

// Add Output To Shell
function addToShell(text) {
    // Copy prompt to shell
    terminal.insertBefore(prompt.cloneNode(true), terminal.lastChild.previousSibling)
    // Create Output Node
    let element = document.createElement("div")
    element.innerText = text
    // Add Output
    terminal.insertBefore(element, terminal.lastChild.previousSibling)
}

// Directly Add Nodes To Shell
function addNodeToShell(node) {
    // Copy prompt to shell
    terminal.insertBefore(prompt.cloneNode(true), terminal.lastChild.previousSibling)
    terminal.insertBefore(node, terminal.lastChild.previousSibling)
}

// Clear Shell
function clearShell() {
    while (true) {
        if (terminal.childElementCount > 1) {
            terminal.removeChild(terminal.firstChild)
        } else {
            break
        }
    }
}

// Handle Prompted Commands
function runCode(cmd) {
    let output
    switch (cmd.split(" ")[0]) {

        // Help Page
        case "help":
            output = document.createElement("pre")
            output.innerText = `List of available commands:
help       : Shows this help page
clear      : Clears shell
ls [DIR]   : List files in this directory
cat [FILE] : See file content`
            addNodeToShell(output)
            break

        // List files
        case "ls":
            switch (PWD) {
                case "~":
                    output = `about_me.md
communication.md
other_platforms.md
skill_set.md
tech_stack.md`
                    break
            }
            addToShell(output)
            break

        // Print file contents
        case "cat":
            switch (cmd.split(" ")[1]) {

                // About Me File
                case "about_me.md":
                    output = `🆓 I am an open source advocate.
👨‍💻 I develop software.
🕹 I develop games.
📽 I record educational videos.
📚 I wrote a Linux book.
🐧 I use Arch btw.
👨‍🎤 I compose musics.
🎸 I play bass guitarist.
👨‍🏫 I am a teacher.`
                    addToShell(output)
                    break

                // Communication File
                case "communication.md":
                    // Email Link
                    const email = document.createElement("a")
                    email.innerText = "furkanbaytekin@gmail.com"
                    email.href = "mailto:furkanbaytekin@gmail.com"
                    // Linkedin Link
                    const linkedin = document.createElement("a")
                    linkedin.innerText = "https://www.linkedin.com/in/furkan-baytekin/"
                    linkedin.href = "https://www.linkedin.com/in/furkan-baytekin/"
                    // Telegram Link
                    const telegram = document.createElement("a")
                    telegram.innerHTML = "https://t.me/elagoht"
                    telegram.href = "https://t.me/elagoht"
                    // Create Output
                    output = document.createElement("div")
                    output.innerHTML += "Email: <"
                    output.appendChild(email)
                    output.innerHTML += ">\n"
                    output.innerHTML += "LinkedIn: <"
                    output.appendChild(linkedin)
                    output.innerHTML += ">\n"
                    output.innerHTML += "Telegram: <"
                    output.appendChild(telegram)
                    output.innerHTML += ">"
                    addNodeToShell(output)
                    break

                // Other Platforms File
                case "other_platforms.md":
                    const aur = document.createElement("a")
                    aur.innerHTML = "https://aur.archlinux.org/packages?O=0&SeB=m&K=Elagoht&outdated=&SB=p&SO=d&PP=50&submit=Go&"
                    aur.href = "https://aur.archlinux.org/packages?O=0&SeB=m&K=Elagoht&outdated=&SB=p&SO=d&PP=50&submit=Go&"
                    const pypi = document.createElement("a")
                    pypi.innerHTML = "https://pypi.org/user/Elagoht/"
                    pypi.href = "https://pypi.org/user/Elagoht/"
                    const kaggle = document.createElement("a")
                    kaggle.innerHTML = "https://www.kaggle.com/furkanbaytekin"
                    kaggle.href = "https://www.kaggle.com/furkanbaytekin"
                    const itchio = document.createElement("a")
                    itchio.innerHTML = "https://elagoht.itch.io/"
                    itchio.href = "https://elagoht.itch.io/"
                    // Create Output
                    output = document.createElement("div")
                    output.innerHTML += "AUR: <"
                    output.appendChild(aur)
                    output.innerHTML += ">\n"
                    output.innerHTML += "PyPi: <"
                    output.appendChild(pypi)
                    output.innerHTML += ">\n"
                    output.innerHTML += "Kaggle: <"
                    output.appendChild(kaggle)
                    output.innerHTML += ">\n"
                    output.innerHTML += "Itch.io: <"
                    output.appendChild(itchio)
                    output.innerHTML += ">"
                    addNodeToShell(output)
                    break

                // Skill Set File
                case "skill_set.md":
                    addToShell(`Python     : ++++++++++
C#         : ++++------
JavaScript : +++++++---
HTML       : +++++++++-
CSS        : +++++++++-
Bash       : ++++++++--
Awk        : +++++++---
SQL        : +++++-----`
                    )
                    break

                // Tech Stack File
                case "tech_stack.md":
                    output = document.createElement("div")
                    output.innerHTML = "Docker Qt Numpy Pandas Matplotlib Django .Net Core SQLite MySQL MSSQL MongoDB Postman Npm Tailwind CSS Bootstrap Framer Motion React Node.js Express JS Git Babel Webpack"
                    addNodeToShell(output)

                // File Required
                case undefined:
                    addToShell("Please specify a file to read its content.")
                    break
                // File Required Again
                case "":
                    addToShell("Please specify a file to read its content.")
                    break

                // File Not Found
                default:
                    addToShell(`File '${cmd.split(" ")[1]}' not found.`)
                    break
            }
            break

        // Clear Shell
        case "clear":
            clearShell()
            break

        // Command Does Not Exist
        default:
            addToShell(`The command ${cmd.split(" ")[0]} not found. Try \`help\` to see list of commands.`)
    }
    // Clear Prompt
    input.value = ""
}
