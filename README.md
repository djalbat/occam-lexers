# Lexers

The Occam proof assistant's lexers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

There are three lexers in all:

* A very primitive lexer for a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form), hardly a lexer at all in fact.
* A basic lexer, for illustrative purposes.
* A lexer for the [lexical grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js) of Occam's vernacular, called Florence.

The last two of these lexers share common code and patterns and each take four passes to process content. The first three passes match comments, strings and whitespace in that order. The last pass will match significant and error tokens.

The final pass uses a recursive descent algorithm. This should be fast and should also help to make specification languages written with this approach in mind relatively simple. In the aforementioned [lexical grammar](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js), for example, there is no need to exclude keywords and special characters from the regular expression for `unassigned` tokens, because the content to which this regular expression will be applied is guaranteed not to have these keywords or special characters in the first place.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-lexers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Lexers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

These are not very edifying, you are encouraged to have a look at Occam's [Parsers](https://github.com/occam-proof-assistant/Parsers) examples instead. However if you must, see the `examples.html` file in the project's root directory and read on.

### The basic example

The first pass of the basic lexer will only pick out whitespace. And in this example at least, the second pass only has one rule, called the `terminalSymbols` rule, the regular expression pattern for which can be changed dynamically. The HTML for the resulting tokens is shown on the right, corresponding to content given on the left. This is the same for all the examples.

If the terminal symbols pattern does not result in a valid regular expression, for example the following...

    \+|\-|\*|\/|\(|\)|\

...is not valid, the border of the text area will turn red and no tokens will be shown.

There is a guard against content being unmatchable, you can see this in action if you change the terminal symbols regular expression pattern to the following:

    \+|\-|\*|\/|\(|\)|

By the way, neither of the two remaining examples allow the grammar to be changed dynamically, however this can be done by editing the `grammar.js` files in the requisite directories and rebuilding.

### The Florence example

The first pass of the Florence lexer picks out include directives with the following syntax...

    include("...")

...and comments like the following:

    /* ... */

It does not currently support single line comments.

It will add end of line tokens.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

The Florence grammar can be found in the `grammar.js` file in the `es6/florence` directory.

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
