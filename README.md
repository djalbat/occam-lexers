# Occam Lexers

[Occam](https://github.com/djalbat/occam)'s lexers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

Three lexers are documented:

* A BNF lexer, actually [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).
* A basic lexer, for illustrative purposes.
* A common lexer, which can be extended.

All lexers share common functionality. Each tokenises the ends of lines first and then on the whole tokenises the remaining content in the following order:

1. Whitespace
2. Comments
3. Regular expressions
4. String literals
5. Other significant tokens

If any part of the content cannot be tokenised, an error is thrown.

The other significant tokens are defined by the lexical entries, each of which maps a significant token type to a regular expression. On the other hand, the regular expressions and related functionality to match the first four types of otokens are hard-coded.

Comment and whitespace tokens are considered to be non-significant whilst the others are considered to be significant. The exception to this rule is end of line tokens, which can be either. Non-significant tokens are ignored by parsers although they separate significant tokens.

The lexical entries for the BNF lexer are the following:

    [
    
      { "special": "^(?:::=|\\||\\(|\\)|\\?|\\!|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>)" },

      { "type": "^\\[[^\\]]+\\]" },

      { "name": "^[\\w|~]+" },

      { "unassigned": "^[^\\s]+" }
    
    ]
    
## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-lexers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-lexers.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Examples

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The examples will then be available at the following URL:

http://localhost:8888

The source for the examples can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the examples whilst reading what follows. You can rebuild them on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Import the required lexer's class and then call it's `fromNothing()` factory method.

```
import { BasicLexer } from "occam-lexers";

const basicLexer = BasicLexer.fromNothing();

const content = `

        ...

      `,
      tokens = basicLexer.tokenise(content);

...
```
The tokens are created with the `tokenise(...)` method.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

