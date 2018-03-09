'use strict';

class Configuration {
  constructor(previousTokenCommentToken, nextTokenCommentToken, minimumContentLength) {
    this.previousTokenCommentToken = previousTokenCommentToken;
    this.nextTokenCommentToken = nextTokenCommentToken;
    this.minimumContentLength = minimumContentLength;
  }

  isPreviousTokenCommentToken() {
    return this.previousTokenCommentToken;
  }

  isNextTokenCommentToken() {
    return this.nextTokenCommentToken;
  }

  shouldTerminate(contentLength, tokens) {
    const terminate = tokens.some(function(token, index) {
      let terminate = false;

      const tokenContentLength = token.getContentLength();

      contentLength += tokenContentLength;

      if (contentLength >= this.minimumContentLength) {
        const tokenCommentToken = token.isCommentToken();

        terminate = (tokenCommentToken === this.nextTokenCommentToken);

        if (terminate) {
          const start = index + 1;

          tokens.splice(start);
        }
      }

      return terminate;
    }.bind(this));

    return terminate;
  }
}

module.exports = Configuration;
