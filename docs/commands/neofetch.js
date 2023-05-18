import { addToShell } from "../utilities/output.js"

export default function cmd_neofetch(input, pwd) {
  const age = new Date().getFullYear() - 2000
  const output = `        .-+#%@@@@@@%#+-.              furkan@Elagoht             
      =#@@%*+=----=+*%@@#=            --------------             
    +@@#-             .=#@@+          OS: HumanOS (aarch64)      
  -%@*.                  :#@%-        Host: Turkey               
 -@@-                .-=-  =@@-       Kernel: XY (Male)          
:@@-                +@@@@@- =@@:      Uptime: ${age} years        
#@*         :#%@%=  #*@*+@@  #@#      Packages: 8 (languages)    
@@-    ..   #%@##@. #=-==@@- +@@      Shell: shello 1.0.1        
@@=  :%@@%: #+-=+@:-#:::.*@% +@@      Resolution: Forward-looking
#@#  *#*+%#:@:::.*%+      %@%%@#      DE: Wooden desk            
:@@- %+:-*@@-    .@#      .%@@@:      WM: PVC                    
 -@@##    *@-    .@@=      %@@-       WM Theme: White            
  -%@%:    @@-   .@@%.   -%@%-        Terminal: TTY1             
    +@@#=.:%%+   =.-:--+%@@+          CPU: Humanoid X9 8970E     
      =#@@@%#*%+#@+*#@@@#=            GPU: Humanoid I Duo        
        .-+#%@@@@@@%#+-.              Memory: 2328306 GiB         `
  addToShell(input, pwd, true, output)
}