'use strict';

class ParseableToken {
  constructor(content) {
    this.content = content;
  }
  
  getContent() {
    return this.content;
  }
}

module.exports = ParseableToken;
