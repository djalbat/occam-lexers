# Occam Lexers

[Occam](https://github.com/djalbat/occam)'s lexers.

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

## Examples

These are not very edifying, you are encouraged to have a look at Occam's [parsers](https://github.com/djalbat/occam-parsers) examples instead. However if you must, see the `index.html` file in the root of the repository and read on.

Each of the examples has a textarea in which the corresponding lexer's entries are given in JSON format. The regular expression patterns themselves are supplied as strings with the usual escaping. You can change both the lexical entries and the content to be matched dynamically, and see the resulting tokens.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888/ and will reload automatically when changes are made.

## Contact

* james.smith@openmathematics.org
