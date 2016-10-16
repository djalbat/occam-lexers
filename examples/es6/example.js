'use strict';

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    tokensTextAreaSelector = 'textArea#tokens',
    contentTextArea = new TextArea(contentTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

class Example {
  static updateTokens(contentTextAreaValue, lexer) {
    var content = contentTextAreaValue,  ///
        lines = lexer.linesFromContent(content),
        linesHTML = lines.reduce(function(linesHTML, line) {
          var lineHTML = line.getHTML();

          linesHTML += lineHTML;

          return linesHTML;
        }, ''),
        tokensTextAreaHTML = linesHTML;  ///

    tokensTextArea.html(tokensTextAreaHTML);
  }
}

Example.contentTextArea = contentTextArea;  ///

module.exports = Example;
