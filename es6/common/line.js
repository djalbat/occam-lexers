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
  
  pushToken(token) {
    this.tokens.push(token);
  }
  
  replaceToken(oldToken, newToken) {
    var oldTokenIndex = util.indexOf(this.tokens, oldToken),
        newTokens = [newToken];

    util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
  }

  static fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
    var line = new Line(content),
        tokens = [];

    if (content !== '') {
      var tokensOrContents = [content];

      CommentTokens.pass(tokensOrContents, line, context);
      StringTokens.pass(tokensOrContents, line);
      WhitespaceTokens.pass(tokensOrContents, line);

      tokens = SignificantTokens.pass(tokensOrContents, line, rules);
    }

    line.setTokens(tokens);

    return line;
  }
}

module.exports = Line;
