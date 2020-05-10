REM https://conemu.github.io/en/NewConsole.html
REM https://conemu.github.io/en/ConEmuArgs.html
REM https://conemu.github.io/en/TableOfContents.html
REM https://superuser.com/questions/593612/run-series-of-commands-in-different-tabs-in-conemu
start /d "C:\Program Files\ConEmu\" ConEmu64.exe /cmdlist ^> cmd -cur_console:t:"Project":d:C:\MyLearn\QuoteBoardMeanNestJS  ^|^|^| cmd -cur_console:t:"NodeBackend":d:C:\MyLearn\QuoteBoardMeanNestJS\quotes-server /k "npm run start:dev" ^|^|^| cmd -cur_console:t:"AngularFrontend":d:C:\MyLearn\QuoteBoardMeanNestJS\quotes-client /k "ng serve"

REM https://stackoverflow.com/questions/36969586/running-visual-studio-code-in-the-current-folder-with-batch-file
start /d "C:\Users\jaypal\AppData\Local\Programs\Microsoft VS Code\" Code.exe C:\MyLearn\QuoteBoardMeanNestJS\quotes-server
start /d "C:\Users\jaypal\AppData\Local\Programs\Microsoft VS Code\" Code.exe C:\MyLearn\QuoteBoardMeanNestJS\quotes-client

ping 127.0.0.1 -n 8
start /d "C:\Program Files\Git\cmd\" git-gui.exe --working-dir C:\MyLearn\QuoteBoardMeanNestJS

start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "http://localhost:4200/"
