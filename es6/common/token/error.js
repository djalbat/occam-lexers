'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  clone(startPosition, endPosition) { return Token.clone(this, startPosition, endPosition, ErrorToken); }

  static fromContentAndLine(content, line) { return Token.fromContentAndLine(content, line, ErrorToken); }

  static fromToken(token) {
    var content = token.getContent(),
        line = token.getLine(),
        errorToken = Token.fromContentAndLine(content, line, ErrorToken);

    return errorToken;
  }

  static htmlFromContent(content) {
    var innerHTML = content; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    var html = `<span class="error">${innerHTML}</span>`;

    return html;
  }
}

module.exports = ErrorToken;
