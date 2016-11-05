'use strict';

var CommonLine = require('../common/line'),
    NonSignificantTokens = require('./nonSignificantTokens');

class Line extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(content, context, rules, Line, NonSignificantTokens); }
}

module.exports = Line;
