'use strict';

var easy = require('easy'),
    easylayout = require('easy-layout'),
    Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextareaSelector = 'textArea#content',
    tokensTextareaSelector = 'textArea#tokens',
    contentTextarea = new Textarea(contentTextareaSelector),
    tokensTextarea = new Textarea(tokensTextareaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

class Example {
  static contentTextareaOnKeyUp(handler) {
    contentTextarea.on('keyup', handler);
  }

  static updateTokens(lexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    try {
      var contentTextareaValue = contentTextarea.getValue(),
          content = contentTextareaValue,  ///
          contents = content.split(/\n/),
          lines = lexer.linesFromContents(contents, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment),
          htmls = lines.reduce(function(htmls, line, index) {
            var lineHTML = line.getHTML(),
                lineNumber = index + 1,
                html = `${lineNumber}: ${lineHTML}`;

            htmls += html;

            return htmls;
          }, ''),
          tokensTextareaHTML = htmls;  ///

      tokensTextarea.html(tokensTextareaHTML);

      contentTextarea.removeClass('error');
    } catch (error) {
      contentTextarea.addClass('error');

      Example.clearTokens();
    }
  }

  static clearTokens() {
    var tokensTextareaHTML = '';

    tokensTextarea.html(tokensTextareaHTML);
  }
}

module.exports = Example;
