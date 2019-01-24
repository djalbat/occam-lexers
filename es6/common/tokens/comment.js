'use strict';

const types = require('../types'),
      tokens = require('../tokens'),
      EndOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/endOf'),
      StartOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/startOf'),
      MiddleOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/middleOf'),
      StartOfSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/startOf'),
      MiddleOfSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/middleOf');

const { stringLiteralType, multiLineType, singleLineType, multiLineCommentType, singleLineCommentType } = types,
      { tokeniseByCallback } = tokens;

function tokenise(tokensOrContents) {
  let commentType = null;

  tokeniseByCallback(tokensOrContents, function(tokenOrContent) {
    const commentTokensOrRemainingContents = [];

    commentType = tokeniseTokenOrContent(tokenOrContent, commentTokensOrRemainingContents, commentType);

    const tokensOrRemainingContents = commentTokensOrRemainingContents; ///

    return tokensOrRemainingContents;
  });
}

module.exports = {
  tokenise
};

function tokeniseTokenOrContent(tokenOrContent, commentTokensOrRemainingContents, commentType) {
  const tokenOrContentContent = isTokenOrContentContent(tokenOrContent);

  if (tokenOrContentContent) {
    const content = tokenOrContent; ///

    commentType = tokeniseContent(content, commentTokensOrRemainingContents, commentType);
  } else {
    const token = tokenOrContent, ///
          tokenStringLiteralToken = isTokenStringLiteralToken(token);

    if (false) {
      ///
    } else if (tokenStringLiteralToken) {
      const stringLiteralToken = token;  ///

      commentType = tokeniseStringLiteralToken(stringLiteralToken, commentTokensOrRemainingContents, commentType);
    } else {
      commentType = tokeniseToken(token, commentTokensOrRemainingContents, commentType);
    }
  }

  return commentType;
}

function isTokenOrContentContent(tokenOrContent) {
  const tokenOrContentString = (typeof tokenOrContent === 'string'),
        tokenOrContentContent = tokenOrContentString; ///

  return tokenOrContentContent;
}

function isTokenStringLiteralToken(token) {
  const type = token.getType(),
        typeStringLiteralType = (type === stringLiteralType),
        tokenStringLiteralToken = typeStringLiteralType; ///

  return tokenStringLiteralToken;
}

function isCommentTypeSingleLineCommentType(commentType) {
  let commentTypeSingleLineCommentType = false;

  if (commentType !== null) {
    const commentTypeIncludesSingleLineType = commentType.includes(singleLineType);

    commentTypeSingleLineCommentType = commentTypeIncludesSingleLineType;
  }

  return commentTypeSingleLineCommentType;
}

function isCommentTypeMultiLineCommentType(commentType) {
  let commentTypeMultiLineCommentType = false;

  if (commentType !== null) {
    const commentTypeIncludesMultiLineType = commentType.includes(multiLineType);

    commentTypeMultiLineCommentType = commentTypeIncludesMultiLineType;
  }

  return commentTypeMultiLineCommentType;
}

function tokeniseToken(token, commentTokensOrRemainingContents, commentType) {
  const tokenEndOfLineToken = token.isEndOfLineToken();

  if (tokenEndOfLineToken) {
    const commentTypeSingleLineCommentType = isCommentTypeSingleLineCommentType(commentType);

    if (commentTypeSingleLineCommentType) {
      commentType = null;
    }
  }

  commentTokensOrRemainingContents.push(token);

  return commentType;
}

function tokeniseContent(content, commentTokensOrRemainingContents, commentType) {
  const commentTypeSingleLineCommentType = isCommentTypeSingleLineCommentType(commentType),
        commentTypeMultiLineCommentType = isCommentTypeMultiLineCommentType(commentType);

  if (false) {

  } else if (commentTypeSingleLineCommentType) {
    const middleOfSingleLineCommentToken = MiddleOfSingleLineCommentToken.fromContent(content);

    commentTokensOrRemainingContents.push(middleOfSingleLineCommentToken);
  } else if (commentTypeMultiLineCommentType) {
    const endOfMultiLineCommentTokenPosition = EndOfMultiLineCommentToken.positionWithinContent(content);

    if (endOfMultiLineCommentTokenPosition > -1) {
      commentType = tokeniseEndOfMultiLineCommentToken(commentTokensOrRemainingContents, content);
    } else {
      const middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(content);

      commentTokensOrRemainingContents.push(middleOfMultiLineCommentToken);
    }
  } else {
    const startOfSingleLineCommentTokenPosition = StartOfSingleLineCommentToken.positionWithinContent(content),
          startOfMultiLineCommentTokenPosition = StartOfMultiLineCommentToken.positionWithinContent(content);

    if ((startOfSingleLineCommentTokenPosition > -1) && (startOfMultiLineCommentTokenPosition > -1)) {
      if (false) {

      } else if (startOfSingleLineCommentTokenPosition < startOfMultiLineCommentTokenPosition) {
        commentType = tokeniseStartOfSingleLineCommentToken(commentTokensOrRemainingContents, content);
      } else if (startOfMultiLineCommentTokenPosition < startOfSingleLineCommentTokenPosition) {
        commentType = tokeniseStartOfMultiLineCommentToken(commentTokensOrRemainingContents, content);
      }
    } else if (startOfSingleLineCommentTokenPosition > -1) {
      commentType = tokeniseStartOfSingleLineCommentToken(commentTokensOrRemainingContents, content);
    } else if (startOfMultiLineCommentTokenPosition > -1) {
      commentType = tokeniseStartOfMultiLineCommentToken(commentTokensOrRemainingContents, content);
    } else {
      const remainingContent = content; ///

      commentTokensOrRemainingContents.push(remainingContent);
    }
  }

  return commentType;
}

function tokeniseStringLiteralToken(stringLiteralToken, commentTokensOrRemainingContents, commentType) {
  const commentTypeSingleLineCommentType = isCommentTypeSingleLineCommentType(commentType),
        commentTypeMultiLineCommentType = isCommentTypeMultiLineCommentType(commentType);

  if (false) {

  } else if (commentTypeSingleLineCommentType) {
    const middleOfSingleLineCommentToken = MiddleOfSingleLineCommentToken.fromStringLiteralToken(stringLiteralToken);

    commentTokensOrRemainingContents.push(middleOfSingleLineCommentToken);
  } else if (commentTypeMultiLineCommentType) {
    const content = stringLiteralToken.getContent(),
        endOfMultiLineCommentTokenPosition = EndOfMultiLineCommentToken.positionWithinContent(content);

    if (endOfMultiLineCommentTokenPosition > -1) {
      commentType = tokeniseEndOfMultiLineCommentToken(commentTokensOrRemainingContents, content);
    } else {
      const middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(content);

      commentTokensOrRemainingContents.push(middleOfMultiLineCommentToken);
    }
  } else {
    commentTokensOrRemainingContents.push(stringLiteralToken);
  }

  return commentType;
}

function tokeniseStartOfSingleLineCommentToken(commentTokensOrRemainingContents, content) {
  let commentType = singleLineCommentType;  ///

  commentType = tokeniseStartOfCommentToken(StartOfSingleLineCommentToken, commentTokensOrRemainingContents, content, commentType);

  return commentType;
}

function tokeniseStartOfMultiLineCommentToken(commentTokensOrRemainingContents, content) {
  let commentType = multiLineCommentType; ///

  commentType = tokeniseStartOfCommentToken(StartOfMultiLineCommentToken, commentTokensOrRemainingContents, content, commentType);

  return commentType;
}

function tokeniseEndOfMultiLineCommentToken(commentTokensOrRemainingContents, content) {
  let commentType = null;

  commentType = tokeniseEndOfCommentToken(EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken, commentTokensOrRemainingContents, content, commentType);

  return commentType;
}

function tokeniseStartOfCommentToken(StartOfCommentToken, commentTokensOrRemainingContents, content, commentType) {
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

    commentType = tokeniseTokenOrContent(tokenOrContent, commentTokensOrRemainingContents, commentType);
  }

  return commentType;
}

function tokeniseEndOfCommentToken(EndOfCommentToken, MiddleOfCommentToken, commentTokensOrRemainingContents, content, commentType) {
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

    commentType = tokeniseTokenOrContent(tokenOrContent, commentTokensOrRemainingContents, commentType);
  }

  return commentType;
}


