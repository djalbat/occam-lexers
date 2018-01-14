'use strict';

const SignificantTokens = require('./tokens/significant');

class CommonLine {
  constructor(content, rules, tokens, inComment, configuration, replacementTokenMap) {
    this.content = content;
    this.rules = rules;
    this.tokens = tokens;
    this.inComment = inComment;
    this.configuration = configuration;
    this.replacementTokenMap = replacementTokenMap;
  }

  getContent() {
    return this.content;
  }

  getRules() {
    return this.rules;
  }

  getTokens(withReplacementTokens = false) {
    let tokens = this.tokens;

    if (withReplacementTokens) {
      tokens = tokens.reduce(function(tokens, token, index) {
        const replacementToken = this.replacementTokenMap[index];

        token = replacementToken || token;  ///

        tokens.push(token);

        return tokens;
      }.bind(this), []);
    }

    return tokens;
  }

  isInComment() {
    return this.inComment;
  }

  getConfiguration() {
    return this.configuration;
  }

  getReplacementTokenMap() {
    return this.replacementTokenMap;
  }

  getIndexes() {
    const indexes = Object.keys(this.replacementTokenMap);

    return indexes;
  }

  getFirstTokenIndex(firstToken = null) {
    const withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          firstIndex = 0,
          firstTokenIndex = (firstToken === null) ?
                              firstIndex :
                                tokens.indexOf(firstToken);

    return firstTokenIndex;
  }

  getLastTokenIndex(lastToken = null) {
    const withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          tokensLength = tokens.length,
          lastIndex = tokensLength - 1,
          lastTokenIndex = (lastToken === null) ?
                              lastIndex :
                                tokens.indexOf(lastToken);

    return lastTokenIndex;
  }

  asHTML(filePath, withReplacementTokens) {
    let html;

    const tokens = this.getTokens(withReplacementTokens);

    html = tokens.reduce(function(html, token) {
      const tokenHTML = token.asHTML(filePath);

      html += tokenHTML;

      return html;
    }, '');
    
    html += '\n'; ///
    
    return html;
  }

  pushToken(token) {
    this.tokens.push(token);
  }

  replaceToken(replacedToken, replacementToken) {
    const withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          replacedTokenIndex = tokens.indexOf(replacedToken),
          index = replacedTokenIndex;  ///

    this.replacementTokenMap[index] = replacementToken;
  }

  removeReplacementTokens(firstToken, lastToken) {
    const indexes = this.getIndexes(),
          firstTokenIndex = this.getFirstTokenIndex(firstToken),
          lastTokenIndex = this.getLastTokenIndex(lastToken);

    indexes.forEach(function(index) {
      if ((index >= firstTokenIndex) && (index <= lastTokenIndex)) {
        delete this.replacementTokenMap[index];
      }
    }.bind(this));
  }

  initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
    const line = this,  ///
          tokensOrContents = [this.content],
          inComment = CommentTokens.pass(tokensOrContents, line, this.configuration);

    RegularExpressionTokens.pass(tokensOrContents, line);

    StringLiteralTokens.pass(tokensOrContents, line);

    WhitespaceTokens.pass(tokensOrContents, line);

    const tokens = SignificantTokens.pass(tokensOrContents, line, this.rules);

    this.tokens = tokens;

    this.inComment = inComment;
  }

  static fromContentRulesAndConfiguration(Line, content, rules, configuration) {
    const tokens = undefined, ///
          inComment = undefined, //
          line = new Line(content, rules, tokens, inComment, configuration);

    return line;
  }
}

module.exports = CommonLine;
