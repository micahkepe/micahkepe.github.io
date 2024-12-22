import { View } from "./view";

/**
 * Initial entry point to the application.
 */
function main(): void {
  const view = new View();

  document.addEventListener(
    "changeTermThemeEvent",
    function (event: CustomEvent) {
      view.changeTerminalTheme(event.detail.theme);
    },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
