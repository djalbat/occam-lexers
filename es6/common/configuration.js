'use strict';

class Configuration {
  constructor(minimumContentLength, previousTokenInComment, nextTokenInComment) {
    this.minimumContentLength = minimumContentLength;
    this.previousTokenInComment = previousTokenInComment;
    this.nextTokenInComment = nextTokenInComment;
  }

  isPreviousTokenInComment() {
    return this.previousTokenInComment;
  }

  isNextTokenInComment() {
    return this.nextTokenInComment;
  }

  setPreviousTokenInComment(previousTokenInComment) {
    this.previousTokenInComment = previousTokenInComment;
  }

  shouldTerminate(contentLength, tokens) {
    const terminate = tokens.some(function(token, index) {
      let terminate = false;

      const tokenContentLength = token.getContentLength();

      contentLength += tokenContentLength;

      if (contentLength >= this.minimumContentLength) {
        const tokenCommentToken = token.isCommentToken();

        terminate = (tokenCommentToken === this.nextTokenInComment);

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
