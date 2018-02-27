'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { splice } = arrayUtilities;

class SignificantTokens {
  static pass(tokensOrContents, rules) {
    let index = 0,
        tokensOrContentsLength = tokensOrContents.length;

    while (index < tokensOrContentsLength) {
      const tokenOrContent = tokensOrContents[index],
            tokenOrContentContent = (typeof tokenOrContent === 'string');

      if (tokenOrContentContent) {
        const content = tokenOrContent,  ///
              depth = 0,
              significantTokens = significantTokensFromWithinContent(content, depth, rules),
              significantTokensLength = significantTokens.length,
              start = index,  ///
              deleteCount = 1;

        splice(tokensOrContents, start, deleteCount, significantTokens);

        tokensOrContentsLength -= 1;

        tokensOrContentsLength += significantTokensLength;

        index += significantTokensLength;
      } else {
        index += 1;
      }
    }
  }
}

module.exports = SignificantTokens;

function significantTokensFromWithinContent(content, depth, rules) {
  let significantTokens = [];

  if (content !== '') {
    const rule = rules.getRule(depth);

    if (rule !== null) {
      const nextDepth = depth + 1,
            significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromWithinContent(content, nextDepth, rules);
      } else {
        const significantToken = rule.significantTokenFromWithinContent(content),
              significantTokenContentLength = significantToken.getContentLength(),
              left = significantTokenPositionWithinContent,  ///
              right = significantTokenPositionWithinContent + significantTokenContentLength,  ///
              leftContent = content.substring(0, left),
              rightContent = content.substring(right),
              leftSignificantTokens = significantTokensFromWithinContent(leftContent, nextDepth, rules),
              rightSignificantTokens = significantTokensFromWithinContent(rightContent, depth, rules);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error(`There is no rule to parse '${content}'.`);
    }
  }

  return significantTokens;
}
