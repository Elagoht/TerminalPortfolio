import { addToShell } from "../utilities/output.js"

export default function cmd_help(input, pwd) {
    const output = `List of available commands:
help        : Shows this help page
clear       : Clears shell
pwd         : Print working directory
ls [DIR]    : List files in this directory
cat [FILE]  : See file content
neofetch    : Get more about Furkan Baytekin
echo [ARGS] : Print text and see values of environment variables
env         : Show environment variables
startx      : Show portfolio for non-droid beings
`
    addToShell(input, pwd, true, output)
}