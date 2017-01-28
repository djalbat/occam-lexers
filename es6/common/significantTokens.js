'use strict';

var ErrorToken = require('../common/token/error');

class SignificantTokens {
  static pass(tokensOrContents, line, rules) {
    var tokens = tokensOrContents.reduce(function(tokens, tokenOrRemainingContent) {
      if (typeof tokenOrRemainingContent === 'string') {
        var content = tokenOrRemainingContent,  ///
            depth = 0,
            significantTokens = significantTokensFromContentAndLine(content, line, rules, depth);

        tokens = tokens.concat(significantTokens);
      } else {
        var nonSignificantToken = tokenOrRemainingContent;  ///
        
        tokens.push(nonSignificantToken);
      }

      return tokens;
    }, []);

    return tokens;
  }
}

module.exports = SignificantTokens;

function significantTokensFromContentAndLine(content, line, rules, depth) {
  var significantTokens,
      rule = rules.getRule(depth),
      ruleIsUndefined = (rule === undefined);

  if (content === '') {
    significantTokens = [];
  } else if (ruleIsUndefined) {
    var errorToken = ErrorToken.fromContentAndLine(content, line),
        errorTokens = [errorToken];

    significantTokens = errorTokens;  ///
  } else {
    var nextDepth = depth + 1,
        significantTokenPosition = rule.significantTokenPosition(content);

    if (significantTokenPosition === -1) {
      significantTokens = significantTokensFromContentAndLine(content, line, rules, nextDepth);
    } else {
      var significantToken = rule.significantTokenFromContentAndLine(content, line),
          significantTokenLength = significantToken.getLength(),
          left = significantTokenPosition,  ///
          right = significantTokenPosition + significantTokenLength,  ///
          leftContent = content.substr(0, left),
          rightContent = content.substr(right),
          leftSignificantTokens = significantTokensFromContentAndLine(leftContent, line, rules, nextDepth),
          rightSignificantTokens = significantTokensFromContentAndLine(rightContent, line, rules, depth);

      significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
    }
  }

  return significantTokens;
}
