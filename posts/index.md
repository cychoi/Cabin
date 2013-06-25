----
title: index
date:   2013-12-15
----
Cabin is a simple and extensible static site generator powered by [Grunt](http://gruntjs.com/).

# Getting Started

First install cabin globally with the following command:
``bash
npm install -g cabin
``
You can then scaffold a static generator with the following command:
``bash
cabin new <destination folder> [user/repo]
``
The first parameter is the name of the destination folder, and the second is
the GitHub username and repository name of a `theme` to use for the site. If
the `theme` parameter is left blank, the [default
theme](https://github.com/colinwren/testTheme) will be used.

After scaffolding a site generator, you can run it by entering the following
command in the destination folder:
``bash
grunt
``
This will build your site, start a static file server, open a browser tab with
the site's homepage, and start a watch process to rebuild your site when your
source files change. Try editing or creating a new markdown file in the `posts`
folder (if you are using the default theme) and upon save your site will be
automatically rebuilt. Refresh the page to see the changes, if you'd like
Livereload functionality, you can use the Livereload [browser
extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).
# Themes
Cabin themes provide styling and structure for your static site project. They
work great out of the box and as starting points for more customized sites.

## Avaliable Themes

### [colinwren/Candy](http://colinwren.github.io/Candy/)
> Slick blogging theme, great for use on personal sites

### [ChrisWren/icoDoc](http://chriswren.github.io/icoDoc/)
> Minimalist project documentation theme using icons in the navigation
