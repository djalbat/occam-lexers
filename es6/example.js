'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easylayout;

const verticalSplitterSelector = '#verticalSplitter',
      sizeableElementSelector = '#sizeableElement',
      grammarTextareaSelector = 'textArea#grammar',
      contentTextareaSelector = 'textArea#content',
      tokensTextareaSelector = 'textArea#tokens',
      sizeableElement = new SizeableElement(sizeableElementSelector),
      grammarTextarea = new Textarea(grammarTextareaSelector),
      contentTextarea = new Textarea(contentTextareaSelector),
      tokensTextarea = new Textarea(tokensTextareaSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static run(grammar, Lexer) {
    const grammarTextAreaValue = JSON.stringify(grammar, null, '  ');

    grammarTextarea.setValue(grammarTextAreaValue);

    grammarTextarea.on('keyup', function() {
      Example.updateTokens(Lexer); 
    });

    contentTextarea.on('keyup', function() {
      Example.updateTokens(Lexer);
    });
  }

  static updateTokens(Lexer) {
    try {
      const grammarTextareaValue = grammarTextarea.getValue(),
            contentTextareaValue = contentTextarea.getValue(),
            grammar = JSON.parse(grammarTextareaValue),
            lexer = Lexer.fromGrammar(grammar),
            content = contentTextareaValue,  ///
            lines = lexer.linesFromContent(content),
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
