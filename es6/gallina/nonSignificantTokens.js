'use strict';

var util = require('../util'),
    ParseableToken = require('../common/token/parseable'),
    WhitespaceToken = require('../common/token/whitespace'),
    EndOfMultiLineCommentToken = require('./token/comment/endOfMultiLine'),
    StartOfMultiLineCommentToken = require('./token/comment/startOfMultiLine'),
    MiddleOfMultiLineCommentToken = require('./token/comment/middleOfMultiLine');

class NonSignificantTokens {
  static pass(line) {
    var content = line.getContent(),
        multiLineCommentDepth = line.getMultiLineCommentDepth();
    
    while (content !== '') {
      var startOfMultiLineCommentTokenPosition = startOfMultiLineCommentToken(line);

      if (startOfMultiLineCommentTokenPosition !== 0) {
        multiLineCommentDepth = line.getMultiLineCommentDepth();

        if (multiLineCommentDepth > 0) {
          var endOfMultiLineCommentTokenPosition = endOfMultiLineToken(line);

          if (endOfMultiLineCommentTokenPosition !== 0) {
            middleOfMultiLineToken(line, startOfMultiLineCommentTokenPosition, endOfMultiLineCommentTokenPosition);
          }
        } else {
          var whitespaceTokenPosition = whitespaceToken(line);

          if (whitespaceTokenPosition !== 0) {
            parseableToken(line, startOfMultiLineCommentTokenPosition, whitespaceTokenPosition);
          }
        }
      }

      content = line.getContent();
    }
  }
}

module.exports = NonSignificantTokens;

function startOfMultiLineCommentToken(line) {
  var content = line.getContent(),
      startOfMultiLineCommentTokenPosition = StartOfMultiLineCommentToken.positionInContent(content);

  if (startOfMultiLineCommentTokenPosition === 0) {
    var startOfMultiLineCommentToken = StartOfMultiLineCommentToken.fromContent(content),
        startOfMultiLineCommentTokenLength = startOfMultiLineCommentToken.getLength();

    line.pushToken(startOfMultiLineCommentToken);
    line.chopContent(startOfMultiLineCommentTokenLength);
    line.increaseMultiLineCommentDepth();
  }

  return startOfMultiLineCommentTokenPosition;
}

function endOfMultiLineToken(line) {
  var content = line.getContent(),
      endOfMultiLineCommentTokenPosition = EndOfMultiLineCommentToken.positionInContent(content);

  if (endOfMultiLineCommentTokenPosition === 0) {
    var endOfMultiLineCommentToken = EndOfMultiLineCommentToken.fromContent(content),
        endOfMultiLineCommentTokenLength = endOfMultiLineCommentToken.getLength();

    line.pushToken(endOfMultiLineCommentToken);
    line.chopContent(endOfMultiLineCommentTokenLength);
    line.decreaseMultiLineCommentDepth();
  }

  return endOfMultiLineCommentTokenPosition;
}

function middleOfMultiLineToken(line, startOfMultiLineCommentTokenPosition, endOfMultiLineCommentTokenPosition) {
  var contentLength = line.getContentLength(),
      commentedContentLength = util.minBarMinusOne(startOfMultiLineCommentTokenPosition, endOfMultiLineCommentTokenPosition, contentLength),
      commentedContent = line.getContentSubstring(commentedContentLength),
      middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(commentedContent),
      middleOfMultiLineCommentTokenLength = middleOfMultiLineCommentToken.getLength();

  line.pushToken(middleOfMultiLineCommentToken);
  line.chopContent(middleOfMultiLineCommentTokenLength);
}

function whitespaceToken(line) {
  var content = line.getContent(),
      whitespaceTokenPosition = WhitespaceToken.positionInContent(content);

  if (whitespaceTokenPosition === 0) {
    var whitespaceToken = WhitespaceToken.fromContent(content),
        whitespaceTokenLength = whitespaceToken.getLength();

    line.pushToken(whitespaceToken);
    line.chopContent(whitespaceTokenLength);
  }

  return whitespaceTokenPosition;
}

function parseableToken(line, startOfMultiLineCommentTokenPosition, whitespaceTokenPosition){
  var content = line.getContent(),
      contentLength = content.length,
      parseableTokenContentLength = util.minBarMinusOne(startOfMultiLineCommentTokenPosition, whitespaceTokenPosition, contentLength),
      parseableTokenContent = line.getContentSubstring(parseableTokenContentLength);

  content = parseableTokenContent;  ///

  var parseableToken = new ParseableToken(content);

  line.pushToken(parseableToken);
  line.chopContent(parseableTokenContentLength);
}
