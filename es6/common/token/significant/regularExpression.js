'use strict';

const types = require('../../types'),
      SignificantToken = require('../significant');

const { regularExpressionType } = types;

class RegularExpressionToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(RegularExpressionToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(RegularExpressionToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(RegularExpressionToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(RegularExpressionToken, content); }
}

const type = regularExpressionType, ///
      regularExpression = /\/(?:\\.|[^\/])*\//;

Object.assign(RegularExpressionToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = RegularExpressionToken;
