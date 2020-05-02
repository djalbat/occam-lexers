"use strict";

import NonSignificantToken from "../../token/nonSignificant";

import { brokenCommentType } from "../../types";

export default class BrokenCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(BrokenCommentToken, startPosition, endPosition); }

  static match(content) { return NonSignificantToken.match(BrokenCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(BrokenCommentToken, content); }
}

const type = brokenCommentType,  ///
      regularExpression = /^\//;

Object.assign(BrokenCommentToken, {
  type,
  regularExpression
});
