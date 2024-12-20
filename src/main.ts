import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";

function main(): void {
  const term = new Terminal({
    cursorBlink: true,
  });
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);

  const terminalContainer = document.getElementById("terminal-container");

  if (!(terminalContainer instanceof HTMLElement)) {
    throw new Error("Error: #terminal-container is not an HTMLElement");
  }

  term.open(terminalContainer);
  fitAddon.fit();
  term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
