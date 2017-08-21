'use strict';

const SignificantTokens = require('./tokens/significant');

class Line {
  constructor(content) {
    this.content = content;

    this.tokens = undefined;  ///
    
    this.inComment = undefined; ///
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

  asHTML() {
    let html = this.tokens.reduce(function(html, token) {
                 const tokenHTML = token.asHTML();
                  
                 html += tokenHTML;
                  
                 return html;
               }, '');
    
    html += '\n'; ///
    
    return html;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  setInComment(inComment) {
    this.inComment = inComment;
  }

  pushToken(token) {
    this.tokens.push(token);
  }

  static fromContent(Line, content, rules, configuration, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
    const line = new Line(content),
          tokensOrContents = [content],
          inComment = CommentTokens.pass(tokensOrContents, line, configuration);

    RegularExpressionTokens.pass(tokensOrContents, line);

    StringLiteralTokens.pass(tokensOrContents, line);

    WhitespaceTokens.pass(tokensOrContents, line);

    const tokens = SignificantTokens.pass(tokensOrContents, line, rules);

    line.setTokens(tokens);

    line.setInComment(inComment);

    return line;
  }
}

module.exports = Line;
