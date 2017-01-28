'use strict';

var SignificantToken = require('../../common/token/significant');

class EndOfLineToken extends SignificantToken {
  static htmlFromContent(content) {
    var html = '';

    return html;
  }

  static fromLine(line) {
    var content = '',
        endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);
    
    return endOfLineToken;
  }
}

EndOfLineToken.type = 'endOfLine';

module.exports = EndOfLineToken;
