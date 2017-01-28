'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(content, line, html, type) {
    super(content, line, html);
    
    this.type = type;
  }

  getType() {
    return this.type;
  }

  static htmlFromContentAndType(content, type) {
    var innerHTML = content, ///
        className = type; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    var html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }

  static fromContentAndLine(content, line, Class = SignificantToken) {
    var type = Class.type,
        html = Class.htmlFromContentAndType(content, type),
        significantToken = new Class(content, line, html, type);

    return significantToken;
  }

  static fromContentLineAndType(content, line, type) {
    var html = SignificantToken.htmlFromContentAndType(content, type),
        significantToken = new SignificantToken(content, line, html, type);

    return significantToken;
  }

  static sanitiseHTML(html) { return Token.sanitiseHTML(html); }
}

module.exports = SignificantToken;
