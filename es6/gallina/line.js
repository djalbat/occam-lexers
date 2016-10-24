'use strict';

var CommonLine = require('../common/line'),
    NonSignificantTokens = require('./nonSignificantTokens');

class Line extends CommonLine {
  static fromContent(content, context, rules) {
    var line = new Line(),
        tokens = super.tokensFromContent(content, context, line, rules, NonSignificantTokens);

    line.setTokens(tokens);

    return line;
  }
}

module.exports = Line;
