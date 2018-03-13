'use strict';

const commentType = 'comment',
      endOfLineType = 'endOfLine',
      whitespaceType = 'whitespace',
      stringLiteralType = 'stringLiteral',
      regularExpressionType = 'regularExpression',
      multiLineCommentType = `multiLine ${commentType}`,
      singleLineCommentType =`singleLine ${commentType}`,
      hyperlinkMultiLineCommentType = `hyperlink ${multiLineCommentType}`,
      hyperlinkSingleLineCommentType = `hyperlink ${singleLineCommentType}`;

const types = {
  endOfLineType: endOfLineType,
  whitespaceType: whitespaceType,
  stringLiteralType: stringLiteralType,
  regularExpressionType: regularExpressionType,
  multiLineCommentType: multiLineCommentType,
  singleLineCommentType: singleLineCommentType,
  hyperlinkMultiLineCommentType: hyperlinkMultiLineCommentType,
  hyperlinkSingleLineCommentType: hyperlinkSingleLineCommentType
};

module.exports = types;
