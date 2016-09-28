'use strict';

var FlorenceLine = require('./florence/line');

class FlorenceLexer {
  static linesFromContent(content, context) {
    var lines = CommonLexer.linesFromContent(content, context, FlorenceLine);
    
    return lines;
  }
}

module.exports = FlorenceLexer;
