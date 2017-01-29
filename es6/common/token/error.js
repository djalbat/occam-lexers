'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  clone(startPosition, endPosition) { return Token.clone(this, startPosition, endPosition, ErrorToken); }
  
  static fromContentAndLine(content, line) { return Token.fromContentAndLine(content, line, ErrorToken); }

  static fromToken(token) { return Token.fromToken(token, ErrorToken); }

  static htmlFromContent(content) {
    var innerHTML = content; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    var html = `<span class="error">${innerHTML}</span>`;

    return html;
  }
}

module.exports = ErrorToken;
