import { TerminalComponent } from "./terminal/terminal";

export type ChangeTermThemeEvent = {
  theme: string;
};

declare global {
  interface DocumentEventMap {
    changeTermThemeEvent: CustomEvent<ChangeTermThemeEvent>;
  }
}

export class View {
  private terminal: TerminalComponent;

  constructor() {
    this.terminal = new TerminalComponent("terminal-container");
    this.updateFooterDate();
  }

  /**
   * Updates the current year in the footer text.
   * @private
   * @memberof View
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
   * Changes the theme of the terminal emulator.
   * @param {string} theme The name of the theme to change to.
   * @memberof View
   * @returns {void}
   */
  changeTerminalTheme(theme: string): void {
    this.terminal.changeTheme(theme);
  }
}
