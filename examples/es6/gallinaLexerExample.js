'use strict';

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    tokensTextAreaSelector = 'textArea#tokens',
    contentTextArea = new TextArea(contentTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var GallinaLexer = require('../../es6/gallina/lexer'),
    GallinaContext = require('../../es6/gallina/context');

class GallinaLexerExample {
  static run() {
    contentTextArea.onChange(function() {
      updateTokens();
    });
 }
}

function updateTokens() {
  var contentTextAreaValue = contentTextArea.getValue(),
      content = contentTextAreaValue,  ///
      commentDepth = 0,
      gallinaContext = new GallinaContext(commentDepth),
      context = gallinaContext, ///
      lines = GallinaLexer.linesFromContent(content, context),
      linesHTML = lines.reduce(function(linesHTML, line) {
        var lineHTML = line.getHTML();

        linesHTML += lineHTML;

        return linesHTML;
      }, ''),
      tokensHTML = linesHTML, ///
      tokensTextAreaHTML = tokensHTML;  ///

  tokensTextArea.html(tokensTextAreaHTML);
}

module.exports = GallinaLexerExample;
