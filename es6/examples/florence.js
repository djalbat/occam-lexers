'use strict';

const Example = require('../example'),
      FlorenceLexer = require('../florence/lexer');

const florenceLexer = FlorenceLexer.fromNothing();

class FlorenceExample {
  static run() {
    const firstLineIndex = 0,
          minimumLinesLength = 2,
          previousLineInComment = false,
          followingLineInComment = false;

    Example.contentTextareaOnKeyUp(function() {
      Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
    });

    Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
  }
}

module.exports = FlorenceExample;
