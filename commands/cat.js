import { addToShell } from "../utilities/output.js"

export default function cmd_cat(input, pwd) {
    let output
    switch (input.split(" ")[1]) {
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
            addToShell(input, pwd, true, output)
            break

        // Communication File
        case "communication.md":
            // Email Link
            const email = document.createElement("a")
            email.innerText = "furkanbaytekin@gmail.com"
            email.href = ""
            // Linkedin Link
            const linkedin = document.createElement("a")
            linkedin.innerText = "https://www.linkedin.com/in/furkan-baytekin/"
            linkedin.href = ""
            // Telegram Link
            const telegram = document.createElement("a")
            telegram.innerHTML = "https://t.me/elagoht"
            telegram.href = ""
            // Create Output
            output = `Email: &lt;<a href="mailto:furkanbaytekin@gmail.com">furkanbaytekin@gmail.com</a>&gt;
LinkedIn: &lt;<a href="https://www.linkedin.com/in/furkan-baytekin/">https://www.linkedin.com/in/furkan-baytekin/</a>&gt;
Telegram: &lt;<a href="https://t.me/elagoht">https://t.me/elagoht</a>&gt;`
            addToShell(input, pwd, true, output)
            break

        // Other Platforms File
        case "other_platforms.md":
            output = `AUR     : [My Arch User Repository Packages](<a href="https://aur.archlinux.org/packages?O=0&SeB=m&K=Elagoht&outdated=&SB=p&SO=d&PP=50&submit=Go&">https://aur.archlinux.org/packages?O=0&SeB=m&K=Elagoht&outdated=&SB=p&SO=d&PP=50&submit=Go&</a>)
PyPi    : [My Python Packages](<a href="https://pypi.org/user/Elagoht/">https://pypi.org/user/Elagoht/</a>)
Kaggle  : [My Data Visualizations](<a href="https://www.kaggle.com/furkanbaytekin">https://www.kaggle.com/furkanbaytekin</a>)
Itch.io : [My Game Creations](<a href="https://elagoht.itch.io/">https://elagoht.itch.io/</a>)`
            addToShell(input, pwd, true, output)
            break

        // Skill Set File
        case "skill_set.md":
            output = `
| Language      | Experience            |
| ------------- | --------------------- |
| 🐍 Python     | ✅✅✅✅✅✅✅✅✅✅ |
| 🪟 C#         | ✅✅✅✅◽◽◽◽◽◽ |
| 📜 JavaScript | ✅✅✅✅✅✅✅◽◽◽ |
| 📑 HTML       | ✅✅✅✅✅✅✅✅✅◽ |
| 💄 CSS        | ✅✅✅✅✅✅✅✅✅◽ |
| 🐚 Bash       | ✅✅✅✅✅✅✅✅◽◽ |
| 🛠 Awk        | ✅✅✅✅✅✅✅◽◽◽ |
| ❓ SQL        | ✅✅✅✅✅◽◽◽◽◽ | `
            addToShell(input, pwd, true, output)
            break

        // Tech Stack File
        case "tech_stack.md":
            output = `🐬 Docker 🥈 Git    🪟 Qt
🔢 Numpy  🐼 Pandas 📊 Matplotlib   🎷 Django
🪶 SQLite ❓ MySQL  ❔ MSSQL Server 🕸 MongoDB
🕺 Postman          🌐 .Net Core    🧵 Node.js
😑 Express JS       📦 Npm
♿ Babel            🧳 Webpack
🌬 Tailwind CSS     👢 Bootstrap
🎞 Framer Motion    ⚛ React`
            addToShell(input, pwd, true, output)
            break

        // File Required
        case undefined:
            addToShell(input, pwd, false, "Please specify a file to read its content.")
            break
        // File Required Again
        case "":
            addToShell(input, pwd, false, "Please specify a file to read its content.")
            break

        // File Not Found
        default:
            addToShell(input, pwd, false, `File '${input.split(" ")[1]}' not found.`)
            break
    }
}