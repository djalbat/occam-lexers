'use strict';

const middleType = 'middle',
      commentType = 'comment',
      multiLineType = `multiLine`,
      singleLineType =`singleLine`,
      hyperlinkType = 'hyperlink',
      endOfLineType = 'endOfLine',
      whitespaceType = 'whitespace',
      stringLiteralType = 'stringLiteral',
      regularExpressionType = 'regularExpression',
      multiLineCommentType = `${multiLineType} ${commentType}`,
      singleLineCommentType =`${singleLineType} ${commentType}`,
      middleOfMultiLineCommentType = `${middleType} ${multiLineCommentType}`,
      middleOfSingleLineCommentType = `${middleType} ${singleLineCommentType}`,
      hyperlinkInMultiLineCommentType = `${hyperlinkType} ${multiLineCommentType}`,
      hyperlinkInSingleLineCommentType = `${hyperlinkType} ${singleLineCommentType}`;

const types = {
  middleType: middleType,
  commentType: commentType,
  multiLineType: multiLineType,
  singleLineType: singleLineType,
  hyperlinkType: hyperlinkType,
  endOfLineType: endOfLineType,
  whitespaceType: whitespaceType,
  stringLiteralType: stringLiteralType,
  regularExpressionType: regularExpressionType,
  multiLineCommentType: multiLineCommentType,
  singleLineCommentType: singleLineCommentType,
  middleOfMultiLineCommentType: middleOfMultiLineCommentType,
  middleOfSingleLineCommentType: middleOfSingleLineCommentType,
  hyperlinkInMultiLineCommentType: hyperlinkInMultiLineCommentType,
  hyperlinkInSingleLineCommentType: hyperlinkInSingleLineCommentType
};

module.exports = types;
