'use strict';

const tokens = require('../tokens');

const { passGivenCallback } = tokens;

function pass(tokensOrContents, rules) {
  passGivenCallback(tokensOrContents, function(content) { return significantTokensFromWithinContent(content, rules); });
}

module.exports = {
  pass: pass
};

function significantTokensFromWithinContent(content, rules, depth = 0) {
  let significantTokens = [];

  if (content !== '') {
    const rule = rules.getRule(depth);

    if (rule !== null) {
      const nextDepth = depth + 1,
            significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromWithinContent(content, rules, nextDepth);
      } else {
        const significantToken = rule.significantTokenFromWithinContent(content),
              significantTokenContentLength = significantToken.getContentLength(),
              left = significantTokenPositionWithinContent,  ///
              right = significantTokenPositionWithinContent + significantTokenContentLength,  ///
              leftContent = content.substring(0, left),
              rightContent = content.substring(right),
              leftSignificantTokens = significantTokensFromWithinContent(leftContent, rules, nextDepth),
              rightSignificantTokens = significantTokensFromWithinContent(rightContent, rules, depth);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error(`There is no rule to parse '${content}'.`);
    }
  }

  return significantTokens;
}
