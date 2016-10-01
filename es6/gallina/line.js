'use strict';

var CommonLine = require('../common/line'),
    SpecialTokens = require('./specialTokens'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

class Line extends CommonLine {
  static fromContent(content, context) {
    var line = new Line(),
        tokens;
    
    tokens = NonSignificantTokens.pass(content, context, line);
    
    tokens = SpecialTokens.pass(tokens, line);

    tokens = SignificantTokens.pass(tokens, line);
    
    line.setTokens(tokens);
    
    return line;
  }
}

module.exports = Line;
