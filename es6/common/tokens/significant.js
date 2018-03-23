'use strict';

const tokens = require('../tokens');

const { processByCallback } = tokens;

function process(tokensOrContents, rules) {
  processByCallback(tokensOrContents, function(tokenOrContent) {
    let tokensOrRemainingContents;

    const tokenOrContentString = (typeof tokenOrContent === 'string'),
          tokenOrContentContent = tokenOrContentString; ///

    if (tokenOrContentContent) {
      const content = tokenOrContent, ///
            depth = 0,
            significantTokens = significantTokensFromContent(content, rules, depth);

      tokensOrRemainingContents = significantTokens; ///
    } else {
      const token = tokenOrContent;  ///

      tokensOrRemainingContents = [token];
    }

    return tokensOrRemainingContents;
  });
}

module.exports = {
  process: process
};

function significantTokensFromContent(content, rules, depth) {
  let significantTokens = [];

  if (content !== '') {
    const rule = rules.getRule(depth);

    if (rule !== null) {
      const nextDepth = depth + 1,
            significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromContent(content, rules, nextDepth);
      } else {
        const significantToken = rule.significantTokenFromWithinContent(content),
              significantTokenContentLength = significantToken.getContentLength(),
              left = significantTokenPositionWithinContent,  ///
              right = significantTokenPositionWithinContent + significantTokenContentLength,  ///
              leftContent = content.substring(0, left),
              rightContent = content.substring(right),
              leftSignificantTokens = significantTokensFromContent(leftContent, rules, nextDepth),
              rightSignificantTokens = significantTokensFromContent(rightContent, rules, depth);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error(`There is no rule to parse '${content}'.`);
    }
  }

  return significantTokens;
}
