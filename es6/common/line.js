'use strict';

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

class Line {
  constructor(content, number) {
    this.content = content;
    this.number = number;

    this.tokens = undefined;
    this.inComment = undefined;
    this.previousNumber = undefined;

    this.removed = false;
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

  getPreviousNumber() {
    return this.previousNumber;
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

  isRemoved() {
    return this.removed;
  }

  remove() {
    this.removed = true;
  }

  setNumber(number) {
    this.number = number;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  setInComment(inComment) {
    this.inComment = inComment;
  }

  setPreviousNumber(previousNumber) {
    this.previousNumber = previousNumber;
  }

  pushToken(token) {
    this.tokens.push(token);
  }
  
  static fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
    var lineNumber = context.getLineNumber(),
        number = lineNumber,  ///
        line = new Line(content, number),
        tokensOrContents = [content],
        inComment = CommentTokens.pass(tokensOrContents, line, context),
        previousNumber = null;

    StringTokens.pass(tokensOrContents, line);
    WhitespaceTokens.pass(tokensOrContents, line);

    var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

    line.setTokens(tokens);

    line.setInComment(inComment);

    line.setPreviousNumber(previousNumber);

    return line;
  }
}

module.exports = Line;
