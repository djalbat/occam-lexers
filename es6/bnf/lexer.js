'use strict';

const Line = require('./line');

class BNFLexer {
  static linesFromGrammar(grammar) {
    const contents = contentsFromGrammar(grammar),
          lines = contents.map(function(content) {
            const line = Line.fromContent(content);
            
            return line;
          });

    return lines;
  }
}

module.exports = BNFLexer;

function contentsFromGrammar(grammar) {
  const contents = grammar.split('\n').reduce(function (contents, content) {
    let matches;

    matches = content.match(Line.nameExpressionRegExp);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

    matches = content.match(Line.continuedExpressionRegExp);

    if (matches !== null) {
      const previousContent = contents.pop(),
            firstMatch = first(matches),
            continuedExpression = firstMatch, ///
            continuingContent = ' ' + continuedExpression;

      content = previousContent + continuingContent;

      contents.push(content);

      return contents;
    }

    return contents;
  }, []);

  return contents;
}

function first(array) { return array[0]; }
