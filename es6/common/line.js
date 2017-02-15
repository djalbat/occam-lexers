'use strict';

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

class Line {
  constructor(content) {
    this.content = content;

    this.tokens = undefined;
    this.inComment = undefined;
    
    this.number = undefined;
    this.intermediateNumber = undefined;
  }

  getContent() {
    return this.content;
  }

  getTokens() {
    return this.tokens;
  }

  isInComment() {
    return this.inComment;
  }

  getNumber() {
    return this.number;
  }

  getIntermediateNumber() {
    return this.intermediateNumber;
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

  setInComment(inComment) {
    this.inComment = inComment;
  }

  setNumber(number) {
    this.number = number;
  }

  setIntermediateNumber(intermediateNumber) {
    this.intermediateNumber = intermediateNumber;
  }

  pushToken(token) {
    this.tokens.push(token);
  }
  
  static fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
    var line = new Line(content),
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
