'use strict';

var util = require('../util');

class CommonLine {
  constructor(content) {
    this.content = content;
    
    this.tokens = [];
    
    this.html = undefined;  ///
  }

  getContent() {
    return this.content;
  }

  getTokens() {
    return this.tokens;
  }

  getHTML() {
    return this.html;
  }

  setContent(content) {
    this.content = content;
  }
  
  setTokens(tokens) {
    this.tokens = tokens;
  }

  pushToken(token) {
    this.tokens.push(token);
  }

  replaceToken(oldToken, newToken) {
    var oldTokenIndex = util.indexOf(this.tokens, oldToken),
        newTokens = [newToken];

    util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
  }

  update() {
    this.html = '';

    this.tokens.forEach(function(token) {
      var tokenHTML = token.html();

      this.html += tokenHTML;
    }.bind(this));
  }
}

module.exports = CommonLine;
