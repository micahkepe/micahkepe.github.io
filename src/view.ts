import { TerminalComponent } from "./client/terminal/terminal";

/**
 * When a user hits Enter in the terminal, this event is fired with the input
 * from the terminal.
 */
export type TerminalInputEvent = {
  input: string;
};

/**
 * When the user types "clear" in the terminal or "Ctrl+L" to cleear the
 * terminal buffer
 */
export type ClearTerminalEvent = {};

/**
 * When the user changes directories, this event is fired with the new path.
 * This is used to update the prompt in the terminal.
 */
export type ChangeDirectoryEvent = {
  newPwd: string;
};

/**
 * Custom event mappings.
 */
declare global {
  interface DocumentEventMap {
    terminalInputEvent: CustomEvent<TerminalInputEvent>;
    clearTerminalEvent: CustomEvent<ClearTerminalEvent>;
    changeDirectoryEvent: CustomEvent<ChangeDirectoryEvent>;
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
  displayTerminalCmdOutput(output: string, failed = false): void {
    this.terminal.writeOutput(output, failed);
  }

  /**
   * Sets the current working directory for the terminal.
   * @param {string} pwd The new current working directory.
   * @returns {void}
   */
  setTerminalPwd(pwd: string): void {
    this.terminal.setPwd(pwd);
  }

  /**
   * Clears the terminal screen.
   * @returns {void}
   */
  clearTerminalBuffer(): void {
    this.terminal.clearBuffer();
  }
}
