'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  static htmlFromContent(content) {
    var innerHTML = content, ///
        className = 'error'; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    var html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }

  static fromContentAndLine(content, line) { return Token.fromContentAndLine(content, line, ErrorToken); }
}

module.exports = ErrorToken;
