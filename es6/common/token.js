'use strict';

class Token {
  constructor(content, line, updateHTML = true) {
    this.content = content;
    this.line = line;

    this.html = undefined;  ///

    if (updateHTML) {
      this.updateHTML();
    }
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

  setContent(content) {
    this.content = content;

    this.updateHTML();
  }

  setLine(line) {
    this.line = line;
  }

  setHTML(html) {
    this.html = html;
  }

  getTrimmedContent(startPosition, endPosition) {
    var trimmedContent = this.content.substring(startPosition, endPosition);

    return trimmedContent;
  }

  trimContentToPosition(position) {
    this.content = this.content.substr(position);

    this.updateHTML();
  }

  trimContentFromPosition(position) {
    this.content = this.content.substr(0, position);

    this.updateHTML();
  }

  replaceWith(token) {
    var tokens = this.line.getTokens(),
        index = tokens.indexOf(this);

    tokens.splice(index, 1, token);
  }

  updateHTML() {
    var html = this.content;  ///

    this.html = Token.sanitiseHTML(html);
  }

  static trimmedToPosition(token, position) {
    var tokenTrimmedToPosition = null;

    if (position !== 0) {
      tokenTrimmedToPosition = token.clone().trimContentToPosition(position); ///
    }

    return tokenTrimmedToPosition;
  }

  static trimmedFromPosition(token, position) {
    var tokenTrimmedFromPosition = null,
        tokenLength = token.getLength();

    if (position !== tokenLength) {
      tokenTrimmedFromPosition = token.clone().trimContentFromPosition(position); ///
    }

    return tokenTrimmedFromPosition;
  }

  static sanitiseHTML(html) {
    var sanitisedHTML = html.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

    return sanitisedHTML;
  }
}

module.exports = Token;
