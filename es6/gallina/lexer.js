'use strict';

var Line = require('./line');

class Lexer {
  static tokensFromContent(content, context) {
    var lines = linesFromContent(content, context),
        tokens = lines.reduce(function(tokens, line) {
          var lineTokens = line.getTokens();

          tokens = tokens.concat(lineTokens);

          return tokens;
        }, []);
    
    return tokens;    
  }
}

module.exports = Lexer;

function linesFromContent(content, context) {
  var contents = content.split(/\n/),
      lines = contents.map(function(content) {
        var line = Line.fromContent(content, context);

        return line;
      });

  return lines;
}
