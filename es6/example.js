'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easylayout;

const verticalSplitterSelector = '#verticalSplitter',
      sizeableElementSelector = '#sizeableElement',
      entriesTextareaSelector = 'textArea#entries',
      contentTextareaSelector = 'textArea#content',
      tokensTextareaSelector = 'textArea#tokens',
      sizeableElement = new SizeableElement(sizeableElementSelector),
      entriesTextarea = new Textarea(entriesTextareaSelector),
      contentTextarea = new Textarea(contentTextareaSelector),
      tokensTextarea = new Textarea(tokensTextareaSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static run(entries, Lexer) {
    const entriesTextAreaValue = JSON.stringify(entries, null, '  ');

    entriesTextarea.setValue(entriesTextAreaValue);

    entriesTextarea.on('keyup', function() {
      Example.updateTokens(Lexer); 
    });

    contentTextarea.on('keyup', function() {
      Example.updateTokens(Lexer);
    });
  }

  static updateTokens(Lexer) {
    try {
      const entriesTextareaValue = entriesTextarea.getValue(),
            contentTextareaValue = contentTextarea.getValue(),
            entries = JSON.parse(entriesTextareaValue),
            lexer = Lexer.fromEntries(entries),
            content = contentTextareaValue,  ///
            lines = lexer.linesFromContent(content),
            htmls = lines.reduce(function(htmls, line, index) {
              const lineHTML = line.asHTML(),
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
