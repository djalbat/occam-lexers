'use strict';

var util = require('../util');

class Line {
  constructor() {
    this.tokens = undefined;  ///
  }

  getTokens() {
    return this.tokens;
  }

  getHTML() {
    var html = this.tokens.reduce(function(html, token) {
      var tokenHTML = token.getHTML();
      
      html += tokenHTML;
      
      return html;
    }, '');
    
    html += '\n';
    
    return html;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }
  
  replaceToken(oldToken, newToken) {
    var oldTokenIndex = util.indexOf(this.tokens, oldToken),
        newTokens = [newToken];

    util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
  }
}

module.exports = Line;
