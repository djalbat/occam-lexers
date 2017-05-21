'use strict';

class Context {
  constructor(minimumLinesLength = Infinity, previousLineInComment = null, followingLineInComment = null) {
    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
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

  setPreviousLineInComment(previousLineInComment) {
    this.previousLineInComment = previousLineInComment;
  }

  shouldTerminate(length) {
    let terminate = false;

    if (length >= this.minimumLinesLength) {
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
