'use strict';

class Token {
  constructor(content, line) {
    this.content = content;
    this.line = line;
  }

  getContent(startPosition, endPosition) {
    var content = ((startPosition === undefined) || (endPosition === undefined)) ?
          this.content :
            this.content.substring(startPosition, endPosition);

    return content;
  }
  
  getLine() {
    return this.line;
  }
  
  getLength() {
    return this.content.length; ///
  }
  
  setContent(content) {
    this.content = content;
  }
  
  trimFromEndPosition(endPosition) {
    this.content = this.content.substr(endPosition);
  }

  trimToStartPosition(startPosition) {
    this.content = this.content.substr(0, startPosition);
  }

  static trimmedFromEndPosition(token, endPosition) {
    if (endPosition === this.length) {
      return null;
    }

    var clonedToken = token.clone(),
        tokenWithStartTrimmed = clonedToken;  ///

    tokenWithStartTrimmed.trimFromEndPosition(endPosition);

    return tokenWithStartTrimmed;
  }

  static trimmedToStartPosition(token, startPosition) {
    if (startPosition === 0) {
      return null;
    }

    var clonedToken = token.clone(),
        tokenWithEndTrimmed = clonedToken;  ///

    tokenWithEndTrimmed.trimToStartPosition(startPosition);

    return tokenWithEndTrimmed;
  }
}

module.exports = Token;
