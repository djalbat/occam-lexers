'use strict';

var util = require('../../util'),
    ErrorToken = require('../common/token/error'),
    ParseableToken = require('../common/token/parseable');

class SignificantTokens {
  static pass(context, parser) {
    var tokens = context.getTokens(),
        index = 0,
        token = tokens[index];

    while (token !== undefined) {
      if (token instanceof ParseableToken) {
        var significantToken = token,
            uncommentedContent = significantToken.getContent(),
            uncommentedContentTokens = tokensFromCUncommentedContent(uncommentedContent, parser),
            uncommentedContentTokensLength = uncommentedContentTokens.length;

        util.spliceArray(tokens, index, 1, uncommentedContentTokens);

        index += uncommentedContentTokensLength;
     } else {
        index++;
      }

      token = tokens[index];
    }
  }
}

module.exports = SignificantTokens;

function tokensFromCUncommentedContent(uncommentedContent, parser) {
  var tokens = [],
      content = uncommentedContent; ///

  while (content !== '') {
    var tokenOrTokens = parser.fromContent(content) ||
                        ErrorToken.fromContent(content),
                        tokenOrTokensLength = lengthOfTokenOrTokens(tokenOrTokens);

    content = content.substring(tokenOrTokensLength);

    tokens = tokens.concat(tokenOrTokens);
  }

  return tokens;
}

function lengthOfTokenOrTokens(tokenOrTokens) {
  var tokenOrTokensLength,
      tokens = tokenOrTokens instanceof Array ? tokenOrTokens : [tokenOrTokens],
      tokensLength = 0;

  tokens.forEach(function(token) {
    tokensLength += token.getLength();
  });

  tokenOrTokensLength = tokensLength;

  return tokenOrTokensLength;
}
