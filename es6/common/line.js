'use strict';

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

class Line {
  constructor(content, number) {
    this.content = content;
    this.number = number;

    this.tokens = undefined;
  }

  getContent() {
    return this.content;
  }

  getNumber() {
    return this.number;
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

  setNumber(number) {
    this.number = number;
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

  static fromContentAndNumber(Line, content, number, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
    var line = new Line(content, number),
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
