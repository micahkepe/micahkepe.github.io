import { View } from "./view";
import { MockServer } from "./server/mock-server";
import "./client/terminal/terminal.ts";

/**
 * Initial entry point to the application.
 */
function main(): void {
  const view = new View();
  const server = new MockServer();

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
