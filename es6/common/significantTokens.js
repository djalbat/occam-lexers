'use strict';

var ErrorToken = require('../common/token/error');

class SignificantTokens {
  static pass(tokensOrContents, line, rules) {
    var tokens = tokensOrContents.reduce(function(tokens, tokenOrRemainingContent) {
      if (typeof tokenOrRemainingContent === 'string') {
        var content = tokenOrRemainingContent,  ///
            depth = 0,
            significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, depth);

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

function significantTokensFromWithinContentAndLine(content, line, rules, depth) {
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
        significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

    if (significantTokenPositionWithinContent === -1) {
      significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, nextDepth);
    } else {
      var significantToken = rule.significantTokenFromWithinContentAndLine(content, line),
          significantTokenLength = significantToken.getLength(),
          left = significantTokenPositionWithinContent,  ///
          right = significantTokenPositionWithinContent + significantTokenLength,  ///
          leftContent = content.substring(0, left),
          rightContent = content.substring(right),
          leftSignificantTokens = significantTokensFromWithinContentAndLine(leftContent, line, rules, nextDepth),
          rightSignificantTokens = significantTokensFromWithinContentAndLine(rightContent, line, rules, depth);

      significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
    }
  }

  return significantTokens;
}
