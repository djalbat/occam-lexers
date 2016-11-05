'use strict';

class Token {
  constructor(content, line) {
    this.content = content;
    this.line = line;
  }

  getContent(startPosition, endPosition) {
    var content = ((startPosition === undefined) || (endPosition === undefined)) ?
          this.content :
            this.content.substr(startPosition, endPosition);

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
  
  trimFromStartPosition(startPosition) {
    this.content = this.content.substr(startPosition);
  }

  trimToEndPosition(endPosition) {
    this.content = this.content.substr(0, endPosition);
  }

  static withStartTrimmed(token, startPosition) {
    var clonedToken = token.clone(),
        tokenWithStartTrimmed = clonedToken;  ///

    tokenWithStartTrimmed.trimFromStartPosition(startPosition);

    return tokenWithStartTrimmed;
  }

  static withEndTrimmed(token, endPosition) {
    var clonedToken = token.clone(),
        tokenWithEndTrimmed = clonedToken;  ///

    tokenWithEndTrimmed.trimToEndPosition(endPosition);

    return tokenWithEndTrimmed;
  }
}

module.exports = Token;
