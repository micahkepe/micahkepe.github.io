# micahkepe.com

Soon to be v2 of my personal website! The goals of this version
are:

- Limited dependencies: xterm.js, vite, gh-pages, typescript. That's it.
- No frameworks: vanilla TypeScript
- Minimal: simple, clean, and hopefully elegant design

## Motivation

- a course I took at Rice made me realize how overkill my v1 website with React,
  tons of external dependencies, etc., especially for a simple single page static
  website
- I want to spice things up, I'm bored with my current website

## The Plan

- Use xterm.js as a client-side browser terminal frontend emulation
- Parse user commands for filetree navigation, help page, etc.
- Stateless filetree that doesn't persistent across client sessions
- **In the future:** possibly set up a Node.js server sandbox through Render
  or other service to run an actual shell that I can connect hook up to xterm
  with a WebSocket for full functionality

## Usage and Attribution

If you decide to use my website code, please give me credit by linking back to
this repository or mentioning my name. It's important to respect the effort and
work of developers. Any use of this code without proper attribution is not
endorsed.

## Contributing

I welcome contributions to improve the website. If you find any bugs or have
suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for visiting my personal website repository! Feel free to explore the
code and check back later for updates.
