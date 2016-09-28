'use strict';

var util = require('../../util'),
    ParseableToken = require('../common/token/parseable'),
    WhitespaceToken = require('../common/token/whitespace'),
    SingleLineCommentToken = require('./token/comment/singleLine'),
    EndOfMultiLineCommentToken = require('./token/comment/endOfMultiLine'),
    StartOfMultiLineCommentToken = require('./token/comment/startOfMultiLine'),
    MiddleOfMultiLineCommentToken = require('./token/comment/middleOfMultiLine');

class NonSignificantTokens {
  static hasEndOfMultiLineCommentToken(tokens) {
    return tokens.some(function(token) {
      return token instanceof EndOfMultiLineCommentToken;
    });
  }

  static hasStartOfMultiLineCommentToken(tokens) {
    return tokens.some(function(token) {
      return token instanceof StartOfMultiLineCommentToken;
    });
  }

  static pass(context) {
    var content = context.getContent(),
        inMultiLineComment = context.isInMultiLineComment();

    while (content !== '') {
      if (inMultiLineComment) {
        var endOfMultiLineCommentTokenPosition = endOfMultiLineCommentToken(context);

        if (endOfMultiLineCommentTokenPosition !== 0) {
          middleOfMultiLineCommentToken(context, endOfMultiLineCommentTokenPosition);
        }
      } else {
        var startOfMultiLineCommentTokenPosition = startOfMultiLineCommentToken(context);

        if (startOfMultiLineCommentTokenPosition !== 0) {
          var singleLineCommentTokenPosition = singleLineCommentToken(context);

          if (singleLineCommentTokenPosition !== 0) {
            var whitespaceTokenPosition = whitespaceToken(context);

            if (whitespaceTokenPosition !== 0) {
              parseableToken(context, startOfMultiLineCommentTokenPosition, singleLineCommentTokenPosition, whitespaceTokenPosition);
            }
          }
        }
      }

      content = context.getContent();      
      inMultiLineComment = context.isInMultiLineComment();
    }
  }
}

module.exports = NonSignificantTokens;

function endOfMultiLineCommentToken(context) {
  var content = context.getContent(),
      endOfMultiLineCommentTokenPosition = EndOfMultiLineCommentToken.positionInContent(content);

  if (endOfMultiLineCommentTokenPosition === 0) {
    var endOfMultiLineCommentToken = EndOfMultiLineCommentToken.fromContent(content),
        endOfMultiLineCommentTokenLength = endOfMultiLineCommentToken.getLength();

    context.pushToken(endOfMultiLineCommentToken);
    context.chopContent(endOfMultiLineCommentTokenLength);
    context.setInMultiLineComment(false);
  }

  return endOfMultiLineCommentTokenPosition;
}

function middleOfMultiLineCommentToken(context, endOfMultiLineCommentTokenPosition) {
  var content = context.getContent(),
      commentedContent = endOfMultiLineCommentTokenPosition === -1 ? content : content.substring(0, endOfMultiLineCommentTokenPosition);

  var middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(commentedContent),
      middleOfMultiLineCommentTokenLength = middleOfMultiLineCommentToken.getLength();

  context.pushToken(middleOfMultiLineCommentToken);
  context.chopContent(middleOfMultiLineCommentTokenLength);
}

function startOfMultiLineCommentToken(context) {
  var content = context.getContent(),
      startOfMultiLineCommentTokenPosition = StartOfMultiLineCommentToken.positionInContent(content);

  if (startOfMultiLineCommentTokenPosition === 0) {
    var startOfMultiLineCommentToken = StartOfMultiLineCommentToken.fromContent(content),
        startOfMultiLineCommentTokenLength = startOfMultiLineCommentToken.getLength();

    context.pushToken(startOfMultiLineCommentToken);
    context.chopContent(startOfMultiLineCommentTokenLength);
    context.setInMultiLineComment(true);
  }
}

function singleLineCommentToken(context) {
  var content = context.getContent(),
      singleLineCommentTokenPosition = SingleLineCommentToken.positionInContent(content);

  if (singleLineCommentTokenPosition === 0) {
    var singleLineCommentToken = SingleLineCommentToken.fromContent(content);

    context.pushToken(singleLineCommentToken);
    context.setContent('');
  }

  return singleLineCommentTokenPosition;
}

function whitespaceToken(context) {
  var content = context.getContent(),
      whitespaceTokenPosition = WhitespaceToken.positionInContent(content);

  if (whitespaceTokenPosition === 0) {
    var whitespaceToken = WhitespaceToken.fromContent(content),
        whitespaceTokenLength = whitespaceToken.getLength();

    context.pushToken(whitespaceToken);
    context.chopContent(whitespaceTokenLength);
  }

  return whitespaceTokenPosition;
}

function parseableToken(context, startOfMultiLineCommentTokenPosition, singleLineCommentTokenPosition, whitespaceTokenPosition) {
  var contentLength = context.getContentLength(),
      parseableContentLength = util.minBarMinusOne(startOfMultiLineCommentTokenPosition, singleLineCommentTokenPosition, whitespaceTokenPosition, contentLength),
      parseableContent = context.getContentSubstring(parseableContentLength),
      content = parseableContent, ///
      parseableContentToken = new ParseableToken(content);

  context.pushToken(parseableContentToken);
  context.chopContent(parseableContentLength);
}
