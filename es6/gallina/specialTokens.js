'use strict';

var SpecialToken = require('../common/token/special'),
    ParseableToken = require('../common/token/parseable');

var specialTokenRegExp = /(!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.\(|\.\.|\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|\|)/;

class SpecialTokens {
  static pass(line) {
    var tokens = line.getTokens();
    
    tokens = tokens.reduce(function(tokens, token) {
      if (token instanceof ParseableToken) {
        var content = token.getContent(),
            contentTokens = tokensFromContent(content, line);

        tokens = tokens.concat(contentTokens);
      } else {
        tokens.push(token);
      }

      return tokens;
    }, []);

    line.setTokens(tokens);
  }
}

module.exports = SpecialTokens;

function tokensFromContent(content, line) {
  var contents = content.split(specialTokenRegExp),
      tokens = contents.reduce(function(tokens, content) {
        if (content !== '') {
          var contentIsSpecial = (content.search(specialTokenRegExp) == 0);

          if (contentIsSpecial) {
            var significantToken = new SpecialToken(content, line);

            tokens.push(significantToken);
          } else {
            var parseableToken = new ParseableToken(content);

            tokens.push(parseableToken);
          }
        }

        return tokens;
      }, []);

  return tokens;
}
