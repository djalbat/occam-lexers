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

  toPosition(position) { return SignificantToken.toPosition(this, position) }

  fromPosition(position) { return SignificantToken.fromPosition(this, position) }

  static toPosition(position, Class = SignificantToken) { return Token.toPosition(this, position, Class) }

  static fromPosition(position, Class = SignificantToken) { return Token.fromPosition(this, position, Class) }

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
