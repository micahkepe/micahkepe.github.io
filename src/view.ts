import { TerminalComponent } from "./terminal/terminal";

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
}
