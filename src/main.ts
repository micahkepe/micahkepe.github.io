import { View } from "./view";
import { MockServer } from "./server/mock-server";

/**
 * Initial entry point to the application.
 */
function main(): void {
  const view = new View();
  const server = new MockServer();

  document.addEventListener(
    "changeTermThemeEvent",
    function (event: CustomEvent) {
      view.changeTerminalTheme(event.detail.theme);
    },
  );

  document.addEventListener(
    "terminalInputEvent",
    function (event: CustomEvent): Promise<void> {
      return server
        .processCommand(event.detail.input)
        .then((response: string) => view.updateTerminal(response))
        .catch((error: string) => view.updateTerminal(error));
    },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
