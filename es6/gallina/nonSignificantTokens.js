'use strict';

var util = require('../util'),
    WhitespaceToken = require('../common/token/whitespace'),
    SignificantContentToken = require('../common/token/significantContent'),
    EndOfMultiLineCommentToken = require('./token/comment/endOfMultiLine'),
    StartOfMultiLineCommentToken = require('./token/comment/startOfMultiLine'),
    MiddleOfMultiLineCommentToken = require('./token/comment/middleOfMultiLine');

class NonSignificantTokens {
  static pass(content, context, line) {
    var tokens = [],
        remainingContent,
        tokenLength,
        token;
    
    while (content !== '') {
      var startOfMultiLineCommentTokenPosition = StartOfMultiLineCommentToken.position(content);

      if (startOfMultiLineCommentTokenPosition === 0) {
        var startOfMultiLineCommentToken = StartOfMultiLineCommentToken.fromContent(content, line);

        token = startOfMultiLineCommentToken; ///

        tokenLength = token.getLength();

        content = content.substring(tokenLength);

        context.increaseMultiLineCommentDepth();

        tokens.push(token);

        continue;
      }

      var contentLength = content.length,
          multiLineCommentDepth = context.getMultiLineCommentDepth();

      if (multiLineCommentDepth > 0) {
        var endOfMultiLineCommentTokenPosition = EndOfMultiLineCommentToken.position(content);

        if (endOfMultiLineCommentTokenPosition === 0) {
          var endOfMultiLineCommentToken = EndOfMultiLineCommentToken.fromContent(content, line);

          token = endOfMultiLineCommentToken; ///

          tokenLength = token.getLength();

          context.decreaseMultiLineCommentDepth();

          content = content.substring(tokenLength);

          tokens.push(token);

          continue;
        }

        tokenLength = util.minBarMinusOne(startOfMultiLineCommentTokenPosition, endOfMultiLineCommentTokenPosition, contentLength);

        remainingContent = content.substring(tokenLength);
        
        content = content.substring(0, tokenLength);
        
        var middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(content, line);

        token = middleOfMultiLineCommentToken; ///
        
        tokenLength = token.getLength();
        
        content = remainingContent;

        tokens.push(token);

        continue;
      }

      var whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        var whitespaceToken = WhitespaceToken.fromContent(content, line);

        token = whitespaceToken; ///
        
        tokenLength = token.getLength();
        
        content = content.substring(tokenLength);

        tokens.push(token);

        continue;
      }
      
      tokenLength = util.minBarMinusOne(startOfMultiLineCommentTokenPosition, whitespaceTokenPosition, contentLength);
      
      remainingContent = content.substring(tokenLength);
      
      content = content.substring(0, tokenLength);
      
      var significantContentToken = SignificantContentToken.fromContent(content);
      
      token = significantContentToken;  ///
      
      content = remainingContent;

      tokens.push(token);

      continue;
    }
    
    return tokens;
  }
}

module.exports = NonSignificantTokens;
