---
css: "issues.css"
layout: post
title:  "Issues"
author: "Sara Tang"
date:   2015-10-12 03:39:52
category: "Computational Biology"
permalink: "issues"
---

##Initial remarks
Hey guys, this is the page where I'll be posting issues I have with the website or something:

- I don't think Pandoc can implement LaTeX rendering on its own, so I've also thrown MathJax into the website (if you don't like MathJax, or can suggest a workaround, I'm all ears!). Right now, MathJax is loaded from the CDN, if you think it's better to have a local copy, I can add one.
- The sample article has a lot of --> $\textsc{Small Caps}$, which cannot be rendered in MathJax :( Instead, I have a few work-arounds:
	- ${\rm S{\small MALL} C{\small APS}}$ which is typed up as follows: {\rm S{\small MALL} C{\small APS}}
	- $\textbf{SmallCaps}$ which is typed up as follows: \textbf{Small Caps}
	- ${\rm SMALL CAPS}$ which is typed up as follows: {\rm SMALL CAPS}

##Formatting the header thing that Jekyll needs

Each article has that header thingie (enclosed by three dashes: "\-\-\-"), I don't remember if Pandoc automatically generates them or not, but here is what is in the header for the sample article:

\-\-\-\\
layout: post\\
title: "A Fast Single-Extractor Wait-Free Priority Queue"\\
author: "Kenneth D. Hoover and Yuanhao Wei"\\
date: 2015-10-02 20:44:52\\
category: "Artificial Intelligence"\\
\-\-\-

A couple of notes:

* The layout must be post!
* The title is whatever you want to appear on the table of contents and at the top of the page of the abstract itself
* The author(s) is stored as a string, containing all the authors
* I don't remember if the date is automatically generated or not
* The category is one of "Artificial Intelligence", "Computational Biology", "Computational Graphics", "Human Computer Interaction", "Software Engineering", or "Software Projects". And capitalization matters!
* If, for some reason, there is a .css file included with the abstract, and the abstract looks very strange without the css formatting, you can drag that .css file into the /css/abstracts folder. Then in the header, simply add:

css: [name-of-css-file].css


PS: I don't know which category the sample article falls under, I've set it as Artificial Intelligence because it's the first one alphabetically :P

##Formatting the article itself

I didn't run into many issues with converting .tex to .md, (except for the one mentioned above). Some alterations I've made:

* Every header got moved down one level, because Liquid automagically chooses the title from the header information and makes it h1. So (at least for the sample article), I moved every subtitle to have h2, and every sub-sub title to have h3.

##Fonts
I'm using Computer Modern in the abstracts, I believe it supports *italics*, <b>bold</b>, and whatever this is => ${\rm Roman? Semi-bold?}$ Whatever it is, it's rendered using {\rm texthere} in LaTeX.

##Finally...
Finally, you can fork the website from my repo:

<a href="https://github.com/saratang/RUCS-Web" target="_blank" >https://github.com/saratang/RUCS-Web</a>