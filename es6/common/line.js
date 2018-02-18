'use strict';

class CommonLine {
  constructor(content, rules, configuration, tokens, inComment, coveringTokenMap) {
    this.content = content;
    this.rules = rules;
    this.configuration = configuration;
    this.tokens = tokens;
    this.inComment = inComment;
    this.coveringTokenMap = coveringTokenMap;
  }

  getContent() {
    return this.content;
  }

  getRules() {
    return this.rules;
  }

  getConfiguration() {
    return this.configuration;
  }

  getTokens(withCoveringTokens = false) {
    let tokens = this.tokens;

    if (withCoveringTokens) {
      tokens = tokens.reduce(function(tokens, token, index) {
        const coveringToken = this.coveringTokenMap[index];

        token = coveringToken || token;  ///

        tokens.push(token);

        return tokens;
      }.bind(this), []);
    }

    return tokens;
  }

  isInComment() {
    return this.inComment;
  }

  getCoveringToken(coveringTokenIndex) {
    const coveringToken = this.coveringTokenMap[coveringTokenIndex] || null;

    return coveringToken
  }

  getCoveringTokenIndexes() {
    const coveringTokenIndexes = Object.keys(this.coveringTokenMap);

    return coveringTokenIndexes;
  }

  getFirstTokenIndex(firstToken = null) {
    const withCoveringTokens = false,
          tokens = this.getTokens(withCoveringTokens),
          firstIndex = 0,
          firstTokenIndex = (firstToken === null) ?
                              firstIndex :
                                tokens.indexOf(firstToken);

    return firstTokenIndex;
  }

  getLastTokenIndex(lastToken = null) {
    const withCoveringTokens = false,
          tokens = this.getTokens(withCoveringTokens),
          tokensLength = tokens.length,
          lastIndex = tokensLength - 1,
          lastTokenIndex = (lastToken === null) ?
                              lastIndex :
                                tokens.indexOf(lastToken);

    return lastTokenIndex;
  }

  asHTML(filePath, withCoveringTokens) {
    let html;

    const tokens = this.getTokens(withCoveringTokens);

    html = tokens.reduce(function(html, token) {
      const tokenHTML = token.asHTML(filePath);

      html += tokenHTML;

      return html;
    }, '');
    
    html += '\n'; ///
    
    return html;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  coverToken(coveredToken, coveringToken) {
    const coveredTokenIndex = this.tokens.indexOf(coveredToken),
          coveringTokenIndex = coveredTokenIndex;  ///

    this.coveringTokenMap[coveringTokenIndex] = coveringToken;
  }

  replaceToken(oldToken, newToken, newCoveringToken) {
    const oldTokenIndex = this.tokens.indexOf(oldToken),
          oldCoveringTokenIndex = oldTokenIndex, ///
          start = oldTokenIndex,  ///
          deleteCount = 1;  ///

    this.tokens.splice(start, deleteCount, newToken);

    delete this.coveringTokenMap[oldCoveringTokenIndex];

    if (newCoveringToken) {
      const newCoveringTokenIndex = oldTokenIndex; ///

      this.coveringTokenMap[newCoveringTokenIndex] = newCoveringToken;
    }
  }

  removeCoveringTokens(firstToken, lastToken) {
    const indexes = this.getIndexes(),
          firstTokenIndex = this.getFirstTokenIndex(firstToken),
          lastTokenIndex = this.getLastTokenIndex(lastToken);

    indexes.forEach(function(index) {
      if ((index >= firstTokenIndex) && (index <= lastTokenIndex)) {
        delete this.coveringTokenMap[index];
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
          coveringTokenMap = {},
          line = new Line(content, rules, configuration, tokens, inComment, coveringTokenMap);

    return line;
  }
}

module.exports = CommonLine;
