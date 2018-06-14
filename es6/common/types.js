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
