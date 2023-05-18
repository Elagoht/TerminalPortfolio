import { addToShell } from "../utilities/output.js"
import variables from "../environment/variables.js"

export default function cmd_echo(input, pwd) {
    let output
    output = input.substring(input.split(" ")[0].length, input.length)
    for (let index = 0; index < Object.keys(variables).length; index++) {
        output = output.replace(
            "$" + Object.keys(variables)[index],
            Object.values(variables)[index]
        )
    }
    addToShell(input, pwd, false, output)
}