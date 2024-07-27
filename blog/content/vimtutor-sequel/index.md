+++
title = "[9] vimtutor-sequel: The Extended vimtutor"
date = 2024-07-27
draft = true
weight = 2 

[taxonomies]
categories = ["just for fun"]
tags = ["vim", "software package"]
+++

The vimtutor program is the essential starting point for anyone looking to learn the basics of using Vim. In as little as a half hour, you can learn 90% of what you'll ever need for vim, however, there are many useful motions and commands that are left out of the program. This article details the simple software package I wrote to address this limitation, `vimtutor-sequel`. 

<!-- More -->

TODO: make the package, there is already a package I found called `vimtutor-extended` so I don't want to just make a dupe of that but something new. 

vimtutor ends at Lesson 7, so start from Lesson 8. 

Lesson 8: splitting screens
8.1: splitting the screens
`:sp` split window and open same file in split screen 
`:sp <other filename>` to split window and open the other file in the new split

8.2 SWITCHING WINDOW FOCUS
`C-W <hjkl>` switching window focus using the vim directions 
`:q` in the current window focus to quit the window

Lesson 9: spellcheck

Lesson 10: multiline operations

- indenting
- commenting
- to uppercase/ lowercase

Lesson 11: ADVANCED SEARCH
`*` search forward for entire word under the cursor
`#` search backward for entire word under the cursor
