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

  static clone(token, startPosition, endPosition, Class = SignificantToken) { return Token.clone(token, startPosition, endPosition, Class) }

  static fromContentLineAndType(content, line, type, Class = SignificantToken) {
    const html = Class.htmlFromContentAndType(content, type),
          significantToken = new Class(content, line, html, type);

    return significantToken;
  }

  static htmlFromContentAndType(content, type) {
    let innerHTML = content; ///
    
    const className = type; ///

    innerHTML = Token.sanitiseHTML(innerHTML);

    const html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }

  static fromToken(token, Class = SignificantToken) {
    const content = token.getContent(),
          line = token.getLine(),
          type = token.getType();

    token = Class.fromContentLineAndType(content, line, type, Class);

    return token;
  }

  static sanitiseHTML(html) { return Token.sanitiseHTML(html); }
}

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
