import { Terminal } from "@xterm/xterm";

export class TerminalElement extends HTMLElement {
  private terminal: Terminal | null = null;

  connectedCallback() {
    this.terminal = new Terminal();
    const terminalContainer = document.getElementById("terminal-container");

    if (!(terminalContainer instanceof HTMLElement)) {
      return;
    }

    this.terminal.open(terminalContainer);
    this.terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
  }
}

customElements.define("terminal-element", TerminalElement);
