'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(content, line, html, type) {
    super(content, line, html);
    
    this.type = type;
  }

  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, SignificantToken) }

  getType() {
    return this.type;
  }

  static clone(token, startPosition, endPosition, Class) { return Token.clone(token, startPosition, endPosition, Class) }

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

  static htmlFromContentAndType(content, type) {
    var innerHTML = content, ///
        className = type; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    var html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }

  static sanitiseHTML(html) { return Token.sanitiseHTML(html); }
}

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
