'use strict';

var ErrorToken = require('../common/token/error');

class SignificantTokens {
  static pass(nonSignificantTokenOrSignificantContents, line, rules) {
    var tokens = nonSignificantTokenOrSignificantContents.reduce(function(tokens, nonSignificantTokenOrSignificantContent) {
      if (typeof nonSignificantTokenOrSignificantContent === 'string') {
        var significantContent = nonSignificantTokenOrSignificantContent,  ///
            content = significantContent, ///
            depth = 0,
            significantTokens = significantTokensFromContent(content, line, rules, depth);

        tokens = tokens.concat(significantTokens);
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

function significantTokensFromContent(content, line, rules, depth) {
  var significantTokens,
      rule = rules.getRule(depth),
      ruleIsUndefined = (rule === undefined);

  if (content === '') {
    significantTokens = [];
  } else if (ruleIsUndefined) {
    var errorToken = ErrorToken.fromContent(content);

    significantTokens = [errorToken]; ///
  } else {
    var nextDepth = depth + 1,
        significantTokenPosition = rule.significantTokenPosition(content);

    if (significantTokenPosition === -1) {
      significantTokens = significantTokensFromContent(content, line, rules, nextDepth);
    } else {
      var significantToken = rule.significantTokenFromContent(content, line),
          significantTokenLength = significantToken.getLength(),
          left = significantTokenPosition,  ///
          right = significantTokenPosition + significantTokenLength,  ///
          leftContent = content.substr(0, left),
          rightContent = content.substr(right),
          leftSignificantTokens = significantTokensFromContent(leftContent, line, rules, nextDepth),
          rightSignificantTokens = significantTokensFromContent(rightContent, line, rules, depth);

      significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
    }
  }

  return significantTokens;
}
