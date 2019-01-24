'use strict';

const middleType = 'middle',
      commentType = 'comment',
      multiLineType = `multi-line`,
      singleLineType =`single-line`,
      endOfLineType = 'end-of-line',
      whitespaceType = 'whitespace',
      stringLiteralType = 'string-literal',
      regularExpressionType = 'regular-expression',
      multiLineCommentType = `${multiLineType} ${commentType}`,
      singleLineCommentType =`${singleLineType} ${commentType}`,
      middleOfMultiLineCommentType = `${middleType} ${multiLineCommentType}`,
      middleOfSingleLineCommentType = `${middleType} ${singleLineCommentType}`;

module.exports = {
	middleType,
	commentType,
	multiLineType,
	singleLineType,
	endOfLineType,
	whitespaceType,
	stringLiteralType,
	regularExpressionType,
	multiLineCommentType,
	singleLineCommentType,
	middleOfMultiLineCommentType,
	middleOfSingleLineCommentType
};
