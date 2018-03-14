'use strict';

const types = require('../types'),
      tokens = require('../tokens'),
      EndOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/endOf'),
      StartOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/startOf'),
      MiddleOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/middleOf'),
      HyperlinkMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/hyperlink'),
      StartOfSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/startOf'),
      MiddleOfSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/middleOf'),
      HyperlinkSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/hyperlink');

const { multiLineCommentType, singleLineCommentType } = types,
      { processByCallback } = tokens;

function process(tokensOrContents, commentType) {
  processByCallback(tokensOrContents, function(tokenOrContent) {
    const commentTokensOrRemainingContents = [];

    commentType = processCommentTokens(commentTokensOrRemainingContents, tokenOrContent, commentType);

    const tokensOrRemainingContents = commentTokensOrRemainingContents; ///

    return tokensOrRemainingContents;
  });

  return commentType;
}

module.exports = {
  process: process
};

function processCommentTokens(commentTokensOrRemainingContents, tokenOrContent, commentType) {
  const tokenOrContentContent = (typeof tokenOrContent === 'string');

  if (tokenOrContentContent) {
    const content = tokenOrContent; ///

    if (false) {

    } else if (commentType === singleLineCommentType) {
      const hyperlinkSingleLineCommentTokenPosition = HyperlinkSingleLineCommentToken.positionWithinContent(content);

      if (hyperlinkSingleLineCommentTokenPosition > -1) {
        processHyperlinkSingleLineCommentToken(commentTokensOrRemainingContents, content)
      } else {
        const middleOfSingleLineCommentToken = MiddleOfSingleLineCommentToken.fromContent(content);

        commentTokensOrRemainingContents.push(middleOfSingleLineCommentToken);
      }
    } else if (commentType === multiLineCommentType) {
      const hyperlinkMultiLineCommentTokenPosition = HyperlinkMultiLineCommentToken.positionWithinContent(content);

      if (hyperlinkMultiLineCommentTokenPosition > -1) {
        processHyperlinkMultiLineCommentToken(commentTokensOrRemainingContents, content);
      } else {
        const endOfMultiLineCommentTokenPosition = EndOfMultiLineCommentToken.positionWithinContent(content);

        if (endOfMultiLineCommentTokenPosition > -1) {
          commentType = processEndOfMultiLineCommentToken(commentTokensOrRemainingContents, content);
        } else {
          const middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(content);

          commentTokensOrRemainingContents.push(middleOfMultiLineCommentToken);
        }
      }
    } else {
      const startOfSingleLineCommentTokenPosition = StartOfSingleLineCommentToken.positionWithinContent(content),
            startOfMultiLineCommentTokenPosition = StartOfMultiLineCommentToken.positionWithinContent(content);

      if ((startOfSingleLineCommentTokenPosition > -1) && (startOfMultiLineCommentTokenPosition > -1)) {
        if (false) {

        } else if (startOfSingleLineCommentTokenPosition < startOfMultiLineCommentTokenPosition) {
          commentType = processStartOfSingleLineCommentToken(commentTokensOrRemainingContents, content);
        } else if (startOfMultiLineCommentTokenPosition < startOfSingleLineCommentTokenPosition) {
          commentType = processStartOfMultiLineCommentToken(commentTokensOrRemainingContents, content);
        }
      } else if (startOfSingleLineCommentTokenPosition > -1) {
        commentType = processStartOfSingleLineCommentToken(commentTokensOrRemainingContents, content);
      } else if (startOfMultiLineCommentTokenPosition > -1) {
        commentType = processStartOfMultiLineCommentToken(commentTokensOrRemainingContents, content);
      } else {
        const remainingContent = content; ///

        commentTokensOrRemainingContents.push(remainingContent);
      }
    }
  } else {
    const token = tokenOrContent, ///
          tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      const commentTypeSingleLineCommentType = (commentType === singleLineCommentType);

      if (commentTypeSingleLineCommentType) {
        commentType = null;
      }
    }

    commentTokensOrRemainingContents.push(token);
  }

  return commentType;
}

function processStartOfSingleLineCommentToken(commentTokensOrRemainingContents, content) {
  let commentType = singleLineCommentType;  ///

  commentType = processStartOfCommentToken(StartOfSingleLineCommentToken, commentTokensOrRemainingContents, content, commentType);

  return commentType;
}

function processStartOfMultiLineCommentToken(commentTokensOrRemainingContents, content) {
  let commentType = multiLineCommentType; ///

  commentType = processStartOfCommentToken(StartOfMultiLineCommentToken, commentTokensOrRemainingContents, content, commentType);

  return commentType;
}

function processEndOfMultiLineCommentToken(commentTokensOrRemainingContents, content) {
  let commentType = null;

  commentType = processEndOfCommentToken(EndOfMultiLineCommentToken, EndOfMultiLineCommentToken, commentTokensOrRemainingContents, content, commentType);

  return commentType;
}

function processHyperlinkSingleLineCommentToken(commentTokensOrRemainingContents, content) {
  const commentType = singleLineCommentType;  ///

  processHyperlinkCommentToken(HyperlinkSingleLineCommentToken, MiddleOfSingleLineCommentToken, commentTokensOrRemainingContents, content, commentType);
}

function processHyperlinkMultiLineCommentToken(commentTokensOrRemainingContents, content) {
  const commentType = multiLineCommentType;  ///

  processHyperlinkCommentToken(HyperlinkMultiLineCommentToken, MiddleOfMultiLineCommentToken, commentTokensOrRemainingContents, content, commentType);
}

function processStartOfCommentToken(StartOfCommentToken, commentTokensOrRemainingContents, content, commentType) {
  const startOfSingleLineCommentToken = StartOfCommentToken.fromWithinContent(content),
        position = StartOfCommentToken.positionWithinContent(content),  ///
        contentLength = startOfSingleLineCommentToken.getContentLength(),
        left = position,  ///
        right = position + contentLength,
        leftContent = content.substring(0, left),
        rightContent = content.substring(right),
        leftContentLength = leftContent.length,
        rightContentLength = rightContent.length;

  if (leftContentLength > 0) {
    const remainingContent = leftContent; ///

    commentTokensOrRemainingContents.push(remainingContent);
  }

  commentTokensOrRemainingContents.push(startOfSingleLineCommentToken);

  if (rightContentLength > 0) {
    const tokenOrContent = rightContent;  ///

    commentType = processCommentTokens(commentTokensOrRemainingContents, tokenOrContent, commentType);
  }

  return commentType;
}

function processEndOfCommentToken(EndOfCommentToken, MiddleOfCommentToken, commentTokensOrRemainingContents, content, commentType) {
  const endOfMultiLineCommentToken = EndOfCommentToken.fromWithinContent(content),
        position = EndOfCommentToken.positionWithinContent(content),
        contentLength = endOfMultiLineCommentToken.getContentLength(),
        left = position,
        right = position + contentLength,
        leftContent = content.substring(0, left),
        rightContent = content.substring(right),
        leftContentLength = leftContent.length,
        rightContentLength = rightContent.length;

  if (leftContentLength > 0) {
    const content = leftContent,  ///
          middleOfMultiLineCommentToken = MiddleOfCommentToken.fromContent(content);

    commentTokensOrRemainingContents.push(middleOfMultiLineCommentToken);
  }

  commentTokensOrRemainingContents.push(endOfMultiLineCommentToken);

  if (rightContentLength > 0) {
    const tokenOrContent = rightContent; ///

    commentType = processCommentTokens(commentTokensOrRemainingContents, tokenOrContent, commentType);
  }

  return commentType;
}

function processHyperlinkCommentToken(HyperlinkCommentToken, MiddleOfCommentToken, commentTokensOrRemainingContents, content, commentType) {
  const hyperlinkCommentToken = HyperlinkCommentToken.fromWithinContent(content),
        position = HyperlinkCommentToken.positionWithinContent(content),  ///
        contentLength = hyperlinkCommentToken.getContentLength(),
        left = position,
        right = position + contentLength,
        leftContent = content.substring(0, left),
        rightContent = content.substring(right),
        leftContentLength = leftContent.length,
        rightContentLength = rightContent.length;

  if (leftContentLength > 0) {
    const content = leftContent,  ///
          middleOfCommentToken = MiddleOfCommentToken.fromContent(content);

    commentTokensOrRemainingContents.push(middleOfCommentToken);
  }

  commentTokensOrRemainingContents.push(hyperlinkCommentToken);

  if (rightContentLength > 0) {
    const tokenOrContent = rightContent;  ///

    processCommentTokens(commentTokensOrRemainingContents, tokenOrContent, commentType);
  }
}
