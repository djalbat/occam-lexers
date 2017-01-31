'use strict';

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

class Line {
  constructor(content, number) {
    this.content = content;
    this.number = number;

    this.tokens = undefined;
    this.inComment = undefined;
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

  isInComment() {
    return this.inComment;
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

  setInComment(inComment) {
    this.inComment = inComment;
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
    var lineNumber = context.getLineNumber(),
        number = lineNumber,  ///
        line = new Line(content, number),
        tokensOrContents = [content],
        inComment = CommentTokens.pass(tokensOrContents, line, context);

    StringTokens.pass(tokensOrContents, line);
    WhitespaceTokens.pass(tokensOrContents, line);

    var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

    line.setTokens(tokens);

    line.setInComment(inComment);

    return line;
  }
}

module.exports = Line;
