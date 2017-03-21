'use strict';

const Token = require('../token');

class SignificantToken extends Token {
  constructor(content, line, html, type) {
    super(content, line, html);
    
    this.type = type;
  }

  getType() {
    return this.type;
  }

  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, SignificantToken) }

  static clone(token, startPosition, endPosition, Class) { return Token.clone(token, startPosition, endPosition, Class) }

  static fromContentAndLine(content, line, Class = SignificantToken) {
    const type = Class.type,
          html = Class.htmlFromContentAndType(content, type),
          significantToken = new Class(content, line, html, type);

    return significantToken;
  }

  static fromToken(token, Class = SignificantToken) { return Token.fromToken(token, Class); }

  static fromContentLineAndType(content, line, type) {
    const html = SignificantToken.htmlFromContentAndType(content, type),
          significantToken = new SignificantToken(content, line, html, type);

    return significantToken;
  }

  static htmlFromContentAndType(content, type) {
    let innerHTML = content; ///
    
    const className = type; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    const html = `<span class="${className}">${innerHTML}</span>`;

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
