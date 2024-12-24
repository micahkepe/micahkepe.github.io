# micahkepe.com

v2 of my personal website! The goals of this version are:

- Limited dependencies: xterm.js, vite, gh-pages, typescript. That's it.
- No frameworks: vanilla TypeScript
- Minimal: simple, clean, and (hopefully) elegant design

interested in v1? live site [here](https://v1.micahkepe.com/), repo
[here](https://github.com/micahkepe/v1)

## TODOs

- [ ] Arrow navigation (command history, input, etc.)
- [x] Most common Unix commands (ls, cat, etc.)
- [x] File navigation with `cd`
- [ ] `theme` command to change theme
- [ ] Syntax highlighting/ Markdown rendering (no more external libs!)
- [ ] Handle TABs (autocomplete, cycle through files, etc.)
- [x] Show current path in terminal prompt
- [x] Fix xterm.js resizing
- [ ] Add latest blog posts dynamically from the RSS feed to populate the `blog/`
      folder in the filetree
- [x] Bobby Russell-style prompt
- [ ] Mobile view styling (take a look at the xterm.js website repo for ref
      https://github.com/xtermjs/xtermjs.org/tree/master)
- [x] more terminal themes (Dracula, Solarized, etc.)

## Motivation

- a course I took at Rice made me realize how overkill my v1 website with React,
  tons of external dependencies, etc., especially for a simple single page static
  website
- I want to spice things up, I'm bored with my current website
- lots of inspiration from another developer's webiste I found that was exactly
  what I had in mind for my own: https://protiumx.dev/
- another awesome terminal website: https://github.com/m4tt72/terminal

## The Plan

- Use xterm.js as a client-side browser terminal frontend emulation
- Parse user commands for filetree navigation, help page, etc.
- Stateless filetree that doesn't persistent across client sessions
- **In the future (v3?):** set up a Node.js server sandbox through Render
  or other service to run an actual shell that I can connect hook up to xterm
  with a WebSocket for full functionality... or maybe I'll get bored of this
  idea too and switch to something completely new for v3

## Contributing

I welcome contributions to improve the website. If you find any bugs or have a
sick feature idea, feel free to open an issue or submit a pull request. I'll
review it as soon as I can.

## License

This project is licensed under the [MIT License](LICENSE).
