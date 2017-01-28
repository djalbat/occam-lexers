'use strict';

class Token {
  constructor(content, line, html) {
    this.content = content;
    this.line = line;
    this.html = html;
  }

  getContent() {
    return this.content;
  }
  
  getLine() {
    return this.line;
  }

  getHTML() {
    return this.html;
  }
  
  getLength() {
    return this.content.length; ///
  }

  replaceWith(token) {
    var tokens = this.line.getTokens(),
        index = tokens.indexOf(this);

    tokens.splice(index, 1, token);
  }

  // static trimmedToPosition(token, position) {
  //   var tokenTrimmedToPosition = null,
  //       tokenLength = token.getLength();
  //
  //   if (position !== tokenLength) {
  //     var content = token.getContent(),
  //         line = token.getLine();
  //
  //     content = content.substring(position);
  //
  //     tokenTrimmedToPosition = Token.fromContentAndLine(content, line);
  //   }
  //
  //   return tokenTrimmedToPosition;
  // }
  //
  // static trimmedFromPosition(token, position) {
  //   var tokenTrimmedFromPosition = null;
  //
  //   if (position !== 0) {
  //     var content = token.getContent(),
  //         line = token.getLine();
  //
  //     content = content.substring(0, position);
  //
  //     tokenTrimmedFromPosition.Token.fromContentAndLine(content, line);
  //   }
  //
  //   return tokenTrimmedFromPosition;
  // }

  static htmlFromContent(content) {
    var html = content; ///

    html = Token.sanitiseHTML(html);  ///

    return html;
  }

  static fromContentAndLine(content, line, Class = Token) {
    var html = Class.htmlFromContent(content),
        token = new Class(content, line, html);

    return token;
  }

  static sanitiseHTML(html) {
    var sanitisedHTML = html.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

    return sanitisedHTML;
  }
}

module.exports = Token;
