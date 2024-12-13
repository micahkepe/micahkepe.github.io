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
ever leaving the keyboard. Even for non-Vim users, these tools can still be
useful for automating repetitive tasks, managing files, and more.

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

In Bash, loops have another somewhat weird syntax that you will get used to.

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

#### `tldr`: simpler man pages

- `tldr`: a simplified man page that provides practical examples of how to use
  a command

```
tldr

Display simple help pages for command-line tools from the tldr-pages project.
Note: the `--language` and `--list` options are not required by the client specification, but most clients implement them.
More information: <https://github.com/tldr-pages/tldr/blob/main/CLIENT-SPECIFICATION.md#command-line-interface>.

- Print the tldr page for a specific command (hint: this is how you got here!):
    tldr command

- Print the tldr page for a specific subcommand:
    tldr command subcommand

- Print the tldr page for a command in the given [L]anguage (if available, otherwise fall back to English):
    tldr --language language_code command

- Print the tldr page for a command from a specific [p]latform:
    tldr --platform android|common|freebsd|linux|osx|netbsd|openbsd|sunos|windows command

- [u]pdate the local cache of tldr pages:
    tldr --update

- [l]ist all pages for the current platform and `common`:
    tldr --list

- [l]ist all available subcommand pages for a command:
    tldr --list | grep command | column

```

#### `fzf`: powerful fuzzy finder

- `fzf`: basic use, shell integration functions

> Note for fish shell: `fzf` has a fish plugin, but it doesn't seem well
> maintained and I had issues, use [fzf.fish](https://github.com/PatrickF1/fzf.fish)
> instead, which actually has a lot of bonus features as well.

```
fzf

Command-line fuzzy finder.
Similar to `sk`.
More information: <https://github.com/junegunn/fzf>.

- Start `fzf` on all files in the specified directory:
    find path/to/directory -type f | fzf

- Start `fzf` for running processes:
    ps aux | fzf

- Select multiple files with `Shift + Tab` and write to a file:
    find path/to/directory -type f | fzf --multi > path/to/file

- Start `fzf` with a specified query:
    fzf --query "query"

- Start `fzf` on entries that start with core and end with either go, rb, or py:
    fzf --query "^core go$ | rb$ | py$"

- Start `fzf` on entries that not match pyc and match exactly travis:
    fzf --query "!pyc 'travis"
```

#### `tmux`: terminal manager

- `tmux`: gigachad terminal multiplexer, in the future I will most likely have
  a whole post dedicated to tmux and how I use it, but for now, just know that
  it is a terminal multiplexer that allows you to split your terminal into multiple
  panes, create sessions, and more.

```
tmux

Terminal multiplexer.
It allows multiple sessions with windows, panes, and more.
See also: `zellij`, `screen`.
More information: <https://github.com/tmux/tmux>.

- Start a new session:
    tmux

- Start a new named session:
    tmux new -s name

- List existing sessions:
    tmux ls

- Attach to the most recently used session:
    tmux attach

- Detach from the current session (inside a tmux session):
    <Ctrl>-B d

- Create a new window (inside a tmux session):
    <Ctrl>-B c

- Switch between sessions and windows (inside a tmux session):
    <Ctrl>-B w

- Kill a session by name:
    tmux kill-session -t name

```

#### `sed` / `grep`: text processing tools

- `sed` and `awk`: text processing tools

```
sed

Edit text in a scriptable manner.
See also: `awk`, `ed`.
More information: <https://keith.github.io/xcode-man-pages/sed.1.html>.

- Replace all `apple` (basic regex) occurrences with `mango` (basic regex) in all input lines and print the result to `stdout`:
    command | sed 's/apple/mango/g'

- Execute a specific script [f]ile and print the result to `stdout`:
    command | sed -f path/to/script_file.sed

- Replace all `apple` (extended regex) occurrences with `APPLE` (extended regex) in all input lines and print the result to `stdout`:
    command | sed -E 's/(apple)/\U\1/g'

- Print just a first line to `stdout`:
    command | sed -n '1p'

- Replace all `apple` (basic regex) occurrences with `mango` (basic regex) in a `file` and save a backup of the original to `file.bak`:
    sed -i bak 's/apple/mango/g' path/to/file

```

```

awk

A versatile programming language for working on files.
More information: <https://github.com/onetrueawk/awk>.

- Print the fifth column (a.k.a. field) in a space-separated file:
    awk '{print $5}' path/to/file

- Print the second column of the lines containing "foo" in a space-separated file:
    awk '/foo/ {print $2}' path/to/file

- Print the last column of each line in a file, using a comma (instead of space) as a field separator:
    awk -F ',' '{print $NF}' path/to/file

- Sum the values in the first column of a file and print the total:
    awk '{s+=$1} END {print s}' path/to/file

- Print every third line starting from the first line:
    awk 'NR%3==1' path/to/file

- Print different values based on conditions:
    awk '{if ($1 == "foo") print "Exact match foo"; else if ($1 ~ "bar") print "Partial match bar"; else print "Baz"}' path/to/file

- Print all the lines which the 10th column value is between a min and a max:
    awk '($10 >= min_value && $10 <= max_value)'

- Print table of users with UID >=1000 with header and formatted output, using colon as separator (`%-20s` mean: 20 left-align string characters, `%6s` means: 6 right-align string characters):
    awk 'BEGIN {FS=":";printf "%-20s %6s %25s\n", "Name", "UID", "Shell"} $4 >= 1000 {printf "%-20s %6d %25s\n", $1, $4, $7}' /etc/passwd
```

#### `htop`: system processes management

- `htop`: system monitoring tools

```
htop

Display dynamic real-time information about running processes. An enhanced version of `top`.
More information: <https://htop.dev/>.

- Start `htop`:
    htop

- Start `htop` displaying processes owned by a specific user:
    htop --user username

- Display processes hierarchically in a tree view to show the parent-child relationships:
    htop --tree

- Sort processes by a specified `sort_item` (use `htop --sort help` for available options):
    htop --sort sort_item

- Start `htop` with the specified delay between updates, in tenths of a second (i.e. 50 = 5 seconds):
    htop --delay 50

- See interactive commands while running htop:
    ?

- Switch to a different tab:
    tab

- Display help:
    htop --help
```

#### `bat`: `cat`, but better

- syntax highlighting and line numbers

```
bat

Print and concatenate files.
A `cat` clone with syntax highlighting and Git integration.
More information: <https://github.com/sharkdp/bat>.

- Pretty print the contents of one or more files to `stdout`:
    bat path/to/file1 path/to/file2 ...

- Concatenate several files into the target file:
    bat path/to/file1 path/to/file2 ... > path/to/target_file

- Remove decorations and disable paging (`--style plain` can be replaced with `-p`, or both options with `-pp`):
    bat --style plain --pager never path/to/file

- Highlight a specific line or a range of lines with a different background color:
    bat -H|--highlight-line 10|5:10|:10|10:|10:+5 path/to/file

- Show non-printable characters like space, tab or newline:
    bat -A|--show-all path/to/file

- Remove all decorations except line numbers in the output:
    bat -n|--number path/to/file

- Syntax highlight a JSON file by explicitly setting the language:
    bat -l|--language json path/to/file.json

- Display all supported languages:
    bat -L|--list-languages

```

#### `rg`: faster `grep`

- `rg`: faster than `grep`, more powerful

```
rg

Ripgrep is a recursive line-oriented search tool.
Aims to be a faster alternative to `grep`.
More information: <https://github.com/BurntSushi/ripgrep>.

- Recursively search the current directory for a regular expression:
    rg regular_expression

- Search for regular expressions recursively in the current directory, including hidden files and files listed in `.gitignore`:
    rg --no-ignore --hidden regular_expression

- Search for a regular expression only in a subset of directories:
    rg regular_expression set_of_subdirs

- Search for a regular expression in files matching a glob (e.g. `README.*`):
    rg regular_expression --glob glob

- Search for filenames that match a regular expression:
    rg --files | rg regular_expression

- Only list matched files (useful when piping to other commands):
    rg --files-with-matches regular_expression

- Show lines that do not match the given regular expression:
    rg --invert-match regular_expression

- Search a literal string pattern:
    rg --fixed-strings -- string

```

### Practial Examples of Combining Unix-like Tools

#### Finding Files with a Certain Keyword

```bash

# Find all files in the current directory that contain the word "foo"
# and display the file name and line
rg foo | fzf | awk '{print $1, $2}'
```

#### Enhanced `nvim` Command

By default, we can open a new Neovim session in the current directory by simply
running `nvim` in the terminal. This is perfectly fine, but we can fine tune it
more by adding in some of the tools that we have looked at.

First, let's add the file selected from `fzf` to be what we open the Neovim
session in:

```bash

nvim $(fzf)
```

Let's also pass a `bat` command to `fzf`'s `'--preview` to let us see the files
as we navigate them with `fzf`.

```bash

nvim $(fzf --preview="bat --color=always {}")
```

Another thing we can enable with `fzf` is the `-m` flag, which will allow us to
select multiple files with TAB and then these will be put in open buffers when
we open Neovim!

```bash

nvim $(fzf -m --preview="bat --color=always {}")
```

To make this the default behavior for when we open Neovim, we can save this
enhanced command as an alias for `nvim`. Instead your `~/.zshrc`, `~/.bashrc`,
`~/.config/fish/config.fish`, etc.:

```bash

alias nvim='nvim $(fzf -m --preview="bat --color=always {}")'
```

#### ThePrimeagen's `tmux-sessionizer` Script

Another great example of combining tools is this `tmux-sessionizer.sh` script
that I adapted from [ThePrimeagen](change-me):

```bash

#!/usr/bin/env bash

# Adapted from: https://github.com/ThePrimeagen/.dotfiles/blob/master/bin/.local/scripts/tmux-sessionizer
#
# Description:
#   A script to create a new tmux session either by passing in a directory or
#   selecting one with fzf. For ease of use, add this script to your $PATH and
#   create an alias in your shell configuration file (e.g. .bashrc, .zshrc) like:
#   alias tmux-sessionizer='tmux-sessionizer.sh'
#
#   Then you can simply run with `tmux-sessionizer`
#
# Usage:
#  tmux-sessionizer.sh [directory]
#  tmux-sessionizer.sh


if [[ $# -eq 1 ]]; then
    selected=$1
else
    # if no directory is passed in, use fzf to select one
    # NOTE: change the directories to search in the find command as you wish
    selected=$(FZF_TMUX=1 find ~/coding ~ ~/vislang/ ~/rice/* -mindepth 1 -maxdepth 1 -type d | fzf)
fi

# exit if no directory is selected from fzf
if [[ -z $selected ]]; then
    exit 0
fi

selected_name=$(basename "$selected" | tr . _)
tmux_running=$(pgrep tmux)

# create new session if not in tmux
if [[ -z $TMUX ]] && [[ -z $tmux_running ]]; then
    tmux new-session -s $selected_name -c $selected
    exit 0
fi

# create new session if name doesn't exist
if ! tmux has-session -t=$selected_name 2> /dev/null; then
    tmux new-session -ds $selected_name -c $selected
fi

if [[ -n $TMUX ]]; then
    tmux switch-client -t $selected_name
else
    # if running outside of tmux, attach to the new session
    tmux attach-session -t $selected_name
fi

```

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

Now with Hammerspoon installed, we can start scripting using Lua. Our scripts
will live in the `~/.hammerspoon` directory and and then load the modules in
`~/.hammerspoon/init.lua` using `require(<modname>)` statements.

### Window Sizing

Let's create a file called `window.lua` in `~/.hammerspoon/` and add the
following code:

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

To actually include the this window script, add the following to
`~/.hammerspoon/init.lua`:

```lua

-- ~/.hammerspoon/init.lua
require("window")
```

Save the file and reload your Hammerspoon configuration (you can do this by
clicking on the Hammerspoon icon in the menu bar and selecting "Reload Config").

Now try using the keybinds you set up to move your windows around. Use `Alt +
CMD + <arrow>` to move the active window to one of the four halves (vertically
and horizontally split) of the screen. You can also use `Alt + CMD + SHIFT +
<arrow>` to move the window to one of the window quarters.

### Window Switching

While macOS has a provided `CMD + Tab` shortcut for context switching windows,
there aren't previews for the windows and hidden/minimized windows are not
available. Hammerspoon's [window.switcher](https://www.hammerspoon.org/docs/hs.window.switcher.html)
API allows for overcoming both of these shortcomings.

Add the following to the end of your `~/.hammerspoon/window.lua` file:

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

Now with these key bindings I can quickly switch windows using `Alt + Tab` and
have previews! Try them out yourself. `Alt + Tab` will iterate through the
windows in order, and `Alt + Shift + Tab` will iterate through the windows in
reverse order.

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
