+++
title = "Using Bash, Unix Tools, and Hammerspoon to Speed Up Your Workflow"
date = 2024-12-05
draft = true

[taxonomies]
categories = ["productivity"]
tags = ["unix", "tools", "cli", "bash"]
+++

With just a basic working knowledge of writing Bash scripts and understanding
Unix tools and their design philosophy, you can easily create scripts to
automate your workflow and improve your productivity. In this post, we'll get
our feet wet in writing Bash scripts and combine them with some powerful Unix
tools to create a powerful and versatile toolset. We'll also explore how you can
use Hammerspoon, a macOS automation tool, to take your automation to the next
level.

<!-- more -->

## Introduction

As a college student, I find that most of my peers have little to no experience  
with the command line interface (CLI) and Unix tools. This is unfortunate, as
personally after discovering Vim, tmux, and other Unix tools, I have found that
I have become more productive, enjoyed writing code more, and have a better
understanding of how my machine works. This is not to say that editors like
Visual Studio Code or IDEs are bad (I myself used Visual Studio Code for a long
time), but rather that Unix tools provide a different way of working that can
be more efficient and enjoyable for some people. Even if you don't end up using
Unix tools in your daily workflow, understanding them can be beneficial, as they
are the foundation of many modern tools and technologies.

For Vim users and those trying to minimize their mouse usage, these tools also
allow you to do everything from file navigation to text manipulation without
ever leaving the keyboard. For those who are not Vim users, these tools can
still be useful for automating repetitive tasks, managing files, and more.

---

## Your 20 Minute Intro to Bash

Bash can be a little intimidating at first, but it is actually quite simple once
you get the hang of it. In this section, we will cover the basics of Bash
scripting to get you started. By no means at the end of this will you be an
expert at writing Bash scripts, but we will know enough to write some useful
scripts of our own.

### Variables

Just like you would expect, varibles are assigned using the `=` operator. Here
is an example:

```bash

name="John"
age=20
```

Notice that there are no spaces around the `=` operator. Also, Bash does not
distinguish between different types of variables, so you can assign a string to
a variable and then assign an integer to the same variable.

Here's some basic things we can do with variables:

```bash

# Print the value of a variable using the echo command
echo $name # access the value of a variable using the $ operator

# Assign the output of a command to a variable
files=$(ls) # syntax: $(command)

# Use the value of a variable in a command
echo "Hello, $name!" # prints "Hello, John!"
```

### Supported Data Types in Bash

### Bash Comparisons

Bash has wonky ass syntax for comparisons that you just have to memorize
unfortunately.

<details open>
<summary>Arithmetic Comparisons</summary>

| **Bash** | **Meaning** |
| -------- | ----------- |
| `-lt`    | <           |
| `-gt`    | >           |
| `-le`    | <=          |
| `-ge`    | >=          |
| `-eq`    | ==          |
| `-ne`    | !=          |

</details>

Examples of arithmetic comparisons:

```bash


```

<details open> 
<summary>String Comparisons</summary>

| **Bash** | **Meaning**              |
| -------- | ------------------------ |
| `=`      | equal                    |
| `!=`     | not equal                |
| `<`      | less than                |
| `>`      | greater than             |
| `-n s1`  | string `s1` is not empty |
| `-z s1`  | string `s1` is empty     |

</details>

Examples of arithmetic comparisons:

```bash

```

### Writing Loops

In Bash, loops

### Reading User Input and Trapping

- `read` command
- `trap` command

### Executing Bash files

To actually be able to run a Bash scripts, we need to do two things: (1) make
the file executable and (2) add a shebang to the file.

The shebang is a special line at the beginning of a script that tells the
operating system what interpreter to use to run the script. The shebang for
Bash scripts is `#!/bin/bash`. Here is an example of a simple Bash script:

```bash

#!/bin/bash
echo "Hello, World!"
```

Breaking down the shebang, you'll notice that `#!` is the shebang character
sequence, and `/bin/bash` is the path to the Bash interpreter. The shebang line
**must** be the first line of the script, as it tells your operating system how
to run the script. Without it, the script will not run since the operating system
will not know what interpreter to use.

Now to actually run the script, save it to a file (e.g. `hello.sh`), make it
executable using the `chmod` command, and then run it:

```bash

chmod +x hello.sh
```

Then to run the script, use `./hello.sh`.

That's it for our 20 minute intro to Bash. There is still a lot more to learn,
but this should be enough to get you started writing some simple scripts.
If you are interested in learning more, I recommend checking out the resources I
have linked at the end of this post or this Youtube video:

{{ youtube(id="tK9Oc6AEnR4", width=80)}}

---

## Unix Tools 101

### Unix Philosophy

Before diving into Unix tools, it is important to understand the Unix philosophy,
not only because it is the foundation of Unix tools, but also because it is a
design philosphy that leads to the powerful combinations and versatility of Unix
tools.

The following diagram illustrates the Unix philosophy:

[insert cool diagram I made yay]

This philosophy can be summarized as follows:

1. Write programs that do one thing and do it well.
2. Write programs to work together.
3. Write programs to handle text streams, because that is a universal interface.

These rules are simple but have powerful implications. By writing programs that
do one thing well, you can create a set of tools that can be combined in
different ways to accomplish complex tasks. By writing programs to work together,
you can create powerful tool chains that can accomplish tasks that would be
difficult or impossible with a single program. By writing programs to handle text
streams, you can create tools that can be used in a wide variety of contexts,
since text streams are a universal interface.

### Common Unix Tools

- `tldr`: a simplified man page that provides practical examples of how to use
  a command

- `fzf`: basic use, shell integration functions

> Note for fish shell: `fzf` has a fish plugin, but it doesn't seem well
> maintained and I had issues, use [fzf.fish](https://github.com/PatrickF1/fzf.fish)
> instead, which actually has a lot of bonus features as well.

- `rg`: faster than `grep`, more powerful

- `tmux`: gigachad terminal multiplexer, in the future I will most likely have
  a whole post dedicated to tmux and how I use it, but for now, just know that
  it is a terminal multiplexer that allows you to split your terminal into multiple
  panes, create sessions, and more.

- `sed` and `awk`: text processing tools

- `htop`: system monitoring tools

- `bat` over `cat`: syntax highlighting and line numbers

### Practial Examples of Unix Tool Chains in Action

(this is a stupid example compile better ones)

```bash

# Find all files in the current directory that contain the word "foo"
# and display the file name and line
rg foo | fzf | awk '{print $1, $2}'
```

Better example:

```bash

nvim $(fzf --preview="bat --color=always {}")
```

even better for top:

```bash

nvim $(fzf -m --preview="bat --color=always {}")
```

can save this as an alias to call instead of `nvim`

#### ThePrimeagen's `tmux-sessionizer` Script

---

## **EXTRA**: Automating with Hammerspoon **(MacOS)**

> **NOTE:** Sorry Windows and Linux users, this section is MacOS-specific. If you
> have any suggestions for similar tools on Windows or Linux, please let me know!

Hammerspoon is a powerful macOS automation tool that allows you to write Lua
scripts to automate your workflow. It is similar to Automator, but with more
power and flexibility. Hammerspoon can be used to automate window management,
launch applications, and more.

To be fair, I there is still so much of Hammerspoon's capabilities that I just
haven't had the time to look at or don't know about, but the biggest thing that
I use it for is window management. I have a script that I use to manage my
windows that I will share below. These make it easy to move windows around,
resize them, and switch between them without ever having to touch the mouse.

## Getting Started with Hammerspoon

### Installation and Getting Started

[install instructions, making skeleton files blah blah]

### Window Sizing

Now with Hammerspoon installed, we can start scripting. Create a new file in
your `~/.hammerspoon` directory called `window.lua` and add the following code:

```lua

-- window.lua

-- Window grid layout
local grid = {
	{ x = 0, y = 0, w = 0.5, h = 1 }, -- Left half
	{ x = 0.5, y = 0, w = 0.5, h = 1 }, -- Right half
	{ x = 0, y = 0, w = 1, h = 0.5 }, -- Top half
	{ x = 0, y = 0.5, w = 1, h = 0.5 }, -- Bottom half
}

-- Function to move the current window to a specific screen grid location
local function moveWindowToGrid(location)
	local win = hs.window.focusedWindow()
	local screen = win:screen()
	local frame = screen:frame()

	local newFrame = {
		x = frame.x + (grid[location].x * frame.w),
		y = frame.y + (grid[location].y * frame.h),
		w = grid[location].w * frame.w,
		h = grid[location].h * frame.h,
	}

	win:setFrame(newFrame)
end

-- Window movement keybinds
-- NOTE: "alt" is the Option key on mac
hs.hotkey.bind({ "cmd", "alt" }, "left", function()
	moveWindowToGrid(1)
end) -- Move window to left half
hs.hotkey.bind({ "cmd", "alt" }, "right", function()
	moveWindowToGrid(2)
end) -- Move window to right half
hs.hotkey.bind({ "cmd", "alt" }, "up", function()
	moveWindowToGrid(3)
end) -- Move window to top half
hs.hotkey.bind({ "cmd", "alt" }, "down", function()
	moveWindowToGrid(4)
end) -- Move window to bottom half

-- quarter of screen
hs.hotkey.bind({ "shift", "alt", "cmd" }, "left", function()
	hs.window.focusedWindow():moveToUnit({ 0, 0, 0.5, 0.5 })
end)
hs.hotkey.bind({ "shift", "alt", "cmd" }, "right", function()
	hs.window.focusedWindow():moveToUnit({ 0.5, 0.5, 0.5, 0.5 })
end)
hs.hotkey.bind({ "shift", "alt", "cmd" }, "up", function()
	hs.window.focusedWindow():moveToUnit({ 0.5, 0, 0.5, 0.5 })
end)
hs.hotkey.bind({ "shift", "alt", "cmd" }, "down", function()
	hs.window.focusedWindow():moveToUnit({ 0, 0.5, 0.5, 0.5 })
end)

-- full screen
hs.hotkey.bind({ "alt", "cmd" }, "f", function()
	hs.window.focusedWindow():moveToUnit({ 0, 0, 1, 1 })
end)
```

Save the file and reload your Hammerspoon configuration (you can do this by
clicking on the Hammerspoon icon in the menu bar and selecting "Reload Config").

Now try using the keybinds you set up to move your windows around.

### Window Switching

```lua

-- window.lua

-- Window switching
-- better than cmd + tab:
--  * preview of the window
--  * can switch between minimized windows
-- adapted from: https://www.hammerspoon.org/docs/hs.window.switcher.html

-- set up windowfilter
-- include minimized/hidden windows, current Space only
switcher_space = hs.window.switcher.new(hs.window.filter.new():setCurrentSpace(true):setDefaultFilter({}))

-- Other example options:
-- -- default windowfilter: only visible windows, all Spaces
-- switcher = hs.window.switcher.new()
--
-- specialized switcher for your dozens of browser windows
-- switcher_browsers = hs.window.switcher.new({ "Brave", "Safari", "Google Chrome" })

-- Adjust default window switcher UI
hs.window.switcher.ui.showTitles = false -- no titles on preview panes

-- bind to hotkeys; WARNING: at least one modifier key is required!
hs.hotkey.bind("alt", "tab", "Next window", function()
	switcher_space:next()
end)
hs.hotkey.bind("alt-shift", "tab", "Prev window", function()
	switcher_space:previous()
end)
```

---

## Putting It All Together: My Personal Workflow and Most Used Commands

Up to this point, I have shown you a lot of examples, but I'll use this section
to walkthrough my personal workflow and how I leverage these tools to improve my
productivity.

## References and Resources

- [Unix Philosophy Wikipedia page](https://en.wikipedia.org/wiki/Unix_philosophy) \
- [typescraft: This may be my favorite CLI tool ever](https://www.youtube.com/watch?v=oTNRvnQLLLs&list=WL&index=1) \
- [Josean Martinez: 7 Amazing CLI Tools You Need To Try](https://www.youtube.com/watch?v=mmqDYw9C30I&t=248s) \
- [Bash Scripting Tutorial: How to Write a Bash Script](https://linuxconfig.org/bash-scripting-tutorial) \
- [Bash Scripting Tutorial for Beginners](https://www.youtube.com/watch?v=tK9Oc6AEnR4) \
- [`fzf` GitHub Repository](https://github.com/junegunn/fzf) \
- [`fzf.fish` GitHub Repository](https://github.com/PatrickF1/fzf.fish) \
- [`ripgrep` GitHub Repository](https://github.com/BurntSushi/ripgrep)

{{ utterances() }}
