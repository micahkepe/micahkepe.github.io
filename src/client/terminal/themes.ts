/**
 * This module defines color themes available for the xterm.js terminal
 * emulator. Themes are defined by the ITheme xterm interface:
 *  https://xtermjs.org/docs/api/terminal/interfaces/itheme/
 */

import { ITheme } from "@xterm/xterm";

/**
 * A copy of the Catpuccin Mocha palette. Some colors are not perfect 1-1
 * matches, but I have put the closest palette colors for those and have
 * commented the Catpuccin color chosen.
 *
 * Adapted from:
 * https://catppuccin.com/palette
 */
export const CatpuccinMochaTheme: ITheme = {
  background: "#1e1e2e",
  black: "#11111b",
  blue: "#89b4fa",
  brightBlack: "#45475a", // 'Surface 1'
  brightBlue: "#74c7ec", // 'Sapphire'
  brightCyan: "#94e2d5", // 'Teal'
  cyan: "#89dceb", // 'Sky'
  green: "#a6e3a1",
  red: "#f38ba8",
  brightRed: "#eba0ac", // 'Maroon'
  magenta: "#b4befe", // 'Lavender'
  brightMagenta: "#cba6f7", // 'Mauve'
  yellow: "#f9e2af",
  brightYellow: "#f5e0dc", // 'Rosewater'
  selectionBackground: "#6c7086", // 'Overlay 0'
};

/**
 * The available themes for the terminal emulator.
 */
export const TermThemes: Map<string, ITheme> = new Map([
  ["Catpuccin Mocha", CatpuccinMochaTheme],
]);
