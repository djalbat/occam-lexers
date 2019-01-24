'use strict';

const types = require('../../types'),
      SignificantToken = require('../significant');

const { urlType } = types;

class URLToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(URLToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(URLToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(URLToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(URLToken, content); }
}

const type = urlType, ///
      regularExpression = /http:\/\/[-_\w]+(?:\.[-_\w]+)+(?:\/[-_\w]+)*\/?(?:\?(?:\w+(?:=\w+)?&)*(?:\w+(?:=\w+)?))?/;

Object.assign(URLToken, {
  type,
  regularExpression
});

module.exports = URLToken;
