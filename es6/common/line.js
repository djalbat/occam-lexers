'use strict';

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

class Line {
  constructor(content) {
    this.content = content;

    this.tokens = undefined;
  }

  getContent() {
    return this.content;
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

  static fromContent(content, context, rules, Line, NonSignificantTokens) {
    var line = new Line(),
        nonSignificantTokenOrSignificantContents = NonSignificantTokens.pass(content, context, line),
        tokens = SignificantTokens.pass(nonSignificantTokenOrSignificantContents, line, rules);

    line.setTokens(tokens);

    return line;
  }
}

module.exports = Line;
