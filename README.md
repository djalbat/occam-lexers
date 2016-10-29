# Lexers

The Occam proof assistant's lexers.

There are four:

* A very simple lexer for a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form), hardly a lexer at all in fact.
* A basic lexer, for illustrative purposes.
* A lexer for the [Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html) grammar.
* A lexer for [lexical part of Occam's own specification language](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js), called Florence.

The last three of these lexers share common patterns and will take two passes to parse a file. The first pass will pick out the non-significant tokens, specifically comments and whitespace. The second pass is a recursive descent algorithm shared by all of them, see the `significantOrErrorTokensFromContent()` method of the [significantTokens](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/common/significantTokens.js) class. This should be fast and makes specification languages written with this approach in mind relatively simple. There is no need to exclude keywords and special characters from `unassigned` tokens in the aforementioned [lexical grammar for Florence]((https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js), for example, because the content has already been split with the corresponding regular expressions. In essence, first strings are picked out, then special characters, and so on.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-lexers

You can also clone the repository with [git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Lexers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Resources

* [The Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
