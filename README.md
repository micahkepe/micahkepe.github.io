# micahkepe.com

Soon to be v2 of my personal website! The goals of this version are:

- Limited dependencies: xterm.js, vite, gh-pages, typescript. That's it.
- No frameworks: vanilla TypeScript
- Minimal: simple, clean, and (hopefully) elegant design

## TODOs

- [ ] Arrow navigation (command history, input, etc.)
- [x] Most common Unix commands (ls, cat, etc.)
- [ ] File navigation with `cd` and viewing with `open`
- [ ] Syntax highlighting/ Markdown rendering
- [ ] Vim/Neovim backend would be sick to let users create their own files and
      directories
- [ ] Fix xterm.js resizing
- [ ] Mobile view styling (take a look at the xterm.js website repo for ref
      https://github.com/xtermjs/xtermjs.org/tree/master)

## Motivation

- a course I took at Rice made me realize how overkill my v1 website with React,
  tons of external dependencies, etc., especially for a simple single page static
  website
- I want to spice things up, I'm bored with my current website
- lots of inspiration from another developer's webiste I found that was exactly
  what I had in mind for my own: https://protiumx.dev/

## The Plan

- Use xterm.js as a client-side browser terminal frontend emulation
- Parse user commands for filetree navigation, help page, etc.
- Stateless filetree that doesn't persistent across client sessions
- **In the future:** possibly set up a Node.js server sandbox through Render
  or other service to run an actual shell that I can connect hook up to xterm
  with a WebSocket for full functionality

## Contributing

I welcome contributions to improve the website. If you find any bugs or have
suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

### Usage and Attribution Note

If you decide to use my website code, please give me credit by linking back to
this repository or mentioning my name. It's important to respect the effort and
work of developers. Any use of this code without proper attribution is not
endorsed.
