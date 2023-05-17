import { Output, addToShell } from "../utilities/output.js"
import variables from "../environment/variables.js"

export default function cmd_env(input, pwd) {
    let output = ""
    for (let index = 0; index < Object.keys(variables).length; index++) {
        output +=
            Object.keys(variables)[index] + "=" +
            Object.values(variables)[index] + "\n"
    }
    addToShell(input, pwd, true, output)
}