'use strict';

class Context {
  constructor(lineNumber = 1, minimumLinesLength = Number.POSITIVE_INFINITY, previousLineInComment = null, followingLineInComment = null) {
    this.lineNumber = lineNumber;
    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
  }

  getLineNumber() {
    return this.lineNumber;
  }

  getMinimumLinesLength() {
    return this.minimumLinesLength;
  }

  isPreviousLineInComment() {
    return this.previousLineInComment;
  }

  isFollowingLineInComment() {
    return this.followingLineInComment;
  }

  incrementLineNumber() {
    this.lineNumber++;
  }

  setPreviousLineInComment(previousLineInComment) {
    this.previousLineInComment = previousLineInComment;
  }

  shouldTerminate(linesLength) {
    var terminate = false;

    if (this.minimumLinesLength <= linesLength) {
      if (this.followingLineInComment === null) {
        terminate = true;
      }

      if (this.previousLineInComment === this.followingLineInComment) {
        terminate = true;
      }
    }

    return terminate;
  }
}

module.exports = Context;
