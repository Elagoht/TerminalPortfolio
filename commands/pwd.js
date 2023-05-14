import { addToShell } from "../utilities/output.js"

export default function cmd_pwd(input, pwd) {
    const output = pwd.replace("~", "/home/furkan/")
    addToShell(input, pwd, false, output)
}