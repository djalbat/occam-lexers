# Lexers

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

There are four lexers in all:

* A very simple lexer for a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form), hardly a lexer at all in fact.
* A basic lexer, for illustrative purposes.
* A lexer for the [Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html).
* A lexer for [lexical part of Occam's own specification language](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js), called Florence.

The last three of these lexers share common patterns and will each take two passes to process textual content. The first pass will pick out the non-significant tokens, specifically comments and whitespace. The second pass will pick out the significant and error tokens.

This second pass uses a recursive descent algorithm, see the `significantOrErrorTokensFromContent()` method of the [significantTokens](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/common/significantTokens.js) class. This should be fast and should also help to make specification languages written with this approach in mind relatively simple. In the aforementioned [lexical part](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js) of the Florence specification language, for example, there is no need to exclude keywords and special characters from the regular expression for `unassigned` tokens, because the content to which this regular expression will be applied is guaranteed not to have these keywords or special characters in the first place.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-lexers

You can also clone the repository with [git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Lexers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

These are not very edifying, you are advised to have a look at Occam's [Parser](https://github.com/occam-proof-assistant/Parser) examples instead. However if you must, see the `examples.html` file in the project's root directory, and read on.

### The basic example

The first pass of the basic lexer will only pick out whitespace. And in this example at least, the second pass only has one rule, called the `terminalSymbols` rule, the regular expression pattern for which can be changed dynamically. The HTML for the resulting tokens is shown on the right, corresponding to content given on the left. This is the same for all the examples, in fact.

If the terminal symbols pattern does not result in a valid regular expression, for example the following...

    \+|\-|\*|\/|\(|\)|\

...the border of the text area will turn red and no tokens will be shown.

The recursive descent argument will guard against content being unmatchable, you can see this in action if you change the terminal symbols regular expression pattern to the following:

    \+|\-|\*|\/|\(|\)|

Neither of the two remaining examples allow the grammar to be changed dynamically, however this is easily done by editing the `grammar.js` files in the corresponding directories and rebuilding. For instructions on how to do so, see the section on building immediately after this one:

### The Florence example

The first pass of the Florence lexer picks out include directives of the following form...

    include("...")

...and comments of the following form:

    /* ... */

It does not currently support single line comments.

It will add end of line tokens.

### The Gallina example

The Gallina lexer treats comments differently, with a slightly different syntax...

    (* ... *)

...and for allows comments to be nested. It will not add end of line tokens nor look for include directives. It cannot at this stage be considered a faithful rendering of the Gallina specification. There is more work to do.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

The Florence and Gallina grammars are defined in the `grammar.js` files found in the `es6/florence` and `es6/gallina` directories, respectively.

## Resources

* [The Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
