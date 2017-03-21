'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout'),
      Textarea = easy.Textarea,
      options = easylayout.options,
      SizeableElement = easylayout.SizeableElement,
      VerticalSplitter = easylayout.VerticalSplitter;

const leftColumnSelector = '#leftColumn',
      contentTextareaSelector = 'textArea#content',
      tokensTextareaSelector = 'textArea#tokens',
      contentTextarea = new Textarea(contentTextareaSelector),
      tokensTextarea = new Textarea(tokensTextareaSelector),
      leftColumn = new SizeableElement(leftColumnSelector),
      TO_THE_RIGHT_OF = options.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

class Example {
  static contentTextareaOnKeyUp(handler) {
    contentTextarea.on('keyup', handler);
  }

  static updateTokens(lexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    try {
      const contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,  ///
            contents = content.split(/\n/),
            lines = lexer.linesFromContents(contents, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment),
            htmls = lines.reduce(function(htmls, line, index) {
              const lineHTML = line.getHTML(),
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
    const tokensTextareaHTML = '';

    tokensTextarea.html(tokensTextareaHTML);
  }
}

module.exports = Example;
