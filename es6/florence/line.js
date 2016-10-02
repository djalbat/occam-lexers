'use strict';

var CommonLine = require('../common/line'),
    SignificantTokens = require('../common/significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

class Line extends CommonLine {
  static fromContent(content, context, rules) {
    var line = new Line(),
        tokens;

    tokens = NonSignificantTokens.pass(content, context, line);

    tokens = SignificantTokens.pass(tokens, line, rules);

    line.setTokens(tokens);

    return line;
  }
}

module.exports = Line;
