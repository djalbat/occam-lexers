'use strict';

class SignificantContentToken {
  constructor(content) {
    this.content = content;
  }
  
  getContent() {
    return this.content;
  }
  
  static fromContent(content) {
    var significantContentToken = new SignificantContentToken(content);
    
    return significantContentToken;
  }
}

module.exports = SignificantContentToken;
