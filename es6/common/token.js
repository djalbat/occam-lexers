'use strict';

class Token {
  constructor(content, line) {
    this.content = content;
    this.line = line;
  }

  getContent() {
    return this.content;
  }
  
  getLine() {
    return this.line;
  }
  
  getLength() {
    return this.content.length; ///
  }

  getTrimmedContent(startPosition, endPosition) {
    var trimmedContent = this.content.substring(startPosition, endPosition);

    return trimmedContent;
  }

  setContent(content) {
    this.content = content;
  }
  
  trimContentToPosition(position) {
    this.content = this.content.substr(0, position);
  }

  trimContentFromPosition(position) {
    this.content = this.content.substr(position);
  }

  replaceWith(token) {
    var tokens = this.line.getTokens(),
        index = tokens.indexOf(this);

    tokens.splice(index, 1, token);
  }

  static trimmedToPosition(token, position) {
    if (position === 0) {
      return null;
    }

    var clonedToken = token.clone(),
        tokenWithEndTrimmed = clonedToken;  ///

    tokenWithEndTrimmed.trimContentToPosition(position);

    return tokenWithEndTrimmed;
  }
  static trimmedFromPosition(token, position) {
    var tokenLength = token.getLength();

    if (position === tokenLength) {
      return null;
    }

    var clonedToken = token.clone(),
        tokenWithStartTrimmed = clonedToken;  ///

    tokenWithStartTrimmed.trimContentFromPosition(position);

    return tokenWithStartTrimmed;
  }

  static sanitiseHTML(html) {
    var sanitisedHTML = html.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

    return sanitisedHTML;
  }
}

module.exports = Token;
