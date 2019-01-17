'use strict';

const middleType = 'middle',
      commentType = 'comment',
      multiLineType = `multi-line`,
      singleLineType =`single-line`,
      hyperlinkType = 'hyperlink',
      endOfLineType = 'end-of-line',
      whitespaceType = 'whitespace',
      stringLiteralType = 'string-literal',
      regularExpressionType = 'regular-expression',
      multiLineCommentType = `${multiLineType} ${commentType}`,
      singleLineCommentType =`${singleLineType} ${commentType}`,
      middleOfMultiLineCommentType = `${middleType} ${multiLineCommentType}`,
      middleOfSingleLineCommentType = `${middleType} ${singleLineCommentType}`,
      hyperlinkInMultiLineCommentType = `${hyperlinkType} ${multiLineCommentType}`,
      hyperlinkInSingleLineCommentType = `${hyperlinkType} ${singleLineCommentType}`;

module.exports = {
	middleType,
	commentType,
	multiLineType,
	singleLineType,
	hyperlinkType,
	endOfLineType,
	whitespaceType,
	stringLiteralType,
	regularExpressionType,
	multiLineCommentType,
	singleLineCommentType,
	middleOfMultiLineCommentType,
	middleOfSingleLineCommentType,
	hyperlinkInMultiLineCommentType,
	hyperlinkInSingleLineCommentType
};
