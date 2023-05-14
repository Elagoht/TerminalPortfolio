import { addToShell } from "../utilities/output.js"

export default function cmd_ls(input, pwd) {
    let output
    switch (pwd) {
        case "~":
            output = `about_me.md
communication.md
other_platforms.md
skill_set.md
tech_stack.md`
            break
    }
    addToShell(input, pwd, true, output)
}