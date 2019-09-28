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

There are also other, otherwise undocumented lexers.

All lexers share common functionality. Each tokenises the ends of lines first and then on the whole tokenises the remaining content in the following order:

1. Whitespace
2. Comments
3. Regular expressions
4. String literals
5. Other significant tokens

If any part of the content cannot be tokenised, an error is thrown.

The other significant tokens are defined by the lexical entries, each of which maps a significant token type to a regular expression. On the other hand, the regular expressions and related functionality to match the first four types of otokens are hard-coded.

Comment and whitespace tokens are considered to be non-significant whilst the others are considered to be significant. The exception to this rule is end of line tokens. The Florence lexer treats them as significant, all the others treat them as non-significant. Non-significant tokens are ignored by parsers although they separate significant tokens. Note that some lexers ignore comments, string literals, etc. Check the source code for details.

The lexical entries for the BNF lexer are the following:

    [
    
      { "special"    : "^(?:::=|\\||\\(|\\)|\\?|\\!|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>)" },

      { "type"       : "^\\[[^\\]]+\\]" },

      { "name"       : "^[\\w|~]+" },

      { "unassigned" : "^[^\\s]+" }
    
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
