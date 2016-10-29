# Lexers

The Occam proof assistant's lexers.

There are four:

* A very simple lexer for a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form), hardly a lexer at all in fact.
* A basic lexer, for illustrative purposes.
* A lexer for the [Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html).
* A lexer for [lexical part of Occam's own specification language](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js), called Florence.

The last three of these lexers share common patterns and will take two passes to parse a file. The first pass will pick out the non-significant tokens, specifically comments and whitespace. The second pass will pick out the significant and error tokens.

This second pass uses a recursive descent algorithm, see the `significantOrErrorTokensFromContent()` method of the [significantTokens](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/common/significantTokens.js) class. This should be fast and should also help to make specification languages written with this approach in mind relatively simple.

In the aforementioned [lexical part of the Florence specification language](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js), for example, there is no need to exclude keywords and special characters from the regular expression for `unassigned` tokens, because the content to which this regular expression will be applied is guaranteed not to have these keywords or special characters.

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
