'use strict';

class SignificantTokens {
  static pass(tokensOrContents, line, rules) {
    const tokens = tokensOrContents.reduce(function(tokens, tokenOrRemainingContent) {
            if (typeof tokenOrRemainingContent === 'string') {
              const content = tokenOrRemainingContent,  ///
                    depth = 0,
                    significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, depth);
      
              tokens = tokens.concat(significantTokens);
            } else {
              const nonSignificantToken = tokenOrRemainingContent;  ///
              
              tokens.push(nonSignificantToken);
            }
      
            return tokens;
          }, []);

    return tokens;
  }
}

module.exports = SignificantTokens;

function significantTokensFromWithinContentAndLine(content, line, rules, depth) {
  let significantTokens = [];

  if (content !== '') {
    const rule = rules.getRule(depth);

    if (rule !== null) {
      const nextDepth = depth + 1,
            significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, nextDepth);
      } else {
        const significantToken = rule.significantTokenFromWithinContentAndLine(content, line),
              significantTokenLength = significantToken.getLength(),
              left = significantTokenPositionWithinContent,  ///
              right = significantTokenPositionWithinContent + significantTokenLength,  ///
              leftContent = content.substring(0, left),
              rightContent = content.substring(right),
              leftSignificantTokens = significantTokensFromWithinContentAndLine(leftContent, line, rules, nextDepth),
              rightSignificantTokens = significantTokensFromWithinContentAndLine(rightContent, line, rules, depth);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error(`There is no rule to parse the content '${content}' on line ${line}`);
    }
  }

  return significantTokens;
}
