# Lexers

[Occam](https://github.com/jecs-imperial/occam)'s lexers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Building](#building)
- [Contact](#contact)

## Introduction

Three lexers are documented:

* A BNF lexer, actually [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).
* A basic lexer, for illustrative purposes.
* The Florence lexer, namely the lexer for the [lexical entries part](https://raw.githubusercontent.com/jecs-imperial/occam-lexers/master/es6/florence/entries.js) of Occam's vernacular.

All lexers share common functionality. Each takes six passes to match the following five types of tokens, although with caveats:

1. Ends of lines
2. Comments
3. Whitespace
4. String literals
5. Regular expressions
6. Other significant tokens

If any content is left over that cannot be matched, an error is thrown.

Only the sixth and last process will match significant tokens defined by the lexical entries, each of which map a significant token type to a regular expression. On the other hand, the regular expressions and related functionality to match the tokens in the other passes are hard-coded.

Comment and whitespace tokens are considered to be non-significant whilst the others are considered to be significant. The exception to this rule is end of line tokens. The Florence lexer treats them as significant, all the others treat them as non-significant. Non-significant tokens are ignored by parsers although they separate significant tokens. Note that the extended BNF lexer ignores comments whilst the basic lexer ignores comments, string literals and regular expressions. Also, the Florence lexer ignores regular expressions.

The sixth process uses a what could loosely be called a recursive descent algorithm. This should be fast and helps to keep the lexical regular expression patterns relatively simple. There is no need to exclude keywords and special characters from the regular expression for `unassigned` tokens, for example, because the content to which this regular expression will be applied is guaranteed not to have these keywords or special characters in the first place.

The lexical entries for the BNF lexer are the following:

    [
    
      { "special": "::=|\\||\\(|\\)|\\?|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>" },
    
      { "type": "\\[[^\\]]+\\]" },
    
      { "name": "[\\w|~]+" },
    
      { "error" : "^.*$" }
    
    ]
    
## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-lexers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-lexers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Usage

```js
const lexers = require('occam-lexers');

const { FlorenceLexer } = lexers;

const florenceLexer = FlorenceLexer.fromNothing();

const content = ...,
      tokens = florenceLexer.tokenise(content);

...
```

## Examples

These are not very edifying, you are encouraged to have a look at Occam's [Parsers](https://github.com/jecs-imperial/occam-parsers) examples instead. However if you must, see the `index.html` file in the root of the repository and read on.

Each of the examples has a textarea in which the corresponding lexer's entries are given in JSON format. The regular expression patterns themselves are supplied as strings with the usual escaping. You can change both the lexical entries and the content to be matched dynamically, and see the resulting tokens.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
