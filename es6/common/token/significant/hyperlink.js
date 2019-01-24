'use strict';

const types = require('../../types'),
      SignificantToken = require('../significant');

const { hyperlinkType } = types;

class HyperlinkToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(HyperlinkToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(HyperlinkToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(HyperlinkToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(HyperlinkToken, content); }
}

const type = hyperlinkType, ///
      regularExpression = /http:\/\/[-_\w]+(?:\.[-_\w]+)+(?:\/[-_\w]+)*\/?(?:\?(?:\w+(?:=\w+)?&)*(?:\w+(?:=\w+)?))?/;

Object.assign(HyperlinkToken, {
  type,
  regularExpression
});

module.exports = HyperlinkToken;
