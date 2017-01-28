'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  toPosition(position) { return Token.toPosition(this, position, ErrorToken) }

  fromPosition(position) { return Token.fromPosition(this, position, ErrorToken) }

  static fromContentAndLine(content, line) { return Token.fromContentAndLine(content, line, ErrorToken); }

  static htmlFromContent(content) {
    var innerHTML = content, ///
        className = 'error'; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    var html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }
}

module.exports = ErrorToken;
