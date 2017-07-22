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

There are four lexers in all:

* A BNF lexer, actually [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).
* A basic lexer, for illustrative purposes, and for developing new grammars.
* The main lexer, namely the lexer for the lexical patterns part of Occam's vernacular, called Florence.

All lexers share common functionality. Each takes four passes to match five kinds of tokens, although with caveats:

1. Comments
2. Whitespace
3. String literals
4. Regular expressions
5. Remaining tokens

Comment tokens are considered to be non-significant whilst the others, note that this includes whitespace, are considered to be significant. If any content is left over that cannot be matched, an error is thrown. Only the fifth pass will match significant tokens defined by the lexical entries, each of which map a significant token type to a regular expression. On the other hand, the regular expressions and related functionality to match the tokens in the first four passes are hard-coded. Note that the extended BNF lexer ignores comments, the basic lexer comments, string literals and regular expressions. Finally, note that Florence lexer will add end of line tokens and that these, like whitespace, are considered to be significant. It will also not match regular expressions.

The fifth pass uses a what could loosely be called a recursive descent algorithm. This should be fast and helps to keep the lexical regular expression patterns relatively simple. For the Florence lexical patterns, for example, there is no need to exclude keywords and special characters from the regular expression for `unassigned` tokens, because the content to which this regular expression will be applied is guaranteed not to have these keywords or special characters in the first place. In fact all of the parsers have a last `error` entry which simply has the most general regular expression to mop up any content that remains after the other regular expressions have been tried.

The lexical entries for the BNF lexer are the following:

    [
    
      { "special": "::=|\\||\\(|\\)|\\?|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>" },
    
      { "type": "\\[[^/]+\\]" },
    
      { "name": "[\\w|~]+" },
                            
      { "error" : "^.*$" }
    
    ]
    
In the Florence case, the regular expression pattern for `unassigned` tokens is split up into the following ranges:

* `\u{21}-\u{7E}` - Basic Latin
* `\u{A1}-\u{FF}` - Latin-1 Supplement
* `\u{370}-\u{3FF}` - Greek and Coptic
* `\u{2200}-\u{22FF}` - Mathematical Operators
* `\u{2A00}-\u{2AFF}` - Supplemental Mathematical Operators
* `\u{2300}-\u{23ff}` - Miscellaneous Technical
* `\u{1D400}-\u{1D7FF}` - Mathematical Alphanumeric Symbols

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-lexers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Lexers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

These are not very edifying, you are encouraged to have a look at Occam's [Parsers](https://github.com/occam-proof-assistant/Parsers) examples instead. However if you must, see the `index.html` file in the `examples` directory and read on.

Each of the examples has a textarea in which the corresponding lexer's entries are given in JSON format. The regular expression patterns themselves are supplied as strings with the usual escaping. You can change both the lexical entries and the content to be matched dynamically, and see the resulting tokens.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
