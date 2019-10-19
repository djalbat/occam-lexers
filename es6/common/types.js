'use strict';

const typeType = 'type',
      nameType = 'name',
      commentType = 'comment',
      endOfLineType = 'end-of-line',
      whitespaceType = 'whitespace',
      stringLiteralType = 'string-literal',
      brokenCommentType = 'broken-c0mment', ///
      regularExpressionType = 'regular-expression',
      brokenStringLiteralType = 'broken-string-literal',
      singleLineCommentType = `single-line ${commentType}`,
      endOfMultiLineCommentType = `end-of-multi-line ${commentType}`,
      startOfMultiLineCommentType = `start-of-multi-line ${commentType}`,
      middleOfMultiLineCommentType = `middle-of-multi-line ${commentType}`;

module.exports = {
  typeType,
  nameType,
	commentType,
  endOfLineType,
	whitespaceType,
	stringLiteralType,
  brokenCommentType,
	regularExpressionType,
  brokenStringLiteralType,
  singleLineCommentType,
  endOfMultiLineCommentType,
  startOfMultiLineCommentType,
  middleOfMultiLineCommentType
};
