+++
title = "Expediating My Workflow with Bash, Unix Tools, and Hammerspoon"
date = 2024-12-05
draft = true
weight = 2

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

- `tldr`

- `fzf`

- `rg`

- `tmux`

- `sed` and `awk`

### Practial Examples of Unix Tool Chains in Action

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

### Window Sizing

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

## Putting It All Together

[talk about gigachad no mouse workflow that makes everyone jealous (not :( )]

---

## References

- [Unix Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) \

{{ utterances() }}
