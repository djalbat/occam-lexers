'use strict';

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

class FlorenceExample {
  static run() {
    var firstLineIndex = 0,
        minimumLinesLength = 2,
        previousLineInComment = false,
        followingLineInComment = false;

    Example.contentTextAreaOnKeyUp(function() {
      Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
    });

    Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
  }
}

module.exports = FlorenceExample;
