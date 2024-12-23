import { TerminalComponent } from "./client/terminal/terminal";

/**
 * When a user hits Enter in the terminal, this event is fired with the input
 * from the terminal.
 */
export type TerminalInputEvent = {
  input: string;
};

export type ClearTerminalEvent = {};

/**
 * Custom event mappings.
 */
declare global {
  interface DocumentEventMap {
    terminalInputEvent: CustomEvent<TerminalInputEvent>;
    clearTerminalEvent: CustomEvent<ClearTerminalEvent>;
  }
}

/**
 * The view class is responsible for managing the state of the client UI
 * components.
 */
export class View {
  private terminal: TerminalComponent;

  constructor() {
    this.updateFooterDate();
    this.terminal = document.querySelector(
      "terminal-component",
    ) as TerminalComponent;
  }

  /**
   * Updates the current year in the footer text.
   * @private
   * @returns {void}
   */
  private updateFooterDate(): void {
    const footer = document.querySelector("footer");
    if (footer) {
      const year = new Date().getFullYear();
      footer.insertAdjacentHTML(
        "beforeend",
        `<p>&copy; ${year} Micah Kepe</p>`,
      );
    }
  }

  /**
   * Updates the terminal with the output of a command.
   * @param {string} output The output of the command to write to the terminal.
   * @returns {void}
   */
  updateTerminal(output: string): void {
    this.terminal.writeOutput(output);
  }

  /**
   * Clears the terminal screen.
   * @returns {void}
   */
  clearTerminalBuffer(): void {
    this.terminal.clearBuffer();
  }
}
