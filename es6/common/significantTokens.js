'use strict';

var ErrorToken = require('../common/token/error');

class SignificantTokens {
  static pass(nonSignificantTokenOrSignificantContents, line, rules) {
    var tokens = nonSignificantTokenOrSignificantContents.reduce(function(tokens, nonSignificantTokenOrSignificantContent) {
      if (typeof nonSignificantTokenOrSignificantContent === 'string') {
        var significantContent = nonSignificantTokenOrSignificantContent,  ///
            content = significantContent, ///
            depth = 0,
            significantOrErrorTokens = significantOrErrorTokensFromContent(content, line, rules, depth);

        tokens = tokens.concat(significantOrErrorTokens);
      } else {
        var nonSignificantToken = nonSignificantTokenOrSignificantContent;  ///
        
        tokens.push(nonSignificantToken);
      }

      return tokens;
    }, []);

    return tokens;
  }
}

module.exports = SignificantTokens;

const RULE_IS_UNDEFINED_MESSAGE = 'There are no rules to parse this content.';

function significantOrErrorTokensFromContent(content, line, rules, depth) {
  var significantOrErrorTokens,
      rule = rules.getRule(depth),
      ruleIsUndefined = (rule === undefined);

  if (content === '') {
    significantOrErrorTokens = [];
  } else if (ruleIsUndefined) {
    var errorToken = new ErrorToken(content, line, RULE_IS_UNDEFINED_MESSAGE),
        errorTokens = [errorToken];

    significantOrErrorTokens = errorTokens;
  } else {
    var nextDepth = depth + 1,
        significantTokenPosition = rule.significantTokenPosition(content);

    if (significantTokenPosition === -1) {
      significantOrErrorTokens = significantOrErrorTokensFromContent(content, line, rules, nextDepth);
    } else {
      var significantToken = rule.significantTokenFromContent(content, line),
          significantTokenLength = significantToken.getLength(),
          left = significantTokenPosition,  ///
          right = significantTokenPosition + significantTokenLength,  ///
          leftContent = content.substr(0, left),
          rightContent = content.substr(right),
          leftSignificantTokens = significantOrErrorTokensFromContent(leftContent, line, rules, nextDepth),
          rightSignificantTokens = significantOrErrorTokensFromContent(rightContent, line, rules, depth),
          significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);

      significantOrErrorTokens = significantTokens;
    }
  }

  return significantOrErrorTokens;
}
