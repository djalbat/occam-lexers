"use strict";

export const typeType = "type";
export const nameType = "name";
export const commentType = "comment";
export const endOfLineType = "end-of-line";
export const whitespaceType = "whitespace";
export const stringLiteralType = "string-literal";
export const endOfLineCommentType = `${endOfLineType} ${commentType}`;
export const singleLineCommentType = `single-line ${commentType}`;
export const regularExpressionType = "regular-expression";
export const endOfMultiLineCommentType = `end-of-multi-line ${commentType}`;
export const startOfMultiLineCommentType = `start-of-multi-line ${commentType}`;
export const middleOfMultiLineCommentType = `middle-of-multi-line ${commentType}`;

export default {
  typeType,
  nameType,
  commentType,
  endOfLineType,
  whitespaceType,
  stringLiteralType,
  endOfLineCommentType,
  singleLineCommentType,
  regularExpressionType,
  endOfMultiLineCommentType,
  startOfMultiLineCommentType,
  middleOfMultiLineCommentType
};
